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
  "Having founded Wonder Christian Centre, a church that started under an avocado tree in 2011, he serves as Senior Pastor while remaining deeply committed to empowering God's people, especially youth and leaders, to live purposeful lives.",
  'By the grace of God and with the help of partners and friends, he travels the nations speaking to congregations, motivating organizations, and leading crusades and conferences that leave a lasting spiritual impact.',
  'Benjamin Kiconco lives in the outskirts of Kampala, Uganda with his precious family.',
]

const leaderStats = [
  { value: '17', label: 'Called into ministry' },
  { value: '19', label: 'Stepped out in faith' },
  { value: '2011', label: 'Church beginnings' },
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
        <div className="team-leader-hero__glow team-leader-hero__glow--one" />
        <div className="team-leader-hero__glow team-leader-hero__glow--two" />
        <div className="container team-leader-hero__content">
          <Reveal className="team-leader-hero__copy">
            <span className="eyebrow">Our Team Leader</span>
            <h1>Pastor Benjamin Kiconco</h1>
            <p>
              A life of conviction, service, and global ministry shaped by faith, grace, and a
              deep commitment to seeing people step into purpose.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="team-leader-hero__stats surface-card">
              {leaderStats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="team-leader-feature">
            <Reveal className="team-leader-feature__visuals">
              <figure className="team-leader-media team-leader-media--portrait surface-card">
                <img src={leaderImages[0]} alt="Pastor Benjamin Kiconco portrait" loading="eager" decoding="async" />
              </figure>
              <figure className="team-leader-media team-leader-media--floating surface-card">
                <img src={leaderImages[1]} alt="Pastor Benjamin Kiconco ministry portrait" loading="lazy" decoding="async" />
              </figure>
            </Reveal>

            <Reveal delay={100}>
              <article className="team-leader-feature__card surface-card">
                <span className="eyebrow">Leadership Focus</span>
                <h2>Preaching Christ clearly while raising people with vision.</h2>
                <p>
                  Pastor Benjamin Kiconco&apos;s leadership is marked by spiritual depth, bold faith,
                  and a steady commitment to helping people discover their gifts, purpose, and
                  God-ordained destiny.
                </p>
                <p>
                  From church gatherings to conferences and crusades, the work reflects both
                  pastoral care and movement-building leadership.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="team-leader-story-layout">
            <Reveal>
              <article className="team-leader-story surface-card">
                <span className="eyebrow">His Journey</span>
                <div className="team-leader-story__copy">
                  {leaderCopy.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>

            <div className="team-leader-collage">
              {leaderImages.slice(2).map((image, index) => (
                <Reveal key={image} delay={index * 90}>
                  <figure className={`team-leader-media surface-card ${index === 0 ? 'team-leader-media--wide' : 'team-leader-media--stack'}`}>
                    <img src={image} alt={`Pastor Benjamin Kiconco ministry moment ${index + 1}`} loading="lazy" decoding="async" />
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
        .team-leader-hero__overlay,
        .team-leader-hero__glow {
          position: absolute;
          inset: 0;
        }

        .team-leader-hero__bg {
          background:
            radial-gradient(circle at 18% 24%, rgba(181, 214, 58, 0.18), transparent 18%),
            radial-gradient(circle at 76% 22%, rgba(255, 255, 255, 0.08), transparent 18%),
            linear-gradient(135deg, #06162c 0%, #0a2142 50%, #143c74 100%);
          transform: scale(1.04);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .team-leader-hero__overlay {
          background:
            linear-gradient(115deg, rgba(3, 12, 28, 0.84), rgba(8, 29, 57, 0.42) 48%, rgba(8, 29, 57, 0.82)),
            radial-gradient(circle at 18% 24%, rgba(181, 214, 58, 0.1), transparent 20%);
        }

        .team-leader-hero__glow {
          pointer-events: none;
        }

        .team-leader-hero__glow--one {
          inset: 16% auto auto 66%;
          width: 14rem;
          height: 14rem;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(181, 214, 58, 0.24), transparent 68%);
          animation: leaderPulse 10s ease-in-out infinite;
        }

        .team-leader-hero__glow--two {
          inset: auto auto -8% -6%;
          width: 18rem;
          height: 18rem;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 68%);
          animation: leaderFloat 15s ease-in-out infinite;
        }

        .team-leader-hero__content {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 1.2rem;
          padding: 5.5rem 0 4.8rem;
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
          font-size: clamp(2.9rem, 10vw, 5.8rem);
          line-height: 0.94;
          letter-spacing: -0.06em;
          color: white;
        }

        .team-leader-hero__copy p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.84);
        }

        .team-leader-hero__stats {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.8rem;
          padding: 1.2rem;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
        }

        .team-leader-hero__stats div {
          display: grid;
          gap: 0.25rem;
          padding: 0.7rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .team-leader-hero__stats div:last-child {
          border-bottom: 0;
        }

        .team-leader-hero__stats strong {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          color: white;
        }

        .team-leader-hero__stats span {
          color: rgba(255, 255, 255, 0.76);
          font-size: 0.94rem;
        }

        .team-leader-feature,
        .team-leader-story-layout {
          display: grid;
          gap: 1.25rem;
        }

        .team-leader-feature__visuals {
          position: relative;
          min-height: 20rem;
        }

        .team-leader-media {
          position: relative;
          overflow: hidden;
          margin: 0;
          padding: 0.75rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .team-leader-media::after {
          content: '';
          position: absolute;
          inset: auto -10% -22% auto;
          width: 9rem;
          height: 9rem;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(181, 214, 58, 0.18), transparent 70%);
          pointer-events: none;
        }

        .team-leader-media:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
        }

        .team-leader-media img {
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          object-fit: cover;
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .team-leader-media:hover img {
          transform: scale(1.05);
        }

        .team-leader-media--portrait {
          min-height: 23rem;
        }

        .team-leader-media--floating {
          position: absolute;
          right: 0;
          bottom: -1rem;
          width: min(56%, 15rem);
          min-height: 12rem;
          box-shadow: 0 30px 80px rgba(8, 29, 57, 0.16);
          animation: leaderCardFloat 12s ease-in-out infinite;
        }

        .team-leader-feature__card,
        .team-leader-story {
          padding: 1.35rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 242, 231, 0.84));
        }

        .team-leader-feature__card h2 {
          margin: 0.9rem 0 1rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.9rem, 6vw, 3.4rem);
          line-height: 0.98;
          color: var(--color-blue-deep);
        }

        .team-leader-feature__card p,
        .team-leader-story__copy p {
          margin: 0 0 1rem;
          font-size: 1rem;
          line-height: 1.85;
          color: var(--color-text);
        }

        .team-leader-story__copy p:last-child,
        .team-leader-feature__card p:last-child {
          margin-bottom: 0;
        }

        .team-leader-collage {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .team-leader-media--wide,
        .team-leader-media--stack {
          min-height: 15rem;
        }

        @keyframes leaderPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.06);
            opacity: 1;
          }
        }

        @keyframes leaderFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(12px, -16px, 0);
          }
        }

        @keyframes leaderCardFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -12px, 0);
          }
        }

        @media (min-width: 481px) {
          .team-leader-hero__stats {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .team-leader-hero__stats div {
            border-bottom: 0;
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            padding-inline: 0.8rem;
          }

          .team-leader-hero__stats div:last-child {
            border-right: 0;
          }

          .team-leader-collage {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .team-leader-media--wide {
            grid-column: span 2;
            min-height: 17rem;
          }
        }

        @media (min-width: 900px) {
          .team-leader-hero__content {
            grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.58fr);
            align-items: end;
            gap: 2rem;
            padding: 6.75rem 0 5.5rem;
          }

          .team-leader-feature {
            grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
            align-items: center;
          }

          .team-leader-story-layout {
            grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
            align-items: start;
          }

          .team-leader-feature__card,
          .team-leader-story {
            padding: 2rem;
          }
        }

        @media (min-width: 1025px) {
          .team-leader-media--portrait {
            min-height: 34rem;
          }

          .team-leader-media--floating {
            width: min(48%, 16rem);
            min-height: 13rem;
          }

          .team-leader-media--wide {
            min-height: 18rem;
          }

          .team-leader-media--stack {
            min-height: 18rem;
          }
        }

        @media (max-width: 640px) {
          .team-leader-media,
          .team-leader-feature__card,
          .team-leader-story {
            padding: 0.65rem;
          }

          .team-leader-feature__card,
          .team-leader-story {
            padding: 1.25rem;
          }

          .team-leader-media img {
            border-radius: 0.8rem;
          }
        }
      `}</style>
    </div>
  )
}

export default TeamLeader
