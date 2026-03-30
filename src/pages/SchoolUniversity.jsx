import { useEffect, useRef } from 'react'

const galleryImages = [
  '/2024/09/13.jpg',
  '/2024/09/14.jpg',
  '/2024/08/Ordination.jpg',
  '/2024/08/img_0120.jpg',
  '/2024/08/img_3j4.jpg',
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

const SchoolUniversity = () => {
  return (
    <div className="outreach-detail">
      <section className="detail-hero detail-hero--school">
        <div className="detail-hero__bg" />
        <div className="detail-hero__overlay" />
        <div className="container detail-hero__content">
          <Reveal>
            <span className="eyebrow">School and University</span>
            <h1>School and University</h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container detail-stack">
          <Reveal>
            <section className="detail-split surface-card">
              <div className="detail-copy">
                <h2>School and University</h2>
                <p>In a generation where the devil is seriously targeting children and the youth, we must go for them. The church just can’t go silent! <em>I believe it is important that we take teenage outreach efforts seriously!</em></p>
                <p>Teenage years are ‘Damascus moment years’ where if we get our children to see the Light of Christ early and plant them on the firm foundation of the truth of God’s Word, we will have helped save a generation.</p>
              </div>
              <figure className="detail-media">
                <img src={galleryImages[0]} alt="School and University" />
              </figure>
            </section>
          </Reveal>

          <Reveal delay={90}>
            <section className="detail-split detail-split--reverse surface-card">
              <figure className="detail-media">
                <img src={galleryImages[1]} alt="School and University" />
              </figure>
              <div className="detail-copy">
                <p><em>But when we see the many secular concerts and all manner of immoral activities moving around our Primary Schools, High Schools and Universities here in Uganda, with celebrity artistes performing 95% naked; when you hear our children praise these for being exciting and try to model after their example, then you know we are quickly losing a generation!</em></p>
                <p>We just can’t give up on our children! We must go for them! We just have to show them the Way of God in their formative years!</p>
              </div>
            </section>
          </Reveal>

          <div className="detail-gallery-grid">
            {galleryImages.slice(2).map((image, index) => (
              <Reveal key={image} delay={index * 80}>
                <figure className="detail-gallery-card surface-card">
                  <img src={image} alt={`School and University ${index + 1}`} />
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={110}>
            <section className="detail-wide surface-card">
              <p>We have always gone to schools! We still hope to do more as the Lord enables us more and more especially by knitting us to people of the same passion and conviction for partnership!</p>
              <blockquote>We just have to show them the Way of God in their formative years!</blockquote>
            </section>
          </Reveal>
        </div>
      </section>

      <style>{`
        .outreach-detail {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .detail-hero {
          position: relative;
          min-height: calc(76vh - 7rem);
          display: grid;
          align-items: center;
          overflow: clip;
          background: #081d39;
        }

        .detail-hero__bg,
        .detail-hero__overlay {
          position: absolute;
          inset: 0;
        }

        .detail-hero--school .detail-hero__bg {
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), url('/2024/08/Ordination.jpg') center/cover no-repeat;
          transform: scale(1.06);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .detail-hero__overlay {
          background:
            radial-gradient(circle at 20% 20%, rgba(181, 214, 58, 0.22), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.82), rgba(8, 29, 57, 0.36) 48%, rgba(8, 29, 57, 0.82));
        }

        .detail-hero__content {
          position: relative;
          z-index: 1;
          padding: 7rem 0 6rem;
          color: white;
        }

        .detail-hero .eyebrow {
          color: rgba(255, 255, 255, 0.92);
        }

        .detail-hero .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.92), transparent);
        }

        .detail-hero h1 {
          margin: 1.05rem 0 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3.5rem, 7vw, 6.4rem);
          line-height: 0.92;
          letter-spacing: -0.06em;
          color: white;
        }

        .detail-stack {
          display: grid;
          gap: 1.5rem;
        }

        .detail-split,
        .detail-wide {
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            rgba(255, 255, 255, 0.96);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
        }

        .detail-split {
          display: grid;
          grid-template-columns: minmax(0, 1.04fr) minmax(0, 0.96fr);
          overflow: hidden;
        }

        .detail-split--reverse {
          grid-template-columns: minmax(0, 0.96fr) minmax(0, 1.04fr);
        }

        .detail-copy,
        .detail-wide {
          padding: 2.25rem;
        }

        .detail-copy h2 {
          margin: 0 0 1rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.6rem);
          line-height: 0.96;
          color: var(--color-blue-deep);
        }

        .detail-copy p,
        .detail-wide p {
          margin: 0 0 1rem;
          font-size: 1.03rem;
          line-height: 1.95;
          color: var(--color-text);
        }

        .detail-wide blockquote {
          margin: 1.25rem 0 0;
          padding: 1.25rem 1.35rem;
          border-left: 4px solid var(--color-lemon);
          border-radius: 0 1rem 1rem 0;
          background: rgba(16, 58, 113, 0.04);
          font-family: 'Outfit', sans-serif;
          font-size: 1.16rem;
          line-height: 1.75;
          color: var(--color-blue-deep);
        }

        .detail-media,
        .detail-gallery-card {
          margin: 0;
        }

        .detail-media {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.98);
        }

        .detail-media img,
        .detail-gallery-card img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 1rem;
        }

        .detail-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .detail-gallery-card {
          padding: 0.85rem;
          border-radius: 1.65rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .detail-gallery-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
        }

        @media (max-width: 980px) {
          .detail-split,
          .detail-split--reverse,
          .detail-gallery-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .detail-hero__content {
            padding: 5.6rem 0 4.8rem;
          }

          .detail-copy,
          .detail-wide {
            padding: 1.35rem;
          }

          .detail-media,
          .detail-gallery-card {
            padding: 0.65rem;
            border-radius: 1.1rem;
          }

          .detail-media img,
          .detail-gallery-card img {
            border-radius: 0.8rem;
          }
        }
      `}</style>
    </div>
  )
}

export default SchoolUniversity
