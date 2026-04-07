import fs from 'node:fs'
import path from 'node:path'
import {
  DEFAULT_SITE_URL,
  MAIN_NAVIGATION,
  ORGANIZATION_DATA,
  PRIMARY_KEYWORDS,
  seoRoutes,
} from '../src/seo/routes.js'

const projectRoot = process.cwd()
const publicDir = path.join(projectRoot, 'public')
const siteUrl = (process.env.VITE_SITE_URL || process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)
const rasterExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.svg'])

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function toAbsoluteUrl(relativePath) {
  return new URL(relativePath, `${siteUrl}/`).toString()
}

function collectPublicImages(dirPath) {
  const images = []
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  entries.forEach((entry) => {
    const fullPath = path.join(dirPath, entry.name)

    if (entry.isDirectory()) {
      images.push(...collectPublicImages(fullPath))
      return
    }

    const extension = path.extname(entry.name).toLowerCase()

    if (!rasterExtensions.has(extension)) {
      return
    }

    const relativePath = `/${path.relative(publicDir, fullPath).split(path.sep).join('/')}`
    images.push(relativePath)
  })

  return images
}

function humanizeImageName(relativePath) {
  const baseName = path.basename(relativePath, path.extname(relativePath))
  return baseName
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const sitemapEligibleRoutes = seoRoutes.filter((route) => route.robots?.startsWith('noindex') !== true)

const pageSitemapEntries = sitemapEligibleRoutes
  .map((route) => {
    const imageTag = route.image
      ? `
    <image:image>
      <image:loc>${escapeXml(toAbsoluteUrl(route.image))}</image:loc>
      <image:title>${escapeXml(route.imageAlt || route.title)}</image:title>
      <image:caption>${escapeXml(route.imageAlt || route.description)}</image:caption>
    </image:image>`
      : ''

    return `  <url>
    <loc>${escapeXml(toAbsoluteUrl(route.path))}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${route.priority || '0.7'}</priority>${imageTag}
  </url>`
  })
  .join('\n')

const allPublicImages = collectPublicImages(publicDir)

const imageSitemapEntries = allPublicImages
  .map((imagePath) => `  <url>
    <loc>${escapeXml(siteUrl)}</loc>
    <image:image>
      <image:loc>${escapeXml(toAbsoluteUrl(imagePath))}</image:loc>
      <image:title>${escapeXml(humanizeImageName(imagePath))}</image:title>
      <image:caption>${escapeXml(humanizeImageName(imagePath))}</image:caption>
    </image:image>
  </url>`)
  .join('\n')

const pageSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pageSitemapEntries}
</urlset>
`

const imageSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageSitemapEntries}
</urlset>
`

const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${escapeXml(`${siteUrl}/sitemap-pages.xml`)}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${escapeXml(`${siteUrl}/sitemap-images.xml`)}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

const llmsSections = [
  '# Wonder Christian Centre',
  '',
  `Website: ${siteUrl}`,
  `Organization: ${ORGANIZATION_DATA.name}`,
  `Alternate names: ${ORGANIZATION_DATA.alternateName.join(', ')}`,
  `Founder: ${ORGANIZATION_DATA.founder.name}`,
  'Location: Kampala, Uganda',
  '',
  'Summary:',
  'Wonder Christian Centre is a Christian church in Kampala, Uganda, shaping destinies through worship, discipleship, outreach, miracles, family ministry, leadership conferences, mass evangelism, children support, school and university ministries, and community impact.',
  '',
  'Key entities and topics:',
  ...PRIMARY_KEYWORDS.map((keyword) => `- ${keyword}`),
  '',
  'Primary navigation:',
  ...MAIN_NAVIGATION.map((item) => `- ${item.name}: ${toAbsoluteUrl(item.path)}`),
  '',
  'Important pages:',
  ...sitemapEligibleRoutes.map((route) => `- ${route.title}: ${toAbsoluteUrl(route.path)}`),
  '',
]

fs.mkdirSync(publicDir, { recursive: true })
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapIndexXml, 'utf8')
fs.writeFileSync(path.join(publicDir, 'sitemap-pages.xml'), pageSitemapXml, 'utf8')
fs.writeFileSync(path.join(publicDir, 'sitemap-images.xml'), imageSitemapXml, 'utf8')
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8')
fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsSections.join('\n'), 'utf8')
