import fs from 'node:fs'
import path from 'node:path'
import { DEFAULT_SITE_URL, seoRoutes } from '../src/seo/routes.js'

const projectRoot = process.cwd()
const publicDir = path.join(projectRoot, 'public')
const siteUrl = (process.env.VITE_SITE_URL || process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')

const sitemapEntries = seoRoutes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${route.priority || '0.7'}</priority>
  </url>`,
  )
  .join('\n')

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

fs.mkdirSync(publicDir, { recursive: true })
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8')
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8')
