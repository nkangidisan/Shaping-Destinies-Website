import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_SITE_URL,
  ORGANIZATION_DATA,
  SITE_NAME,
  getSeoEntry,
} from '../seo/routes'

function ensureMeta(selector, attributes) {
  let node = document.head.querySelector(selector)

  if (!node) {
    node = document.createElement('meta')
    document.head.appendChild(node)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value)
  })

  return node
}

function ensureLink(selector, attributes) {
  let node = document.head.querySelector(selector)

  if (!node) {
    node = document.createElement('link')
    document.head.appendChild(node)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value)
  })

  return node
}

function ensureJsonLd(id, data) {
  let script = document.head.querySelector(`#${id}`)

  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(data)
}

function buildAbsoluteUrl(origin, path = '/') {
  if (/^https?:\/\//.test(path)) {
    return path
  }

  return new URL(path, origin).toString()
}

function buildBreadcrumbSchema(origin, breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(origin, item.path),
    })),
  }
}

function buildOrganizationSchema(origin) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: ORGANIZATION_DATA.name,
    url: origin,
    logo: buildAbsoluteUrl(origin, '/2024/08/icon.png'),
    image: buildAbsoluteUrl(origin, DEFAULT_OG_IMAGE),
    telephone: ORGANIZATION_DATA.telephone,
    email: ORGANIZATION_DATA.email,
    address: ORGANIZATION_DATA.address,
    sameAs: ORGANIZATION_DATA.sameAs,
  }
}

function buildWebsiteSchema(origin) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: origin,
    inLanguage: 'en',
  }
}

function buildWebPageSchema(origin, seo, canonicalUrl, imageUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': seo.type || 'WebPage',
    name: seo.title,
    description: seo.description,
    url: canonicalUrl,
    image: imageUrl,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: origin,
    },
  }
}

function buildFaqSchema(faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

const SeoManager = () => {
  const location = useLocation()

  useEffect(() => {
    const seo = getSeoEntry(location.pathname)
    const origin =
      import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') ||
      window.location.origin ||
      DEFAULT_SITE_URL
    const canonicalUrl = buildAbsoluteUrl(origin, location.pathname)
    const imageUrl = buildAbsoluteUrl(origin, seo.image || DEFAULT_OG_IMAGE)

    document.documentElement.lang = 'en'
    document.title = seo.title

    ensureMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    })
    ensureMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    })
    ensureMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: seo.keywords?.join(', ') || '',
    })
    ensureMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    ensureMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE_NAME,
    })
    ensureMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title,
    })
    ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.description,
    })
    ensureMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })
    ensureMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    })
    ensureMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    ensureMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: seo.title,
    })
    ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: seo.description,
    })
    ensureMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    })

    ensureLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    })

    ensureJsonLd('seo-organization-schema', buildOrganizationSchema(origin))
    ensureJsonLd('seo-website-schema', buildWebsiteSchema(origin))
    ensureJsonLd('seo-page-schema', buildWebPageSchema(origin, seo, canonicalUrl, imageUrl))
    ensureJsonLd('seo-breadcrumb-schema', buildBreadcrumbSchema(origin, seo.breadcrumbs || []))

    const existingFaq = document.head.querySelector('#seo-faq-schema')

    if (seo.faqSection?.items?.length) {
      ensureJsonLd('seo-faq-schema', buildFaqSchema(seo.faqSection.items))
    } else if (existingFaq) {
      existingFaq.remove()
    }
  }, [location.pathname])

  return null
}

export default SeoManager
