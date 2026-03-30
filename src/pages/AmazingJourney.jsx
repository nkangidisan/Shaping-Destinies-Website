import { useEffect, useRef } from 'react'

const journeyImages = [
  '/2024/09/CHURCH-IMPRESSION-BANNER.png',
  '/2024/09/CHURCH-IMPRESSION-BANNER-100CM-X-180CM-RED-1-768x1382.jpg',
  '/2024/09/cb_DSC_0120.jpg',
]

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

const AmazingJourney = () => {
  return (
    <div className="amazing-journey-page">
      <section className="amazing-journey-hero">
        <div className="amazing-journey-hero__bg" />
        <div className="amazing-journey-hero__overlay" />
        <div className="container amazing-journey-hero__content">
          <Reveal className="amazing-journey-hero__copy">
            <span className="eyebrow">The amazing journey of wcc</span>
            <h1>The amazing journey of wcc</h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="amazing-journey-grid">
            {journeyImages.map((image, index) => (
              <Reveal key={image} delay={index * 90}>
                <figure className={`amazing-journey-card surface-card ${index === 0 ? 'amazing-journey-card--wide' : ''}`}>
                  <img src={image} alt="The amazing journey of WCC" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .amazing-journey-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .amazing-journey-hero {
          position: relative;
          overflow: clip;
          background: #081d39;
        }

        .amazing-journey-hero__bg,
        .amazing-journey-hero__overlay {
          position: absolute;
          inset: 0;
        }

        .amazing-journey-hero__bg {
          background:
            radial-gradient(circle at 18% 18%, rgba(181, 214, 58, 0.24), transparent 18%),
            radial-gradient(circle at 78% 24%, rgba(255, 255, 255, 0.08), transparent 16%),
            linear-gradient(135deg, #06162c 0%, #0a2142 50%, #143c74 100%);
          transform: scale(1.04);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .amazing-journey-hero__overlay {
          background:
            radial-gradient(circle at 22% 22%, rgba(181, 214, 58, 0.18), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.84), rgba(8, 29, 57, 0.4) 48%, rgba(8, 29, 57, 0.82));
        }

        .amazing-journey-hero__content {
          position: relative;
          z-index: 1;
          padding: 7rem 0 5.5rem;
        }

        .amazing-journey-hero__copy {
          max-width: 42rem;
          color: white;
        }

        .amazing-journey-hero .eyebrow {
          color: rgba(255, 255, 255, 0.92);
        }

        .amazing-journey-hero .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.92), transparent);
        }

        .amazing-journey-hero__copy h1 {
          margin: 1rem 0 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 6vw, 5.4rem);
          line-height: 0.94;
          letter-spacing: -0.06em;
          color: white;
        }

        .amazing-journey-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          gap: 1.2rem;
          align-items: start;
        }

        .amazing-journey-card {
          margin: 0;
          overflow: hidden;
          padding: 0.85rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .amazing-journey-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
        }

        .amazing-journey-card--wide {
          grid-row: span 2;
        }

        .amazing-journey-card img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 1rem;
          object-fit: contain;
          background: rgba(255, 255, 255, 0.94);
        }

        @media (max-width: 980px) {
          .amazing-journey-grid {
            grid-template-columns: 1fr;
          }

          .amazing-journey-card--wide {
            grid-row: auto;
          }
        }

        @media (max-width: 640px) {
          .amazing-journey-hero__content {
            padding: 5.6rem 0 4.8rem;
          }

          .amazing-journey-card {
            padding: 0.65rem;
            border-radius: 1.1rem;
          }

          .amazing-journey-card img {
            border-radius: 0.8rem;
          }
        }
      `}</style>
    </div>
  )
}

export default AmazingJourney
