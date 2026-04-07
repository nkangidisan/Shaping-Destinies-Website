import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_SITE_URL,
  MAIN_NAVIGATION,
  ORGANIZATION_DATA,
  PRIMARY_KEYWORDS,
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
    alternateName: ORGANIZATION_DATA.alternateName,
    description: ORGANIZATION_DATA.description,
    url: origin,
    logo: buildAbsoluteUrl(origin, '/2024/08/icon.png'),
    image: buildAbsoluteUrl(origin, DEFAULT_OG_IMAGE),
    telephone: ORGANIZATION_DATA.telephone,
    email: ORGANIZATION_DATA.email,
    address: ORGANIZATION_DATA.address,
    founder: ORGANIZATION_DATA.founder,
    areaServed: ORGANIZATION_DATA.areaServed,
    keywords: ORGANIZATION_DATA.keywords,
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
    description: ORGANIZATION_DATA.description,
    keywords: PRIMARY_KEYWORDS.join(', '),
    potentialAction: {
      '@type': 'SearchAction',
      target: `${origin}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
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
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: imageUrl,
      caption: seo.imageAlt || seo.title,
    },
    inLanguage: 'en',
    keywords: seo.keywords?.join(', ') || PRIMARY_KEYWORDS.join(', '),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: origin,
    },
  }
}

function buildNavigationSchema(origin) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Wonder Christian Centre primary navigation',
    itemListElement: MAIN_NAVIGATION.map((item, index) => ({
      '@type': 'SiteNavigationElement',
      position: index + 1,
      name: item.name,
      url: buildAbsoluteUrl(origin, item.path),
    })),
  }
}

function buildImageSchema(imageUrl, seo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: imageUrl,
    url: imageUrl,
    caption: seo.imageAlt || seo.title,
    representativeOfPage: true,
    creator: {
      '@type': 'Organization',
      name: SITE_NAME,
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
    ensureMeta('meta[name="author"]', {
      name: 'author',
      content: 'Wonder Christian Centre',
    })
    ensureMeta('meta[name="publisher"]', {
      name: 'publisher',
      content: 'Wonder Christian Centre',
    })
    ensureMeta('meta[name="application-name"]', {
      name: 'application-name',
      content: SITE_NAME,
    })
    ensureMeta('meta[name="category"]', {
      name: 'category',
      content: 'Church, Christian Ministry, Faith Community, Outreach',
    })
    ensureMeta('meta[name="robots"]', {
      name: 'robots',
      content: seo.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    })
    ensureMeta('meta[name="googlebot"]', {
      name: 'googlebot',
      content: seo.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    })
    ensureMeta('meta[name="bingbot"]', {
      name: 'bingbot',
      content: seo.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
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
    ensureMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: 'en_UG',
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
    ensureMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: seo.imageAlt || seo.title,
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
    ensureMeta('meta[name="twitter:image:alt"]', {
      name: 'twitter:image:alt',
      content: seo.imageAlt || seo.title,
    })

    ensureLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    })
    ensureLink('link[rel="alternate"][hreflang="en"]', {
      rel: 'alternate',
      hreflang: 'en',
      href: canonicalUrl,
    })

    ensureJsonLd('seo-organization-schema', buildOrganizationSchema(origin))
    ensureJsonLd('seo-website-schema', buildWebsiteSchema(origin))
    ensureJsonLd('seo-page-schema', buildWebPageSchema(origin, seo, canonicalUrl, imageUrl))
    ensureJsonLd('seo-breadcrumb-schema', buildBreadcrumbSchema(origin, seo.breadcrumbs || []))
    ensureJsonLd('seo-navigation-schema', buildNavigationSchema(origin))
    ensureJsonLd('seo-image-schema', buildImageSchema(imageUrl, seo))

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
