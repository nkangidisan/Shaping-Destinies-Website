import { useEffect, useRef } from 'react'

const leaderImages = [
  '/2024/10/MG_0267.jpg',
  '/2024/08/ap.png',
  '/2024/08/DSC_0120.jpg',
  '/2024/08/FB_IMG_1711443462905.jpg',
  '/2024/09/1.jpg',
]

const leaderCopy = [
  "Pastor Benjamin Kiconco travels around the world reaching out to God's people with the proclamation of Christ's Word of Faith and Grace.",
  'Having come from a very humble background, he believes everyone and anyone can become the best that God predestined them to be.',
  'Benjamin Kiconco was called of God at the age of 17, stepped out into ministry at 19 and later founded Wonder Christian Centre (Isaiah 32) at 23 years of age.',
  "His mission is to Shape the Destinies of God's people through the preaching of the Word of His Grace and Faith and the ministry of Miracles, Signs and Wonders.",
  "Having founded Wonder Christian Centre (a church that started under an avocado tree in 2011), he serves as her Senior Pastor while not neglecting his commitment to empowering God's people (especially youth & leaders) by helping them discover and fully maximize their gifts and callings in order to live a life of purpose and walk in their God-ordained destinies.",
  "He, by the grace of God and the help of partners and friends, travels the nations of the earth speaking to congregations, motivating corporate organization employees and holding crusades and conferences. He has tirelessly and consistently demonstrated commitment to making a difference in people's lives, one person at a time! It's true that we were called to extend the Grace of Christ to others just as it was extended to us! We were called to shape the destines of men.",
  'Benjamin Kiconco lives in the outskirts of Kampala-Uganda with his precious family.',
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

const TeamLeader = () => {
  return (
    <div className="team-leader-page">
      <section className="team-leader-hero">
        <div className="team-leader-hero__bg" />
        <div className="team-leader-hero__overlay" />
        <div className="container team-leader-hero__content">
          <Reveal className="team-leader-hero__copy">
            <span className="eyebrow">Our Team Leader</span>
            <h1>Pastor Benjamin Kiconco</h1>
            <p>
              Pastor Benjamin Kiconco travels around the world reaching out to God&apos;s people with the proclamation of Christ&apos;s Word of Faith and Grace.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="team-leader-gallery-grid">
            <Reveal>
              <figure className="team-leader-gallery__item team-leader-gallery__item--hero surface-card">
                <img src={leaderImages[0]} alt="Pastor Benjamin Kiconco" />
              </figure>
            </Reveal>
            <Reveal delay={90}>
              <figure className="team-leader-gallery__item surface-card">
                <img src={leaderImages[1]} alt="Pastor Benjamin Kiconco" />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="team-leader-layout">
            <Reveal>
              <article className="team-leader-story surface-card">
                <div className="team-leader-story__copy">
                  {leaderCopy.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>

            <div className="team-leader-gallery">
              {leaderImages.slice(2).map((image, index) => (
                <Reveal key={image} delay={index * 90}>
                  <figure className={`team-leader-gallery__item surface-card ${index === 0 ? 'is-wide' : ''}`}>
                    <img src={image} alt={`Pastor Benjamin Kiconco ${index + 3}`} />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .team-leader-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .team-leader-hero {
          position: relative;
          overflow: clip;
          background: #081d39;
        }

        .team-leader-hero__bg,
        .team-leader-hero__overlay {
          position: absolute;
          inset: 0;
        }

        .team-leader-hero__bg {
          background:
            radial-gradient(circle at 18% 24%, rgba(181, 214, 58, 0.16), transparent 18%),
            radial-gradient(circle at 76% 22%, rgba(255, 255, 255, 0.08), transparent 18%),
            linear-gradient(135deg, #06162c 0%, #0a2142 50%, #143c74 100%);
          transform: scale(1.04);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .team-leader-hero__overlay {
          background:
            radial-gradient(circle at 18% 24%, rgba(181, 214, 58, 0.16), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.84), rgba(8, 29, 57, 0.44) 48%, rgba(8, 29, 57, 0.82));
        }

        .team-leader-hero__content {
          position: relative;
          z-index: 1;
          padding: 6.75rem 0 5.5rem;
        }

        .team-leader-hero__copy {
          max-width: 42rem;
          color: white;
        }

        .team-leader-hero .eyebrow {
          color: rgba(255, 255, 255, 0.92);
        }

        .team-leader-hero .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.92), transparent);
        }

        .team-leader-hero__copy h1 {
          margin: 1rem 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3.2rem, 6vw, 5.8rem);
          line-height: 0.94;
          letter-spacing: -0.06em;
          color: white;
        }

        .team-leader-hero__copy p {
          margin: 0;
          font-size: 1.08rem;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.84);
        }

        .team-leader-gallery-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: 1.25rem;
          align-items: stretch;
        }

        .team-leader-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
          gap: 1.5rem;
          align-items: start;
        }

        .team-leader-story {
          padding: 2.2rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            rgba(255, 255, 255, 0.97);
        }

        .team-leader-story__copy p {
          margin: 0 0 1rem;
          font-size: 1.03rem;
          line-height: 1.95;
          color: var(--color-text);
        }

        .team-leader-story__copy p:last-child {
          margin-bottom: 0;
        }

        .team-leader-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .team-leader-gallery__item {
          margin: 0;
          padding: 0.85rem;
          border-radius: 1.55rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .team-leader-gallery__item:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
        }

        .team-leader-gallery__item--hero {
          min-height: 36rem;
        }

        .team-leader-gallery__item.is-wide {
          grid-column: span 2;
          padding: 1rem;
        }

        .team-leader-gallery__item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 1rem;
          background: linear-gradient(135deg, rgba(248, 242, 231, 0.8), rgba(255, 255, 255, 0.96));
        }

        @media (max-width: 980px) {
          .team-leader-gallery-grid,
          .team-leader-layout,
          .team-leader-gallery {
            grid-template-columns: 1fr;
          }

          .team-leader-gallery__item.is-wide {
            grid-column: auto;
          }
        }

        @media (max-width: 640px) {
          .team-leader-hero__content {
            padding: 5.6rem 0 4.8rem;
          }

          .team-leader-story {
            padding: 1.35rem;
          }

          .team-leader-gallery__item--hero {
            min-height: 18rem;
          }

          .team-leader-gallery__item,
          .team-leader-gallery__item.is-wide {
            padding: 0.65rem;
            border-radius: 1.1rem;
          }

          .team-leader-gallery__item img {
            border-radius: 0.8rem;
          }
        }
      `}</style>
    </div>
  )
}

export default TeamLeader
