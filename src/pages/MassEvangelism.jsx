import { useEffect, useRef } from 'react'

const imageSet = [
  '/2024/08/img_e4w.jpg',
  '/2024/08/FB_IMG_1711443462905.jpg',
  '/2024/09/7.jpg',
  '/2024/09/8.jpg',
  '/2024/09/9.jpg',
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

const MassEvangelism = () => {
  return (
    <div className="outreach-detail">
      <section className="detail-hero detail-hero--mass">
        <div className="detail-hero__bg" />
        <div className="detail-hero__overlay" />
        <div className="container detail-hero__content">
          <Reveal>
            <span className="eyebrow">Together we make the Difference</span>
            <h1>Great Harvest</h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container detail-stack">
          <Reveal>
            <section className="detail-split detail-split--feature surface-card">
              <figure className="detail-media">
                <img src={imageSet[0]} alt="Mass evangelism" loading="eager" decoding="async" />
              </figure>
              <div className="detail-copy">
                <h2>Together we make the Difference</h2>
                <p>Praise God for the ministries that are currently investing tens of thousands of dollars into evangelism! The fruits are evident; Massive harvests!</p>
                <p>We just have to obey the call; strategize, raise partners and be willing to spend on soul winning if we are to win over a lost world to our Lord and Savior, Jesus Christ.</p>
                <p>We have got to keep going to every human being that we possibly can. It takes lots of finances but it is much more than worth it! One can never tag a specific price to the human soul!</p>
                <p>As long as we can raise enough resources for mass evangelism, as we go for them and plan well, the world shall be saved!</p>
                <p>Praise the Lord!</p>
              </div>
            </section>
          </Reveal>

          <Reveal delay={90}>
            <section className="detail-split detail-split--reverse surface-card">
              <div className="detail-copy">
                <span className="eyebrow">Preparing for a</span>
                <h2>Great Harvest</h2>
                <p>I have been part of organizing several gospel crusades and preparations usually take at least two to three months. A lot of money sinks in because the process involves great publicity and teamwork.</p>
                <p>Things like Radio, Television and Digital Media Advertising, Prayer Walks, Cycling Races, Brassband Walks, and Print Media, Drive Adverts, Several Outreaches, Mini Crusades, Strong Intercession Teams, a State of the Art Public Address System and all sorts of logistics simply consume lots of money and a lot of time is involved in preparations.</p>
                <p><strong>The harvest is however, always priceless!</strong></p>
                <p>Ever noticed that when people step out in Faith and go preach the gospel to the lost many strange miracles happen!</p>
                <blockquote>“And He said to them, “Go into all the world and preach the gospel to every creature. He who believes and is baptized will be saved; but he who does not believe will be condemned. And these signs will follow those who believe: In My name they will cast out demons; they will speak with new tongues; they will take up serpents; and if they drink anything deadly, it will by no means hurt them; they will lay hands on the sick, and they will recover.” Mark 16:15-18</blockquote>
              </div>
              <figure className="detail-media detail-media--tall">
                <img src={imageSet[1]} alt="Mass evangelism" loading="lazy" decoding="async" />
              </figure>
            </section>
          </Reveal>

          <div className="detail-gallery-grid">
            {imageSet.slice(2).map((image, index) => (
              <Reveal key={image} delay={index * 80}>
                <figure className="detail-gallery-card surface-card">
                  <img src={image} alt={`Mass evangelism ${index + 1}`} loading="lazy" decoding="async" />
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={110}>
            <section className="detail-wide surface-card">
              <p>I know of a wonderful missionary evangelist whose efforts, in a country of a population of about eleven million people, have yielded a lot.</p>
              <p><strong>Over 1.2 million people have been registered in their Crusades as having received Jesus Christ as their Lord and Savior in this country of eleven million people!</strong> Can you imagine this level of transformation!</p>
              <p>Well, his Africa coordinator is a very close friend of mine and though tens of thousands of dollars have gone into preparations of these crusades, I believe the heart of Jesus must be rejoicing in heaven.</p>
              <p>Over the years, of course several millions of dollars have been spent. The harvest is however, beyond description! And on that day when we stand before the judgement seat of Christ, I am sure the Master will smile at this committed servant, his faithful coordinator plus their sacrificial partners.</p>
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
          min-height: calc(78vh - 7rem);
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

        .detail-hero--mass .detail-hero__bg {
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), url('/2024/08/img_e4w.jpg') center/cover no-repeat;
          transform: scale(1.06);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .detail-hero__overlay {
          background:
            radial-gradient(circle at 20% 20%, rgba(181, 214, 58, 0.24), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.82), rgba(8, 29, 57, 0.34) 48%, rgba(8, 29, 57, 0.82));
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
          font-size: clamp(3.7rem, 8vw, 7rem);
          line-height: 0.9;
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
          grid-template-columns: minmax(0, 0.98fr) minmax(0, 1.02fr);
          overflow: hidden;
        }

        .detail-split--reverse {
          grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
        }

        .detail-copy {
          padding: 2.2rem;
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

        .detail-copy blockquote {
          margin: 1.25rem 0 0;
          padding: 1.25rem 1.35rem;
          border-left: 4px solid var(--color-lemon);
          border-radius: 0 1rem 1rem 0;
          background: rgba(16, 58, 113, 0.04);
          font-family: 'Outfit', sans-serif;
          font-size: 1.12rem;
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
          object-fit: contain;
          background: rgba(255, 255, 255, 0.94);
        }

        .detail-media--tall img {
          min-height: 100%;
          object-fit: contain;
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

        .detail-wide {
          padding: 2.2rem;
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

export default MassEvangelism
