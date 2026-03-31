import { useEffect, useRef } from 'react'

const galleryImages = [
  '/2024/09/0-1.jpg',
  '/2024/09/1-1.jpg',
  '/2024/09/2.jpg',
  '/2024/09/3.jpg',
  '/2024/09/4.jpg',
  '/2024/09/5.jpg',
  '/2024/09/6.jpg',
  '/2024/09/7.jpg',
  '/2024/09/8.jpg',
  '/2024/09/9.jpg',
  '/2024/09/10.jpg',
  '/2024/09/11.jpg',
  '/2024/09/12.jpg',
  '/2024/09/13.jpg',
  '/2024/09/14.jpg',
  '/2024/09/15.jpg',
  '/2024/09/16.jpg',
  '/2024/09/17.jpg',
  '/2024/09/18.jpg',
  '/2024/09/19.jpg',
  '/2024/09/20.jpg',
  '/2024/09/21.jpg',
  '/2024/09/22.jpg',
  '/2024/09/23.jpg',
]

function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
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

const Outreach = () => {
  return (
    <div className="outreach-page">
      <section className="outreach-hero">
        <div className="outreach-hero__bg" />
        <div className="outreach-hero__overlay" />
        <div className="container outreach-hero__content">
          <Reveal className="outreach-hero__copy">
            <span className="eyebrow">All for One Missions</span>
            <h1>All for One</h1>
          </Reveal>
        </div>
      </section>

      <section className="section outreach-gallery-section">
        <div className="container">
          <div className="outreach-gallery">
            {galleryImages.map((image, index) => (
              <Reveal key={image} delay={(index % 4) * 70}>
                <figure className={`outreach-gallery__item ${index % 5 === 0 ? 'is-featured' : ''}`}>
                  <img src={image} alt={`Ambassadors of Hope ${index + 1}`} loading="lazy" decoding="async" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .outreach-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f5f7fb 100%);
        }

        .outreach-hero {
          position: relative;
          min-height: calc(85vh - 7rem);
          display: grid;
          align-items: center;
          overflow: clip;
          background: #081d39;
        }

        .outreach-hero__bg,
        .outreach-hero__overlay {
          position: absolute;
          inset: 0;
        }

        .outreach-hero__bg {
          background: url('/2024/08/img_e4w.jpg') center center / cover no-repeat;
          transform: scale(1.08);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .outreach-hero__overlay {
          background:
            radial-gradient(circle at 22% 22%, rgba(181, 214, 58, 0.24), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.84), rgba(8, 29, 57, 0.5) 45%, rgba(8, 29, 57, 0.78));
        }

        .outreach-hero__content {
          position: relative;
          z-index: 1;
          padding: 7rem 0;
        }

        .outreach-hero__copy {
          max-width: 44rem;
          color: white;
        }

        .outreach-hero .eyebrow {
          color: rgba(255, 255, 255, 0.92);
        }

        .outreach-hero .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.95), transparent);
        }

        .outreach-hero h1 {
          margin: 1.1rem 0 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3.6rem, 8vw, 7rem);
          line-height: 0.9;
          letter-spacing: -0.06em;
          color: white;
        }

        .outreach-gallery-section {
          padding-top: 5rem;
        }

        .outreach-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
        }

        .outreach-gallery__item {
          margin: 0;
          padding: 1rem;
          border-radius: 1.75rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            rgba(255, 255, 255, 0.96);
          box-shadow: 0 24px 65px rgba(8, 29, 57, 0.08);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .outreach-gallery__item:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
        }

        .outreach-gallery__item.is-featured {
          grid-column: span 2;
          padding: 1.2rem;
        }

        .outreach-gallery__item img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 1.15rem;
          object-fit: contain;
          background: #f4f6fa;
        }

        @media (max-width: 900px) {
          .outreach-hero {
            min-height: 60vh;
          }

          .outreach-gallery {
            grid-template-columns: 1fr;
          }

          .outreach-gallery__item.is-featured {
            grid-column: auto;
          }
        }

        @media (max-width: 640px) {
          .outreach-hero__content {
            padding: 5.5rem 0 4.5rem;
          }

          .outreach-gallery {
            gap: 1rem;
          }

          .outreach-gallery__item,
          .outreach-gallery__item.is-featured {
            padding: 0.75rem;
            border-radius: 1.25rem;
          }

          .outreach-gallery__item img {
            border-radius: 0.9rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Outreach
