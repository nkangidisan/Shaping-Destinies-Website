import { useEffect, useRef, useState } from 'react'
import FaqSection from '../components/FaqSection'
import { seoRouteMap } from '../seo/routes'
import {
  COUNTRY_OPTIONS,
  CURRENCY_OPTIONS,
  GIVING_TYPES,
  formatDonationAmount,
} from '../data/givingOptions'

const giveImages = [
  '/2024/09/MG_2977.jpg',
  '/2024/11/_MG_1017.jpg.jpeg',
]

const initialFormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  country: '',
  givingType: '',
  currency: '',
  amount: '',
  acceptedTerms: false,
}

function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${className}`.trim()} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  )
}

function validateGiveForm(formData) {
  const nextErrors = {}
  const normalizedEmail = formData.email.trim()
  const numericAmount = Number(formData.amount)

  if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required.'
  if (!formData.lastName.trim()) nextErrors.lastName = 'Last name is required.'
  if (!formData.phone.trim()) nextErrors.phone = 'Phone number is required.'
  if (!normalizedEmail) {
    nextErrors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    nextErrors.email = 'Enter a valid email address.'
  }
  if (!formData.country) nextErrors.country = 'Please select a country.'
  if (!formData.givingType) nextErrors.givingType = 'Please choose a giving description.'
  if (!formData.currency) nextErrors.currency = 'Please choose a currency.'
  if (!formData.amount) {
    nextErrors.amount = 'Amount is required.'
  } else if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
    nextErrors.amount = 'Amount must be greater than zero.'
  }
  if (!formData.acceptedTerms) nextErrors.acceptedTerms = 'Please accept the terms to continue.'

  return nextErrors
}

const Give = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [fieldErrors, setFieldErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalAmount = formatDonationAmount(formData.amount, formData.currency)

  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === 'checkbox' ? checked : value,
    }))

    setFieldErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })

    setSubmitError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validateGiveForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors)
      setSubmitError('Please review the highlighted fields and try again.')
      return
    }

    setIsSubmitting(true)
    setSubmitError('')
    setFieldErrors({})

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          country: formData.country,
          givingType: formData.givingType,
          currency: formData.currency,
          amount: Number(formData.amount),
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || 'Unable to start checkout. Please try again.')
      }

      if (!data.url || typeof data.url !== 'string') {
        throw new Error('Checkout redirect URL was not returned.')
      }

      if (!data.url.startsWith('https://')) {
        throw new Error('Checkout redirect URL must use HTTPS.')
      }

      window.location.href = data.url
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong. Please try again.')
      setIsSubmitting(false)
    }
  }

  const getFieldClassName = (fieldName, extraClassName = '') =>
    `${extraClassName} ${fieldErrors[fieldName] ? 'give-field--error' : ''}`.trim()

  return (
    <div className="give-page">
      <section className="give-hero">
        <div className="give-hero__bg" />
        <div className="give-hero__overlay" />
        <div className="container give-hero__content">
          <Reveal className="give-hero__copy">
            <span className="eyebrow">Give</span>
            <h1>Give</h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <article className="give-message surface-card">
              <div className="give-message__copy">
                <span className="eyebrow">A Call to Give</span>
                <h2>Your generosity helps us continue our mission of transforming lives.</h2>
                <p>
                  As the Bible says, &quot;It is He who gives you power to get wealth, that He may establish His covenant&quot; (Deuteronomy 8:18). Every contribution, big or small, makes a difference.
                </p>
                <blockquote>&quot;For such a time as this...You have been chosen!&quot; (Esther 4:14)</blockquote>
                <p>
                  We believe that everyone has a part to play in God&apos;s kingdom. Whether through prayer, volunteering, or financial support, your involvement can make a lasting impact. Join us in spreading the gospel, serving the community, and shaping destinies.
                </p>
              </div>
            </article>
          </Reveal>

          <div className="give-layout">
            <div className="give-rail">
              <Reveal>
                <article className="give-info surface-card">
                  <h2>Ways to Give</h2>
                  <p className="give-info__intro">
                    Choose the giving channel that works best for you and support the mission with confidence.
                  </p>
                  <a href="#ways-to-give" className="button button-primary">Ways to Give</a>
                </article>
              </Reveal>

              <Reveal delay={60}>
                <article id="ways-to-give" className="give-info surface-card">
                  <h2>BANK ACCOUNT INFORMATION</h2>
                  <div className="give-info__list">
                    <p><strong>MINISTRY ACCOUNT</strong></p>
                    <p><strong>Bank:</strong> EQUITY BANK UGANDA</p>
                    <p><strong>Swift Code:</strong> EQBLUGKA</p>
                    <p><strong>Account Name:</strong> RUBAGA WONDER CHRISTIAN CENTER</p>
                    <p><strong>Account Number:</strong> 1003200864289</p>
                  </div>
                  <div className="give-info__list">
                    <p><strong>TEAM LEADER&apos;S ACCOUNT</strong></p>
                    <p><strong>Bank:</strong> EQUITY BANK UGANDA</p>
                    <p><strong>Swift Code:</strong> EQBLUGKA</p>
                    <p><strong>Account Name:</strong> KICONCO BENJAMIN</p>
                    <p><strong>Account Number:</strong> 1034101907295</p>
                  </div>
                  <div className="give-info__list">
                    <p><strong>OTHER WAYS TO GIVE</strong></p>
                    <p>The other ways to give include; MOBILE MONEY-0707000999, Western Union, Money Gram, Send Wave (0707000999) and Remitly among others.</p>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={120}>
                <figure className="give-image surface-card">
                  <img src={giveImages[0]} alt="Members supporting Wonder Christian Centre ministry" loading="lazy" decoding="async" />
                </figure>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <div className="give-form-stack">
                <article id="give-by-card" className="give-form surface-card">
                  <div className="give-form__heading">
                    <span className="eyebrow">Ways to Give</span>
                    <h2>Fill in your gift details below to pay using VISA/MASTERCARD</h2>
                    <p>Use the form below to support Wonder Christian Centre securely and directly.</p>
                  </div>

                  <form className="give-form__grid" onSubmit={handleSubmit} noValidate>
                    <label className={getFieldClassName('firstName', 'give-field')}>
                      <span>First Name</span>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Input First Name..."
                        value={formData.firstName}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(fieldErrors.firstName)}
                      />
                      {fieldErrors.firstName ? <small className="give-field__error">{fieldErrors.firstName}</small> : null}
                    </label>
                    <label className={getFieldClassName('lastName', 'give-field')}>
                      <span>Last Name</span>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Input Last Name..."
                        value={formData.lastName}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(fieldErrors.lastName)}
                      />
                      {fieldErrors.lastName ? <small className="give-field__error">{fieldErrors.lastName}</small> : null}
                    </label>
                    <label className={getFieldClassName('phone', 'give-field')}>
                      <span>Phone Number</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Input Phone Number..."
                        value={formData.phone}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(fieldErrors.phone)}
                      />
                      {fieldErrors.phone ? <small className="give-field__error">{fieldErrors.phone}</small> : null}
                    </label>
                    <label className={getFieldClassName('email', 'give-field')}>
                      <span>Email Address</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Input Email Address..."
                        value={formData.email}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(fieldErrors.email)}
                      />
                      {fieldErrors.email ? <small className="give-field__error">{fieldErrors.email}</small> : null}
                    </label>
                    <label className={getFieldClassName('country', 'give-field')}>
                      <span>Select Country</span>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(fieldErrors.country)}
                      >
                        <option value="" disabled>Select Country</option>
                        {COUNTRY_OPTIONS.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                      {fieldErrors.country ? <small className="give-field__error">{fieldErrors.country}</small> : null}
                    </label>
                    <label className={getFieldClassName('givingType', 'give-field')}>
                      <span>Giving Description</span>
                      <select
                        name="givingType"
                        value={formData.givingType}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(fieldErrors.givingType)}
                      >
                        <option value="" disabled>Select Giving Description</option>
                        {GIVING_TYPES.map((givingType) => (
                          <option key={givingType} value={givingType}>{givingType}</option>
                        ))}
                      </select>
                      {fieldErrors.givingType ? <small className="give-field__error">{fieldErrors.givingType}</small> : null}
                    </label>
                    <label className={getFieldClassName('currency', 'give-field')}>
                      <span>Select Currency</span>
                      <select
                        name="currency"
                        value={formData.currency}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(fieldErrors.currency)}
                      >
                        <option value="" disabled>Select Currency</option>
                        {CURRENCY_OPTIONS.map((currency) => (
                          <option key={currency.code} value={currency.code}>{currency.label}</option>
                        ))}
                      </select>
                      {fieldErrors.currency ? <small className="give-field__error">{fieldErrors.currency}</small> : null}
                    </label>
                    <label className={getFieldClassName('amount', 'give-field')}>
                      <span>Amount</span>
                      <input
                        type="number"
                        name="amount"
                        min="0"
                        step="0.01"
                        placeholder="Input Amount..."
                        value={formData.amount}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(fieldErrors.amount)}
                      />
                      {fieldErrors.amount ? <small className="give-field__error">{fieldErrors.amount}</small> : null}
                    </label>
                    <label className="give-field give-field--full">
                      <span>Total Amount</span>
                      <input type="text" value={totalAmount || 'Total Amount'} readOnly />
                    </label>
                    <label className={`give-checkbox ${fieldErrors.acceptedTerms ? 'give-checkbox--error' : ''}`.trim()}>
                      <input
                        type="checkbox"
                        name="acceptedTerms"
                        checked={formData.acceptedTerms}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(fieldErrors.acceptedTerms)}
                      />
                      <span>I accept the terms and conditions</span>
                    </label>
                    {fieldErrors.acceptedTerms ? (
                      <p className="give-checkbox__error">{fieldErrors.acceptedTerms}</p>
                    ) : null}
                    {submitError ? (
                      <div className="give-status give-status--error" role="alert" aria-live="polite">
                        {submitError}
                      </div>
                    ) : null}
                    <div className="give-actions">
                      <button type="submit" className="button button-primary" disabled={isSubmitting}>
                        {isSubmitting ? 'Redirecting...' : 'Give by Card'}
                      </button>
                    </div>
                  </form>
                </article>

                <figure className="give-image give-image--wide surface-card">
                  <img src={giveImages[1]} alt="Generosity supporting Wonder Christian Centre outreach" loading="lazy" decoding="async" />
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection {...seoRouteMap['/give'].faqSection} />

      <style>{`
        .give-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .give-hero {
          position: relative;
          overflow: clip;
          background: #081d39;
        }

        .give-hero__bg,
        .give-hero__overlay {
          position: absolute;
          inset: 0;
        }

        .give-hero__bg {
          background:
            linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)),
            url('/2024/11/_MG_1025.jpg.jpeg') center top/cover no-repeat;
          transform: scale(1.06);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .give-hero__overlay {
          background:
            radial-gradient(circle at 22% 22%, rgba(181, 214, 58, 0.18), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.84), rgba(8, 29, 57, 0.4) 48%, rgba(8, 29, 57, 0.82));
        }

        .give-hero__content {
          position: relative;
          z-index: 1;
          padding: 7rem 0 5.5rem;
        }

        .give-hero__copy {
          max-width: 42rem;
          color: white;
        }

        .give-hero .eyebrow {
          color: rgba(255, 255, 255, 0.92);
        }

        .give-hero .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.92), transparent);
        }

        .give-hero__copy h1 {
          margin: 1rem 0 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 6vw, 5.4rem);
          line-height: 0.94;
          letter-spacing: -0.06em;
          color: white;
        }

        .give-message {
          margin-bottom: 1.15rem;
          padding: 1.4rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.16), transparent 24%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 242, 231, 0.88));
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
        }

        .give-message__copy h2 {
          margin: 0.9rem 0 0.95rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.9rem, 4vw, 3rem);
          line-height: 1;
          color: var(--color-blue-deep);
        }

        .give-message__copy p {
          margin: 0 0 1rem;
          font-size: 1rem;
          line-height: 1.85;
          color: var(--color-text);
        }

        .give-message__copy p:last-child {
          margin-bottom: 0;
        }

        .give-message__copy blockquote {
          margin: 1.2rem 0;
          padding: 1rem 1.1rem;
          border-left: 4px solid var(--color-lemon);
          border-radius: 0 1rem 1rem 0;
          background: rgba(16, 58, 113, 0.04);
          font-family: 'Outfit', sans-serif;
          font-size: 1.12rem;
          line-height: 1.65;
          color: var(--color-blue-deep);
        }

        .give-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          gap: 1.3rem;
          align-items: start;
        }

        .give-rail,
        .give-form-stack {
          display: grid;
          gap: 1.2rem;
        }

        .give-info,
        .give-form,
        .give-image {
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            rgba(255, 255, 255, 0.97);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
        }

        .give-info {
          padding: 2rem;
        }

        .give-info h2,
        .give-form__heading h2 {
          margin: 0 0 1.2rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.9rem, 3vw, 2.6rem);
          line-height: 1.02;
          color: var(--color-blue-deep);
        }

        .give-info__list {
          margin-bottom: 1.4rem;
          padding: 1.1rem 1.15rem;
          border-radius: 1rem;
          background: rgba(16, 58, 113, 0.04);
        }

        .give-info__intro {
          margin: 0 0 1.2rem;
          font-size: 1rem;
          line-height: 1.85;
          color: var(--color-text);
        }

        .give-info__list p,
        .give-form__heading p {
          margin: 0 0 0.7rem;
          font-size: 1rem;
          line-height: 1.8;
          color: var(--color-text);
        }

        .give-info__list p:last-child,
        .give-form__heading p:last-child {
          margin-bottom: 0;
        }

        .give-form {
          padding: 2rem;
        }

        .give-image {
          margin: 0;
          overflow: hidden;
          padding: 0.8rem;
          border-radius: 1.45rem;
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .give-image:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
        }

        .give-image img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 1rem;
          object-fit: contain;
          background: rgba(255, 255, 255, 0.94);
        }

        .give-image--wide img {
          min-height: 20rem;
        }

        .give-form__heading {
          margin-bottom: 1.4rem;
        }

        .give-form__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .give-field {
          display: grid;
          gap: 0.45rem;
        }

        .give-field--full,
        .give-checkbox,
        .give-checkbox__error,
        .give-status,
        .give-actions {
          grid-column: span 2;
        }

        .give-field span,
        .give-checkbox span {
          font-size: 0.94rem;
          font-weight: 700;
          color: var(--color-blue-deep);
        }

        .give-field input,
        .give-field select {
          width: 100%;
          min-height: 3.4rem;
          padding: 0.9rem 1rem;
          border: 1px solid rgba(16, 58, 113, 0.12);
          border-radius: 0.95rem;
          background: white;
          color: var(--color-text);
          font: inherit;
          outline: none;
          transition: border-color var(--transition), box-shadow var(--transition);
        }

        .give-field input:focus,
        .give-field select:focus {
          border-color: rgba(181, 214, 58, 0.88);
          box-shadow: 0 0 0 4px rgba(181, 214, 58, 0.12);
        }

        .give-field--error input,
        .give-field--error select {
          border-color: rgba(194, 54, 22, 0.45);
          box-shadow: 0 0 0 4px rgba(194, 54, 22, 0.08);
        }

        .give-field__error,
        .give-checkbox__error {
          margin: 0;
          font-size: 0.85rem;
          color: #b42318;
        }

        .give-checkbox {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.2rem;
        }

        .give-checkbox input {
          width: 1.05rem;
          height: 1.05rem;
          accent-color: #b5d63a;
        }

        .give-checkbox--error span {
          color: #8f1d16;
        }

        .give-status {
          padding: 0.9rem 1rem;
          border-radius: 0.95rem;
          border: 1px solid rgba(194, 54, 22, 0.18);
          background: rgba(194, 54, 22, 0.08);
          color: #8f1d16;
          font-size: 0.94rem;
          line-height: 1.6;
        }

        .give-actions {
          display: flex;
          justify-content: flex-start;
        }

        .give-actions button[disabled] {
          opacity: 0.72;
          cursor: progress;
        }

        @media (max-width: 980px) {
          .give-layout,
          .give-form__grid {
            grid-template-columns: 1fr;
          }

          .give-field--full,
          .give-checkbox,
          .give-checkbox__error,
          .give-status,
          .give-actions {
            grid-column: auto;
          }
        }

        @media (max-width: 640px) {
          .give-hero__content {
            padding: 5.6rem 0 4.8rem;
          }

          .give-message {
            padding: 1.25rem;
          }

          .give-info,
          .give-form {
            padding: 1.35rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Give
