import { Link, useSearchParams } from 'react-router-dom'
import { seoRoutes } from '../seo/routes'

function normalizeSearchText(value) {
  return value.toLowerCase().trim()
}

const searchableRoutes = seoRoutes.filter((route) => route.path !== '/search')

const Search = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const normalizedQuery = normalizeSearchText(query)

  const results = normalizedQuery
    ? searchableRoutes.filter((route) => {
        const haystack = [
          route.title,
          route.description,
          ...(route.keywords || []),
          ...(route.breadcrumbs || []).map((breadcrumb) => breadcrumb.name),
        ]
          .join(' ')
          .toLowerCase()

        return haystack.includes(normalizedQuery)
      })
    : []

  return (
    <div className="search-page">
      <section className="section">
        <div className="container">
          <article className="search-panel surface-card">
            <span className="eyebrow">Site Search</span>
            <h1>Search Wonder Christian Centre</h1>
            <p>
              Search Wonder Christian Centre, WCCUG, Benjamin Kiconco, outreach programs, giving resources, and ministry pages.
            </p>

            {normalizedQuery ? (
              <>
                <h2 className="search-subtitle">Results for &quot;{query}&quot;</h2>
                {results.length ? (
                  <div className="search-results">
                    {results.map((result) => (
                      <Link key={result.path} to={result.path} className="search-result">
                        <h3>{result.title}</h3>
                        <p>{result.description}</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="search-empty">
                    No direct matches were found. Try searching for Wonder Christian Centre, WCCUG, Benjamin Kiconco, outreach, giving, or Kampala church.
                  </p>
                )}
              </>
            ) : (
              <p className="search-empty">
                Add a search query using the <code>?q=</code> parameter to explore Wonder Christian Centre pages.
              </p>
            )}
          </article>
        </div>
      </section>

      <style>{`
        .search-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .search-panel {
          padding: 1.6rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.14), transparent 22%),
            rgba(255, 255, 255, 0.97);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
        }

        .search-panel h1,
        .search-subtitle,
        .search-result h3 {
          color: var(--color-blue-deep);
          font-family: 'Outfit', sans-serif;
        }

        .search-panel h1 {
          margin: 1rem 0;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1;
        }

        .search-subtitle {
          margin: 1.5rem 0 1rem;
          font-size: 1.45rem;
        }

        .search-panel p,
        .search-result p {
          color: var(--color-text);
          line-height: 1.8;
        }

        .search-results {
          display: grid;
          gap: 1rem;
        }

        .search-result {
          display: block;
          padding: 1rem 1.1rem;
          border-radius: 1rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 18px 40px rgba(8, 29, 57, 0.06);
        }

        .search-result h3 {
          margin: 0 0 0.45rem;
          font-size: 1.15rem;
        }

        .search-result p,
        .search-empty {
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default Search
