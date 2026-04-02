import { useEffect, useRef } from 'react'
import FaqSection from '../components/FaqSection'
import { seoRouteMap } from '../seo/routes'

const heroImages = [
  '/2024/09/22.jpg',
  '/2024/09/AM5A1939.jpg',
  '/2024/09/AM5A2003.jpg',
  '/2024/09/AM5A2038.jpg',
  '/2024/09/cb_DSC_0120.jpg',
  '/2024/09/CHURCH-IMPRESSION-BANNER-100CM-X-180CM-RED-1-1138x2048.jpg',
  '/2024/09/CHURCH-IMPRESSION-BANNER.png',
  '/2024/10/WONDER-2022-SQUARE.jpg',
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

const About = () => {
  return (
    <div className="about-page">
      <section id="mission" className="about-hero">
        <div className="about-hero__bg" />
        <div className="about-hero__overlay" />
        <div className="container about-hero__content">
          <Reveal className="about-hero__copy">
            <span className="eyebrow">Welcome to</span>
            <h1>Wonder Christian Centre</h1>
            <p className="about-hero__subline">where we are</p>
            <div className="about-hero__actions">
              <a href="/contact" className="button button-primary">Join us This Sunday</a>
              <a href="/contact" className="button button-outline">Get Directions</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story-layout">
            <Reveal className="about-story-copy">
              <article className="about-story-card surface-card">
                <span className="eyebrow">Our Story</span>
                <h3>Built with conviction, community, and a clear calling.</h3>
                <h4>Shaping Destinies</h4>
                <p className="about-story-card__lead">
                  As a ministry, we have been called to shape the Destinies of God&apos;s people.
                  We are glad you have taken time to visit, and we hope every moment here leaves
                  you more grounded in faith, vision, and purpose.
                </p>
                <p>
                  Wonder Christian Centre is a dynamic church committed to shaping destinies
                  through faith, service, and empowerment. Founded in 2011, our mission is to
                  spread the gospel, uplift communities, and inspire individuals to live purposeful
                  lives.
                </p>
                <p>
                  The heart of this ministry is simple: preach Christ clearly, love people deeply,
                  and create spaces where transformation is visible both spiritually and
                  practically.
                </p>
              </article>
            </Reveal>

            <div className="about-story-gallery">
              <Reveal delay={70}>
                <figure className="about-media about-media--primary surface-card">
                  <img src={heroImages[0]} alt="Wonder Christian Centre worship gathering" loading="eager" decoding="async" />
                </figure>
              </Reveal>
              <Reveal delay={130}>
                <figure className="about-media about-media--secondary surface-card">
                  <img src={heroImages[1]} alt="Church worship moment at Wonder Christian Centre" loading="lazy" decoding="async" />
                </figure>
              </Reveal>
              <Reveal delay={190}>
                <figure className="about-media about-media--accent surface-card">
                  <img src={heroImages[2]} alt="Wonder Christian Centre community worship moment" loading="lazy" decoding="async" />
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <Reveal className="about-mosaic-intro">
            <span className="eyebrow">Life at WCC</span>
            <h3 className="section-title">A more intentional picture of ministry, worship, and movement.</h3>
          </Reveal>

          <div className="about-mosaic">
            <Reveal>
              <figure className="about-mosaic__item about-mosaic__item--banner surface-card">
                <img src={heroImages[6]} alt="Wonder Christian Centre ministry banner display" loading="lazy" decoding="async" />
              </figure>
            </Reveal>
            <Reveal delay={80}>
              <figure className="about-mosaic__item about-mosaic__item--square surface-card">
                <img src={heroImages[7]} alt="Wonder Christian Centre identity artwork logo" loading="lazy" decoding="async" />
              </figure>
            </Reveal>
            <Reveal delay={140}>
              <figure className="about-mosaic__item about-mosaic__item--portrait surface-card">
                <img src={heroImages[3]} alt="Wonder Christian Centre ministry event gathering" loading="lazy" decoding="async" />
              </figure>
            </Reveal>
            <Reveal delay={200}>
              <figure className="about-mosaic__item about-mosaic__item--feature surface-card">
                <img src={heroImages[4]} alt="Wonder Christian Centre church gathering" loading="lazy" decoding="async" />
              </figure>
            </Reveal>
            <Reveal delay={260}>
              <figure className="about-mosaic__item about-mosaic__item--tall surface-card">
                <img src={heroImages[5]} alt="Wonder Christian Centre display banner" loading="lazy" decoding="async" />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection {...seoRouteMap['/about'].faqSection} />

      <style>{`
        .about-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .about-hero {
          position: relative;
          min-height: calc(78vh - 7rem);
          display: grid;
          align-items: center;
          overflow: clip;
          background: #081d39;
        }

        .about-hero__bg,
        .about-hero__overlay {
          position: absolute;
          inset: 0;
        }

        .about-hero__bg {
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), url('/2024/08/DSC_0120.jpg') center/cover no-repeat;
          transform: scale(1.06);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .about-hero__overlay {
          background:
            radial-gradient(circle at 20% 20%, rgba(181, 214, 58, 0.24), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.82), rgba(8, 29, 57, 0.34) 48%, rgba(8, 29, 57, 0.82));
        }

        .about-hero__content {
          position: relative;
          z-index: 1;
          padding: 7rem 0 6rem;
          color: white;
        }

        .about-hero__copy {
          max-width: 42rem;
          color: white;
        }

        .about-hero .eyebrow {
          color: rgba(255, 255, 255, 0.92);
        }

        .about-hero .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.92), transparent);
        }

        .about-hero__copy h1 {
          margin: 1rem 0 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.9rem, 10vw, 5.6rem);
          line-height: 0.92;
          letter-spacing: -0.06em;
          color: white;
        }

        .about-hero__subline {
          margin: 0.5rem 0 0;
          font-size: 1rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.78);
        }

        .about-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1.75rem;
        }

        .about-story-layout {
          display: grid;
          gap: 1.2rem;
        }

        .about-story-card {
          padding: 1.35rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 242, 231, 0.84));
        }

        .about-story-card h3 {
          margin: 0.9rem 0 1rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.8rem, 6vw, 3.2rem);
          line-height: 0.98;
          color: var(--color-blue-deep);
        }

        .about-story-card h4 {
          margin: 0 0 0.85rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--color-blue);
        }

        .about-story-card__lead {
          font-size: 1.08rem;
          line-height: 1.9;
          color: var(--color-blue-ink);
        }

        .about-story-card p {
          margin: 0 0 1rem;
          font-size: 1rem;
          line-height: 1.85;
          color: var(--color-text);
        }

        .about-story-card p:last-child {
          margin-bottom: 0;
        }

        .about-story-gallery {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .about-media,
        .about-mosaic__item {
          position: relative;
          overflow: hidden;
          margin: 0;
          padding: 0.75rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(242, 246, 251, 0.94));
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .about-media::before,
        .about-mosaic__item::before {
          content: '';
          position: absolute;
          inset: auto auto -20% -10%;
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(181, 214, 58, 0.2), transparent 70%);
          pointer-events: none;
        }

        .about-media:hover,
        .about-mosaic__item:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.13);
        }

        .about-media img,
        .about-mosaic__item img {
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          object-fit: cover;
          transform: scale(1.01);
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .about-media:hover img,
        .about-mosaic__item:hover img {
          transform: scale(1.06);
        }

        .about-media--primary {
          min-height: 21rem;
        }

        .about-media--secondary,
        .about-media--accent {
          min-height: 14rem;
        }

        .about-mosaic-intro {
          max-width: 44rem;
          margin-bottom: 2rem;
        }

        .about-mosaic {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .about-mosaic__item--banner,
        .about-mosaic__item--feature {
          min-height: 15rem;
        }

        .about-mosaic__item--square,
        .about-mosaic__item--portrait,
        .about-mosaic__item--tall {
          min-height: 17rem;
        }

        @media (min-width: 481px) {
          .about-story-gallery {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .about-media--primary {
            grid-column: span 2;
          }

          .about-mosaic {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .about-mosaic__item--banner,
          .about-mosaic__item--feature {
            grid-column: span 2;
          }
        }

        @media (min-width: 900px) {
          .about-story-layout {
            grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
            align-items: center;
          }

          .about-story-card {
            padding: 2rem;
          }
        }

        @media (min-width: 1025px) {
          .about-mosaic {
            grid-template-columns: 1.15fr 0.7fr 0.9fr;
            align-items: stretch;
          }

          .about-mosaic__item--banner {
            grid-column: span 2;
            min-height: 17rem;
          }

          .about-mosaic__item--square {
            min-height: 17rem;
          }

          .about-mosaic__item--portrait {
            min-height: 24rem;
          }

          .about-mosaic__item--feature {
            grid-column: auto;
            min-height: 24rem;
          }

          .about-mosaic__item--tall {
            min-height: 34rem;
          }
        }

        @media (max-width: 640px) {
          .about-hero__content {
            padding: 5.6rem 0 4.8rem;
          }

          .about-hero__actions {
            flex-direction: column;
            gap: 0.8rem;
            margin-top: 1.5rem;
          }

          .about-hero__actions .button {
            width: 100%;
          }

          .about-story-card,
          .about-media,
          .about-mosaic__item {
            padding: 0.65rem;
          }

          .about-media img,
          .about-mosaic__item img {
            border-radius: 0.8rem;
          }
        }
      `}</style>
    </div>
  )
}

export default About
