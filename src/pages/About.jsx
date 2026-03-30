import { useEffect, useRef } from 'react'

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
            <h2>SHAPING DESTINIES</h2>
            <p className="about-hero__text">
              As a ministry, we have been called to shape the Destinies of God&apos;s people! We are so glad you have taken time to visit. We hope you find your time here resourceful!
            </p>
            <div className="about-hero__actions">
              <a href="/contact" className="button button-primary">Join us This Sunday</a>
              <a href="/contact" className="button button-outline">Direction</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-gallery-layout">
            <Reveal>
              <figure className="about-gallery-card about-gallery-card--feature surface-card">
                <img src={heroImages[0]} alt="Wonder Christian Centre" />
              </figure>
            </Reveal>

            <div className="about-gallery-stack">
              <Reveal delay={80}>
                <figure className="about-gallery-card surface-card">
                  <img src={heroImages[1]} alt="Wonder Christian Centre" />
                </figure>
              </Reveal>
              <Reveal delay={140}>
                <figure className="about-gallery-card surface-card">
                  <img src={heroImages[2]} alt="Wonder Christian Centre" />
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <article className="about-mission-card surface-card">
              <p>
                Wonder Christian Centre is a dynamic church committed to shaping destinies through faith, service, and empowerment. Founded in 2011, our mission is to spread the gospel, uplift communities, and inspire individuals to live purposeful lives. Join us as we make a lasting impact in Uganda and beyond.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="about-explore-grid">
            <Reveal>
              <figure className="about-explore-banner surface-card">
                <img src={heroImages[6]} alt="Wonder Christian Centre" />
              </figure>
            </Reveal>
            <Reveal delay={90}>
              <figure className="about-explore-square surface-card">
                <img src={heroImages[7]} alt="Wonder Christian Centre" />
              </figure>
            </Reveal>
            <Reveal delay={150}>
              <figure className="about-explore-portrait surface-card">
                <img src={heroImages[3]} alt="Wonder Christian Centre" />
              </figure>
            </Reveal>
            <Reveal delay={210}>
              <figure className="about-explore-portrait surface-card">
                <img src={heroImages[4]} alt="Wonder Christian Centre" />
              </figure>
            </Reveal>
            <Reveal delay={270}>
              <figure className="about-explore-tall surface-card">
                <img src={heroImages[5]} alt="Wonder Christian Centre" />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        .about-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .about-hero {
          position: relative;
          min-height: calc(100vh - 7rem);
          overflow: clip;
          background: #081d39;
        }

        .about-hero__bg,
        .about-hero__overlay {
          position: absolute;
          inset: 0;
        }

        .about-hero__bg {
          background:
            radial-gradient(circle at 18% 18%, rgba(181, 214, 58, 0.24), transparent 18%),
            radial-gradient(circle at 78% 24%, rgba(255, 255, 255, 0.08), transparent 16%),
            linear-gradient(135deg, #06162c 0%, #0a2142 50%, #143c74 100%);
          transform: scale(1.04);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .about-hero__overlay {
          background:
            radial-gradient(circle at 22% 22%, rgba(181, 214, 58, 0.18), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.84), rgba(8, 29, 57, 0.4) 48%, rgba(8, 29, 57, 0.82));
        }

        .about-hero__content {
          position: relative;
          z-index: 1;
          padding: 7rem 0 6rem;
        }

        .about-hero__copy {
          max-width: 48rem;
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
          font-size: clamp(3rem, 6vw, 5.6rem);
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

        .about-hero__copy h2 {
          margin: 1rem 0 1rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.8rem, 6vw, 5.2rem);
          line-height: 0.92;
          letter-spacing: -0.06em;
          color: white;
        }

        .about-hero__text {
          margin: 0;
          font-size: 1.08rem;
          line-height: 1.95;
          color: rgba(255, 255, 255, 0.84);
        }

        .about-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1.75rem;
        }

        .about-gallery-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          gap: 1.25rem;
          align-items: stretch;
        }

        .about-gallery-stack {
          display: grid;
          gap: 1.25rem;
        }

        .about-gallery-card,
        .about-explore-banner,
        .about-explore-square,
        .about-explore-portrait,
        .about-explore-tall {
          margin: 0;
          overflow: hidden;
          border-radius: 1.5rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .about-gallery-card:hover,
        .about-explore-banner:hover,
        .about-explore-square:hover,
        .about-explore-portrait:hover,
        .about-explore-tall:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
        }

        .about-gallery-card img,
        .about-explore-banner img,
        .about-explore-square img,
        .about-explore-portrait img,
        .about-explore-tall img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          background: rgba(255, 255, 255, 0.94);
        }

        .about-gallery-card--feature {
          min-height: 35rem;
        }

        .about-gallery-stack .about-gallery-card {
          min-height: 16.8rem;
        }

        .about-mission-card {
          padding: 2.25rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            rgba(255, 255, 255, 0.96);
        }

        .about-mission-card p {
          margin: 0;
          font-size: 1.03rem;
          line-height: 1.95;
          color: var(--color-text);
        }

        .about-explore-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.7fr 0.8fr;
          gap: 1.2rem;
        }

        .about-explore-banner {
          grid-column: span 2;
          min-height: 16rem;
        }

        .about-explore-square {
          min-height: 16rem;
        }

        .about-explore-portrait {
          min-height: 24rem;
        }

        .about-explore-tall {
          min-height: 32rem;
        }

        @media (max-width: 980px) {
          .about-gallery-layout,
          .about-explore-grid {
            grid-template-columns: 1fr;
          }

          .about-explore-banner {
            grid-column: auto;
          }
        }

        @media (max-width: 640px) {
          .about-hero__content {
            padding: 5.6rem 0 4.8rem;
          }

          .about-mission-card {
            padding: 1.35rem;
          }

          .about-gallery-card--feature,
          .about-gallery-stack .about-gallery-card,
          .about-explore-banner,
          .about-explore-square,
          .about-explore-portrait,
          .about-explore-tall {
            min-height: 14rem;
          }
        }
      `}</style>
    </div>
  )
}

export default About
