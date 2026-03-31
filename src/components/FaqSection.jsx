import { Link } from 'react-router-dom'

function SmartInternalLink({ href, children, className }) {
  if (href.startsWith('http')) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}

const FaqSection = ({ eyebrow = 'FAQ', title, intro, items = [], links = [] }) => {
  if (!items.length) {
    return null
  }

  return (
    <section className="section section-cream">
      <div className="container">
        <div className="seo-faq">
          <div className="seo-faq__intro">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="section-title">{title}</h2>
            {intro ? <p>{intro}</p> : null}
          </div>

          <div className="seo-faq__grid">
            <div className="seo-faq__items">
              {items.map((item) => (
                <details key={item.question} className="seo-faq__item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>

            {links.length ? (
              <aside className="seo-faq__links surface-card" aria-label="Related pages">
                <span className="eyebrow">Related Pages</span>
                <div className="seo-faq__link-list">
                  {links.map((link) => (
                    <SmartInternalLink key={link.href} href={link.href} className="seo-faq__link-chip">
                      {link.label}
                    </SmartInternalLink>
                  ))}
                </div>
              </aside>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
