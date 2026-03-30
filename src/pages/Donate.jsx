import { useEffect, useRef } from 'react'

const partnershipImage = '/2024/09/AM5A2026.jpg'

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

const Donate = () => {
  return (
    <div className="partnership-page">
      <section className="partnership-hero">
        <div className="partnership-hero__bg" />
        <div className="partnership-hero__overlay" />
        <div className="container partnership-hero__content">
          <Reveal className="partnership-hero__copy">
            <span className="eyebrow">Together we make the Difference</span>
            <h1>Paul&apos;s Great Esteem for Partners</h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="partnership-layout">
            <Reveal>
              <article className="partnership-story surface-card">
                <div className="partnership-story__content">
                  <p className="partnership-story__lead">Together we make the Difference</p>
                  <h2>Paul&apos;s Great Esteem for Partners</h2>
                  <p>In his letter to the Philippians, Paul the man of God wrote;</p>
                  <blockquote>
                    &quot;Grace to you and peace from God our Father and the Lord Jesus Christ. I thank my God upon every remembrance of you, always in every prayer of mine making request for you all with joy, for your fellowship (partnership) in the gospel from the first day until now, being confident of this very thing, that he who begun a good work in you will complete it until the day of Christ Jesus.&quot; Philippians 1:2-6
                  </blockquote>
                  <p>
                    For many of you who know the story of Paul&apos;s encounter with our Lord Jesus, you very well know his calling was a much unexpected one. On his way to Damascus with orders to torment and persecute believers, Christ met him and called him to the ministry.
                  </p>
                  <p>
                    Many years later as his ministry began to grow and touch many lives, Paul realized that the work had gone way beyond he could do alone (or with a few people in that case). He acknowledged he needed as many solid partners as possible to cause as much impact as possible. The Philippian church was one of the churches that Paul had blessed greatly in his ministry. A time came when he went back to them and asked for their partnership in order for the gospel of Christ to continue touching and reaching many. These believers happily complied. Paul stressed in his introduction of the letter he wrote to them how grateful he was for their partnership.
                  </p>
                  <p>
                    This ministry has come a very long way! From a very humble beginning, with no place of our own, no public address system, no good clothing and no connections with influential people, it has only been by the grace of God that we have come this far. Throughout the many years though, I have gotten to appreciate the meaning of a person who shares your burden and commitment to vision. Such People are of priceless value.
                  </p>
                  <p>
                    Biblically, much as God always called individuals, He would later connect them to others, make a team and then fulfill the calling as a team. The same is true in our times.
                  </p>
                  <p>
                    All I can say is that all that we are doing and the many things we hope to do for God and His people is impossible without committed partners. I therefore would like to appreciate you greatly for your choice of a solid partnership with us as we continue to make a difference in the lives of many.
                  </p>
                  <p>May the Lord Jesus truly reward you more and more.</p>
                </div>
              </article>
            </Reveal>

            <div className="partnership-rail">
              <Reveal delay={90}>
                <figure className="partnership-image surface-card">
                  <img src={partnershipImage} alt="Partnership" />
                </figure>
              </Reveal>

              <Reveal delay={160}>
                <article className="partnership-cta surface-card">
                  <p>For Partnership, please get in touch with us.</p>
                  <div className="partnership-cta__actions">
                    <a href="/contact" className="button button-primary">Contact</a>
                    <a href="/give" className="button button-outline">Give</a>
                  </div>
                  <strong>Together, we do great things for God.</strong>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .partnership-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .partnership-hero {
          position: relative;
          overflow: clip;
          background: #081d39;
        }

        .partnership-hero__bg,
        .partnership-hero__overlay {
          position: absolute;
          inset: 0;
        }

        .partnership-hero__bg {
          background:
            linear-gradient(0deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.18)),
            url('/2024/09/AM5A2026.jpg') center/cover no-repeat;
          transform: scale(1.05);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .partnership-hero__overlay {
          background:
            radial-gradient(circle at 18% 18%, rgba(181, 214, 58, 0.16), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.82), rgba(8, 29, 57, 0.34) 48%, rgba(8, 29, 57, 0.82));
        }

        .partnership-hero__content {
          position: relative;
          z-index: 1;
          padding: 7rem 0 5.5rem;
        }

        .partnership-hero__copy {
          max-width: 48rem;
          color: white;
        }

        .partnership-hero .eyebrow {
          color: rgba(255, 255, 255, 0.92);
        }

        .partnership-hero .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.92), transparent);
        }

        .partnership-hero__copy h1 {
          margin: 1rem 0 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 6vw, 5.4rem);
          line-height: 0.94;
          letter-spacing: -0.06em;
          color: white;
        }

        .partnership-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
          gap: 1.4rem;
          align-items: start;
        }

        .partnership-story,
        .partnership-image,
        .partnership-cta {
          border: 1px solid rgba(16, 58, 113, 0.08);
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
        }

        .partnership-story {
          padding: 2.25rem;
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            rgba(255, 255, 255, 0.97);
        }

        .partnership-story__lead {
          margin: 0 0 0.9rem;
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-blue);
        }

        .partnership-story h2 {
          margin: 0 0 1.25rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          line-height: 1;
          color: var(--color-blue-deep);
        }

        .partnership-story__content p {
          margin: 0 0 1rem;
          font-size: 1.03rem;
          line-height: 1.95;
          color: var(--color-text);
        }

        .partnership-story blockquote {
          margin: 1.25rem 0;
          padding: 1.2rem 1.35rem;
          border-left: 4px solid var(--color-lemon);
          border-radius: 0 1rem 1rem 0;
          background: rgba(16, 58, 113, 0.04);
          font-family: 'Outfit', sans-serif;
          font-size: 1.12rem;
          line-height: 1.7;
          color: var(--color-blue-deep);
        }

        .partnership-rail {
          display: grid;
          gap: 1.2rem;
        }

        .partnership-image {
          margin: 0;
          overflow: hidden;
          padding: 0.9rem;
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .partnership-image:hover,
        .partnership-cta:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
        }

        .partnership-image img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 1.1rem;
          object-fit: contain;
          background: rgba(255, 255, 255, 0.94);
        }

        .partnership-cta {
          padding: 1.75rem;
          background:
            linear-gradient(135deg, rgba(16, 58, 113, 0.98), rgba(8, 29, 57, 0.98));
          color: white;
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .partnership-cta p {
          margin: 0 0 1rem;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.84);
        }

        .partnership-cta__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 1rem;
        }

        .partnership-cta strong {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          line-height: 1.4;
          color: white;
        }

        @media (max-width: 980px) {
          .partnership-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .partnership-hero__content {
            padding: 5.6rem 0 4.8rem;
          }

          .partnership-story {
            padding: 1.35rem;
          }

          .partnership-image,
          .partnership-cta {
            padding: 0.85rem;
          }

          .partnership-cta {
            padding: 1.35rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Donate
