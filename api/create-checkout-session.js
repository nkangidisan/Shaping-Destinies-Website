import Stripe from 'stripe'
import {
  COUNTRY_OPTIONS,
  GIVING_TYPES,
  getCurrencyConfig,
  toStripeUnitAmount,
} from '../src/data/givingOptions.js'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2025-02-24.acacia',
    })
  : null

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(payload))
}

function getOrigin(req) {
  return req.headers.origin || `https://${req.headers.host}`
}

function parseRequestBody(req) {
  if (typeof req.body === 'string') {
    return JSON.parse(req.body)
  }

  if (req.body && typeof req.body === 'object') {
    return req.body
  }

  return {}
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return sendJson(res, 405, { error: 'Method not allowed' })
  }

  if (!stripe) {
    console.error('Missing STRIPE_SECRET_KEY environment variable')
    return sendJson(res, 500, { error: 'Payment service is not configured.' })
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      givingType,
      currency,
      amount,
    } = parseRequestBody(req)

    const normalizedFields = {
      firstName: typeof firstName === 'string' ? firstName.trim() : '',
      lastName: typeof lastName === 'string' ? lastName.trim() : '',
      email: typeof email === 'string' ? email.trim() : '',
      phone: typeof phone === 'string' ? phone.trim() : '',
      country: typeof country === 'string' ? country.trim() : '',
      givingType: typeof givingType === 'string' ? givingType.trim() : '',
      currency: typeof currency === 'string' ? currency.trim().toUpperCase() : '',
      amount: Number(amount),
    }

    const hasMissingFields = Object.entries(normalizedFields).some(([, value]) => {
      if (typeof value === 'number') {
        return Number.isNaN(value)
      }

      return !value
    })

    if (hasMissingFields) {
      return sendJson(res, 400, { error: 'Please provide all required donation fields.' })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedFields.email)) {
      return sendJson(res, 400, { error: 'Please provide a valid email address.' })
    }

    if (!COUNTRY_OPTIONS.includes(normalizedFields.country)) {
      return sendJson(res, 400, { error: 'Please select a valid country.' })
    }

    if (!GIVING_TYPES.includes(normalizedFields.givingType)) {
      return sendJson(res, 400, { error: 'Please select a valid giving description.' })
    }

    const currencyConfig = getCurrencyConfig(normalizedFields.currency)

    if (!currencyConfig) {
      return sendJson(res, 400, { error: 'Please select a supported currency.' })
    }

    if (!Number.isFinite(normalizedFields.amount) || normalizedFields.amount <= 0) {
      return sendJson(res, 400, { error: 'Amount must be a number greater than zero.' })
    }

    const unitAmount = toStripeUnitAmount(normalizedFields.amount, normalizedFields.currency)

    if (!unitAmount || unitAmount <= 0) {
      return sendJson(res, 400, { error: 'Unable to process the donation amount.' })
    }

    const origin = getOrigin(req)
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: normalizedFields.email,
      success_url: `${origin}/success`,
      cancel_url: `${origin}/give`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: currencyConfig.code.toLowerCase(),
            unit_amount: unitAmount,
            product_data: {
              name: `Giving - ${normalizedFields.givingType} by ${normalizedFields.firstName} ${normalizedFields.lastName}`,
            },
          },
        },
      ],
      metadata: {
        firstName: normalizedFields.firstName,
        lastName: normalizedFields.lastName,
        phone: normalizedFields.phone,
        country: normalizedFields.country,
        givingType: normalizedFields.givingType,
      },
    })

    return sendJson(res, 200, { id: session.id })
  } catch (error) {
    console.error('Stripe checkout session creation failed:', error)
    return sendJson(res, 500, { error: 'Unable to create checkout session. Please try again.' })
  }
}
