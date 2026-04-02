import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPinned,
} from 'lucide-react'

const quickLinks = [
  { title: 'Team Leader', href: '/team-leader' },
  { title: 'Ambassadors Of Hope', href: '/outreach' },
  { title: 'Vision & Mission', href: '/about#mission' },
  { title: 'The Amazing Journey Of WCC', href: '/amazing-journey' },
  { title: "What's Happening", href: '/#ministries' },
  { title: 'Why Partnership', href: '/donate' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Give', href: '/give' },
]

const featuredMinistry = {
  title: 'Back to Eden',
  image: '/2024/09/back to eden.jpg',
  href: '/women-of-destiny',
  description:
    "A marrieds' ministry with a mission to help men and women discover their position in God and realise the fullest of their potential. Two great conferences are held annually in addition to the various programs planned to empower and equip men and women in all dimensions of life, i.e. Wonder Women's Conferences; A women's conference aimed at empowering women for Leadership, Family and Business and Back to Eden Men's Conferences; an initiative aimed at raising the God-kind of men with a passion for Fatherhood and Kingdom influence.",
}

const ministries = [
  {
    title: 'Wonder Christian Centre',
    image: '/2024/09/wonder.jpg',
    description: 'A growing family Church in Busega-Kampala, Uganda.',
  },
  {
    title: 'Leadership Conferences',
    image: '/2024/09/1.jpg',
    imageFit: 'contain',
    description: 'These are held within Uganda and within other nations for purposes of empowerment for national transformation.',
  },
  {
    title: 'Money Makers Conferences',
    image: '/2024/09/money.jpg',
    description: 'A market place ministry committed to mentoring people for market place influence for the cause of the Kingdom.',
  },
  {
    title: 'Dreams of Hope',
    image: '/2024/09/dreams of hope.jpg',
    description: 'A child care organisation committed to building destinies of less privileged children.',
  },
  {
    title: 'Mass Evangelism Crusades',
    image: '/2024/09/Mass-Evangelism-Crusades.jpg',
    description:
      "In many parts of Uganda, there's an urgent need for the gospel of Christ's saving Grace. There are levels of witchcraft beyond description; evident everywhere. The world needs Jesus!",
  },
  {
    title: 'Feed His Image',
    image: '/2024/08/feed his image.jpg',
    description: 'A feeding program targeting starving children and the elderly that started in 2020 during the covid 19 period.',
  },
  {
    title: 'University (Campus) Fellowships',
    image: '/2024/09/university.jpg',
    description: "Outreaches to young people are fundamental all across the world. Uganda currently has the world's youngest population rate.",
  },
  {
    title: 'High School Outreach Program',
    image: '/2024/09/high school.jpg',
    description: 'A mentorship program targeting high school teens.',
  },
  {
    title: 'Free Medical Camps',
    image: '/2024/09/medical.jpg',
    description: 'Free Medical check-up and treatment mainly targeting children has proven to be an effective evangelism tool to the glory of Jesus.',
  },
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
      { threshold: 0.16, rootMargin: '0px 0px -40px 0px' },
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

function SmartLink({ href, className, children }) {
  if (href.includes('#')) {
    return (
      <a href={href} className={className}>
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

const Home = () => {
  const bioParagraphs = [
    'Benjamin Kiconco was called of God at the age of 17, stepped out into ministry at 19 and later founded Wonder Christian Centre (Isaiah 32) at 23 years of age.',
    "His mission is to Shape the Destinies of God's people through the preaching of the Word of His Grace and Faith and the ministry of Miracles, Signs and Wonders.",
    "Having founded Wonder Christian Centre (a church that started under an avocado tree in 2011), he serves as her Senior Pastor while not neglecting his commitment to empowering God's people (especially youth & leaders) by helping them discover and fully maximize their gifts and callings in order to live a life of purpose and walk in their God-ordained destinies.",
    "He, by the grace of God and the help of partners and friends, travels the nations of the earth speaking to congregations, motivating corporate organization employees and holding crusades and conferences. He has tirelessly and consistently demonstrated commitment to making a difference in people's lives, one person at a time! It's true that we were called to extend the Grace of Christ to others just as it was extended to us! We were called to shape the destines of men.",
    'Benjamin Kiconco lives in the outskirts of Kampala-Uganda with his precious family.',
  ]

  const leaderLinks = quickLinks.slice(0, 4)
  const ministryLinks = quickLinks.slice(4, 8)

  return (
    <div className="home-page">
      <section className="hero-home">
        <div className="hero-home__bg" />
        <div className="hero-home__overlay" />
        <div className="hero-home__graphics">
          <div className="hero-home__orb hero-home__orb--one" />
          <div className="hero-home__orb hero-home__orb--two" />
          <div className="hero-home__grid" />
        </div>
        <div className="container hero-home__content">
          <div className="hero-home__copy">
            <span className="hero-home__eyebrow">Welcome to</span>
            <div className="hero-home__intro">
              <img
                src="/2024/08/icon.png"
                alt="Wonder Christian Centre icon logo"
                width="74"
                height="74"
                fetchPriority="high"
                decoding="async"
              />
              <div>
                <p className="hero-home__kicker">Wonder Christian Centre</p>
                <span>where we are</span>
              </div>
            </div>
            <h1>SHAPING DESTINIES</h1>
            <p>
              As a ministry, we have been called to shape the Destinies of God's people! We are so
              glad you have taken time to visit. We hope you find your time here resourceful!
            </p>
            <div className="hero-home__actions">
              <a href="https://maps.app.goo.gl/BRDCNCyuWeS6kApC6" className="button button-primary" target="_blank" rel="noreferrer">
                <MapPinned size={18} />
                Get directions
              </a>
              <Link to="/give" className="button button-outline">
                Give
              </Link>
            </div>
          </div>

          <div className="hero-home__spotlight">
            <Reveal delay={180}>
              <article className="hero-home__feature-card surface-card">
                <div className="hero-home__logo-stage" aria-hidden="true">
                  <div className="hero-home__logo-orbit hero-home__logo-orbit--one" />
                  <div className="hero-home__logo-orbit hero-home__logo-orbit--two" />
                  <img
                    src="/2024/08/heroimage.jpeg"
                    alt="Wonder Christian Centre logo mark"
                    className="hero-home__logo-mark"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="quick-links" className="section">
        <div className="container">
          <Reveal delay={120}>
            <div className="home-intro-panel surface-card">
              <div className="home-intro-panel__glow" />
              <div className="home-intro-panel__content">
                <span className="eyebrow">Wonder Christian Centre</span>
                <h2 className="section-title">Shaping destinies through faith, service, and empowerment.</h2>
              </div>
              <div className="home-intro-panel__body">
                <div className="home-intro-panel__line" />
                <div className="home-intro-panel__text">
                  <span className="home-intro-panel__mark">WCC</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="quick-links-intro-card surface-card">
              <p>
                Wonder Christian Centre is a dynamic church committed to shaping destinies through
                faith, service, and empowerment. Founded in 2011, our mission is to spread the
                gospel, uplift communities, and inspire individuals to live purposeful lives. Join
                us as we make a lasting impact in Uganda and beyond.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="benjamin" className="section section-cream">
        <div className="container">
          <div className="leader-layout">
            <Reveal className="leader-visual">
              <div className="leader-visual__frame">
                <img src="/2024/10/benjamin.jpg" alt="Pastor Benjamin Kiconco portrait" loading="lazy" decoding="async" />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="leader-copy">
                <span className="eyebrow">Meet Benjamin Kiconco</span>
                <div className="leader-copy__body">
                  {bioParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="section-shortcuts">
                  {leaderLinks.map((item) => (
                    <SmartLink key={item.title} href={item.href} className="section-shortcut">
                      {item.title}
                    </SmartLink>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="ministries" className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Our Ministries</span>
            <h2 className="section-title">Our different ministries currently include;</h2>
          </Reveal>

          <Reveal>
            <a href={featuredMinistry.href} className="featured-ministry surface-card">
              <div className="featured-ministry__media">
                <img src={featuredMinistry.image} alt="Back to Eden marrieds ministry conference at Wonder Christian Centre" loading="lazy" decoding="async" />
              </div>
              <div className="featured-ministry__body">
                <h3>{featuredMinistry.title}</h3>
                <p>{featuredMinistry.description}</p>
              </div>
            </a>
          </Reveal>

          <div className="ministries-grid">
            {ministries.map((ministry, index) => (
              <Reveal key={ministry.title} delay={index * 70}>
                <article className="ministry-card surface-card">
                  <div className={`ministry-card__media ${ministry.imageFit === 'contain' ? 'is-contain' : ''}`}>
                    <img src={ministry.image} alt={`${ministry.title} ministry at Wonder Christian Centre`} loading="lazy" decoding="async" />
                  </div>
                  <div className="ministry-card__body">
                    <h3>{ministry.title}</h3>
                    <p>{ministry.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="section-shortcuts section-shortcuts--bottom">
              {ministryLinks.map((item) => (
                <SmartLink key={item.title} href={item.href} className="section-shortcut">
                  {item.title}
                </SmartLink>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <article className="story-panel surface-card">
              <div className="story-panel__content">
                <p className="story-panel__opening">
                  <span className="story-panel__dropcap" aria-hidden="true">I</span>
                  n one of history’s greatest moments of decision, the people of God were faced with a huge challenge while away in captivity. Apparently, the enemies of God wanted to destroy the entire race of Israel. During this time, one Queen Esther, a Jewish herself, was faced with a call to go plead for the preservation of the rest of the people of God before the king. In exhortation to this request, Mordecai, Esther’s uncle, made such a powerful statement.
                </p>
                <blockquote>“…….and who knows whether you are come to the kingdom for such a time as this?”</blockquote>
                <p className="story-panel__reference">Esther 4:14b</p>
                <p>
                  In today’s generation, the voice of God is continually calling out to His own people to accept the great responsibility to preach the gospel of Christ. Jesus Christ will always remain the answer to life’s questions.
                </p>
                <p>
                  In every possible way therefore, make every effort to join the club of those who avail the solutions. He has in every generation always chosen remnants to bring solutions to many.
                </p>
                <p>Come let’s build the kingdom of Christ together! Amen!</p>
                <p>The truth we don’t want to tell or hear is that;</p>
                <blockquote>
                  ‘On that day, when we stand before the judgment seat of Christ, many He will crown for all they do for Him but others He will blame for sending many to hell by not supporting the gospel.’
                </blockquote>
                <p>
                  Just like Esther, there is a special call on your life. None of us is here on this earth by mistake! You need to know that God has not left you alive for no reason. You have a purpose; a reason for your existence; a calling from God that should be fulfilled.
                </p>
                <p>Together, we are stronger and together we make a difference!</p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <Reveal>
            <article className="story-panel story-panel--deep surface-card">
              <div className="story-panel__content">
                <h2 className="section-title">‘SIR, I HAVE NO MAN…’</h2>
                <p>
                  For many years, I had always told God that the vision I felt in my heart was too big for me to ever arrive to the destiny He had called me for or even get to transform lives as much as I really felt I had been called to if I kept flowing at the pace I was moving at. One day, in a season of devoted prayer and fasting, the Spirit of God said to me;
                </p>
                <blockquote>
                  ‘YOU HAVE SPENT YEARS SERVING ME FAITHFULLY DESPITE THE MANY HARDSHIPS, WOUNDS AND PAINFUL EXPERIENCES. I AM NOW GOING TO BRING YOU DESTINY HELPERS.’
                </blockquote>
                <p>
                  I definitely did wait for so long after that divine visitation but based on the Word of God, I had believed the time would come when a change would come.
                </p>
                <p>
                  Several times, the Lord has brought me people Himself! They would come at a time when I more than ever needed ‘someone’! Praise Jesus!
                </p>
                <blockquote>
                  “Now a certain man was there who had an infirmity thirty-eight years.
                  <br />
                  <br />
                  When Jesus saw him lying there, and knew that he already had been in that condition a long time, He said to him, “Do you want to be made well?”
                  <br />
                  <br />
                  The sick man answered Him, “Sir, I have no man to put me into the pool when the water is stirred up; but while I am coming, another steps down before me.” John 5:1-5
                </blockquote>
                <p>
                  The story of this man teaches me that everyone needs someone. Nobody should ever work and walk alone in this life! I have been there where one would seriously be operating like some lone sheep seeking a way in an impenetrable forest in a deep valley. Those are experiences that have had many doubt or even abandon the call.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <article className="give-panel surface-card">
              <div className="give-panel__content">
                <span className="eyebrow">Give</span>
                <p>
                  Your generosity helps us continue our mission of transforming lives. As the Bible says, “It is He who gives you power to get wealth, that He may establish His covenant” (Deuteronomy 8:18). Every contribution, big or small, makes a difference.
                </p>
                <p>“For such a time as this…You have been chosen!” (Esther 4:14)</p>
                <p>
                  We believe that everyone has a part to play in God’s kingdom. Whether through prayer, volunteering, or financial support, your involvement can make a lasting impact. Join us in spreading the gospel, serving the community, and shaping destinies.
                </p>
                <a href="/give" className="button button-primary">Ways to Give</a>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <article className="partnership-banner surface-card">
              <div className="partnership-banner__media">
                <img src="/2024/09/AM5A1939.jpg" alt="Partnership; Endless Impact" loading="lazy" decoding="async" />
              </div>
              <div className="partnership-banner__content">
                <span className="eyebrow">Partnership; Endless Impact</span>
                <h2 className="section-title">‘For such a time as this…You have been chosen!’</h2>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <style>{`
        .hero-home {
          position: relative;
          min-height: calc(100svh - 7.75rem);
          display: grid;
          align-items: center;
          overflow: clip;
          background: var(--color-blue-deep);
        }

        .hero-home__bg,
        .hero-home__overlay,
        .hero-home__graphics {
          position: absolute;
          inset: 0;
        }

        .hero-home__bg {
          background:
            radial-gradient(circle at 18% 18%, rgba(181, 214, 58, 0.34), transparent 16%),
            radial-gradient(circle at 78% 24%, rgba(255, 255, 255, 0.14), transparent 18%),
            radial-gradient(circle at 84% 72%, rgba(181, 214, 58, 0.18), transparent 20%),
            linear-gradient(135deg, #06162c 0%, #0a2142 50%, #143c74 100%);
          transform-origin: center;
          animation: heroBackdropZoom 14s ease-out forwards;
        }

        .hero-home__overlay {
          background:
            linear-gradient(109deg, rgba(4, 15, 31, 0.64) 8%, rgba(8, 29, 57, 0.18) 48%, rgba(8, 29, 57, 0.08) 100%);
        }

        .hero-home__graphics {
          pointer-events: none;
        }

        .hero-home__orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(8px);
        }

        .hero-home__orb--one {
          top: 14%;
          right: 12%;
          width: 18rem;
          height: 18rem;
          background: radial-gradient(circle, rgba(181, 214, 58, 0.28), transparent 65%);
        }

        .hero-home__orb--two {
          bottom: 4%;
          left: -2%;
          width: 24rem;
          height: 24rem;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.12), transparent 64%);
        }

        .hero-home__grid {
          position: absolute;
          inset: auto 0 0 auto;
          width: 38%;
          height: 58%;
          opacity: 0.22;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.16) 1px, transparent 1px);
          background-size: 2rem 2rem;
          mask-image: linear-gradient(180deg, transparent, black 24%, black 100%);
        }

        .hero-home__content {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 1.35rem;
          padding: 4.75rem 0 4rem;
        }

        .hero-home__copy {
          max-width: 52rem;
          color: white;
          animation: heroContentIn 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .hero-home__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.5rem 0.9rem;
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.92);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 0.84rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
        }

        .hero-home__intro {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          align-items: center;
          gap: 0.85rem;
          margin-top: 1.15rem;
          padding: 0.9rem 1rem;
          border-radius: 1.6rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
        }

        .hero-home__intro img {
          width: 3.9rem;
          height: 3.9rem;
          border-radius: 50%;
          background: white;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
        }

        .hero-home__kicker {
          margin: 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.7rem, 2.4vw, 2.3rem);
          line-height: 1;
          color: white;
        }

        .hero-home__intro span {
          display: inline-block;
          margin-top: 0.35rem;
          font-size: 1rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.78);
        }

        .hero-home h1 {
          margin: 1.35rem 0 0.9rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.85rem, 13vw, 7.4rem);
          line-height: 0.9;
          letter-spacing: -0.07em;
          color: white;
        }

        .hero-home p {
          margin: 0 0 2rem;
          max-width: 46rem;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.82);
        }

        .hero-home__actions {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .hero-home__actions .button {
          width: 100%;
        }

        .hero-home__spotlight {
          display: grid;
        }

        .hero-home__feature-card {
          display: grid;
          place-items: center;
          min-height: 20rem;
          padding: 1.25rem;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18);
        }

        .hero-home__logo-stage {
          position: relative;
          display: grid;
          place-items: center;
          width: 100%;
          min-height: 17rem;
        }

        .hero-home__logo-orbit {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-home__logo-orbit--one {
          width: 15rem;
          height: 15rem;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: radial-gradient(circle, rgba(181, 214, 58, 0.18), transparent 66%);
          animation: heroLogoPulse 6s ease-in-out infinite;
        }

        .hero-home__logo-orbit--two {
          width: 11rem;
          height: 11rem;
          border: 1px dashed rgba(255, 255, 255, 0.18);
          animation: heroLogoSpin 14s linear infinite;
        }

        .hero-home__logo-mark {
          position: relative;
          z-index: 1;
          width: min(58vw, 12rem);
          aspect-ratio: 1;
          object-fit: contain;
          filter: drop-shadow(0 22px 34px rgba(0, 0, 0, 0.24));
          animation: heroLogoBounce 2.8s ease-in-out infinite;
        }

        .home-intro-panel {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          padding: 1.25rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.18), transparent 24%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 242, 231, 0.88));
        }

        .home-intro-panel__glow {
          position: absolute;
          right: -6%;
          top: -12%;
          width: 16rem;
          height: 16rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(181, 214, 58, 0.2), transparent 68%);
          pointer-events: none;
        }

        .home-intro-panel__content {
          position: relative;
          z-index: 1;
        }

        .home-intro-panel__content .section-title {
          margin-bottom: 0;
          font-size: clamp(2.1rem, 3.8vw, 3.6rem);
        }

        .home-intro-panel__body {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: flex-start;
        }

        .home-intro-panel__line {
          width: 100%;
          max-width: 8rem;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(16, 58, 113, 0.18), var(--color-lemon));
        }

        .home-intro-panel__text {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 6rem;
          min-height: 6rem;
          padding: 1rem;
          border-radius: 1.6rem;
          background:
            linear-gradient(135deg, rgba(16, 58, 113, 0.98), rgba(8, 29, 57, 0.98));
          box-shadow: 0 24px 50px rgba(8, 29, 57, 0.16);
        }

        .home-intro-panel__mark {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: 0.24em;
          color: white;
        }

        .quick-links-intro-card {
          margin-top: 1.15rem;
          padding: 1.25rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            rgba(255, 255, 255, 0.96);
        }

        .quick-links-intro-card p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.8;
          color: var(--color-text);
        }

        .quick-link-card {
          position: relative;
          display: flex;
          min-height: 10.5rem;
          padding: 1.7rem;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }

        .quick-link-card::before {
          content: '';
          position: absolute;
          inset: auto -20% -45% auto;
          width: 10rem;
          height: 10rem;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(181, 214, 58, 0.28), transparent 68%);
          transition: transform var(--transition);
        }

        .quick-link-card:hover {
          transform: translateY(-8px);
          border-color: rgba(181, 214, 58, 0.5);
          box-shadow: 0 30px 70px rgba(16, 58, 113, 0.14);
        }

        .quick-link-card:hover::before {
          transform: scale(1.08);
        }

        .quick-link-card__icon {
          width: 3.8rem;
          height: 3.8rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 1.2rem;
          color: var(--color-blue);
          background: linear-gradient(135deg, rgba(181, 214, 58, 0.2), rgba(16, 58, 113, 0.08));
        }

        .quick-link-card h3,
        .ministry-card h3 {
          margin: 1.2rem 0 0;
          font-family: 'Outfit', sans-serif;
          font-size: 1.56rem;
          line-height: 1.08;
          color: var(--color-blue-deep);
        }

        .quick-link-card p,
        .leader-copy p,
        .ministry-card p {
          margin: 0;
          font-size: 1.02rem;
          color: var(--color-muted);
          line-height: 1.86;
        }

        .leader-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.4rem;
          align-items: center;
        }

        .leader-visual__frame {
          position: relative;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: var(--shadow-strong);
        }

        .leader-visual__frame img {
          width: 100%;
          height: 100%;
          min-height: 20rem;
          object-fit: cover;
          object-position: center top;
        }

        .leader-copy__body {
          display: grid;
          gap: 1rem;
          max-width: 44rem;
          margin-top: 1rem;
        }

        .section-shortcuts {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          margin-top: 1.6rem;
        }

        .section-shortcuts--bottom {
          margin-top: 1.5rem;
        }

        .section-shortcut {
          display: inline-flex;
          align-items: center;
          min-height: 3rem;
          padding: 0.72rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(16, 58, 113, 0.1);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 14px 32px rgba(8, 29, 57, 0.06);
          font-size: 0.92rem;
          font-weight: 800;
          color: var(--color-blue-deep);
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }

        .section-shortcut:hover {
          transform: translateY(-3px);
          border-color: rgba(181, 214, 58, 0.45);
          box-shadow: 0 18px 36px rgba(8, 29, 57, 0.1);
        }

        .partnership-banner {
          display: grid;
          grid-template-columns: 1fr;
          align-items: stretch;
          overflow: hidden;
          padding: 0;
          border: 1px solid rgba(181, 214, 58, 0.34);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.18), transparent 26%),
            linear-gradient(135deg, rgba(16, 58, 113, 0.98), rgba(8, 29, 57, 0.98));
          box-shadow: 0 28px 70px rgba(8, 29, 57, 0.16);
        }

        .partnership-banner__media {
          position: relative;
          min-height: 14rem;
          overflow: hidden;
          background: #dfe6ef;
        }

        .partnership-banner__media::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(8, 29, 57, 0.06), rgba(8, 29, 57, 0.34)),
            linear-gradient(180deg, transparent, rgba(8, 29, 57, 0.12));
        }

        .partnership-banner__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .partnership-banner:hover .partnership-banner__media img {
          transform: scale(1.05);
        }

        .partnership-banner__content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1.45rem 1.25rem 1.6rem;
        }

        .partnership-banner .eyebrow,
        .partnership-banner .section-title {
          color: white;
        }

        .partnership-banner .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.92), transparent);
        }

        .partnership-banner .section-title {
          margin-bottom: 0;
          max-width: 30rem;
        }

        .featured-ministry {
          display: grid;
          grid-template-columns: 1fr;
          margin-bottom: 1.5rem;
          overflow: hidden;
          border: 1px solid rgba(181, 214, 58, 0.34);
          background:
            linear-gradient(135deg, rgba(181, 214, 58, 0.08), rgba(255, 255, 255, 0.96)),
            white;
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }

        .featured-ministry:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 90px rgba(8, 29, 57, 0.14);
          border-color: rgba(181, 214, 58, 0.4);
        }

        .featured-ministry__media img {
          width: 100%;
          height: 100%;
          min-height: 15rem;
          object-fit: cover;
        }

        .featured-ministry__body {
          padding: 1.45rem 1.25rem 1.6rem;
        }

        .featured-ministry__body h3 {
          margin: 0 0 1rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.1rem, 3vw, 2.8rem);
          line-height: 0.98;
          color: var(--color-blue-deep);
        }

        .featured-ministry__body p {
          margin: 0;
          font-size: 1.04rem;
          line-height: 1.95;
          color: var(--color-muted);
        }

        .story-panel,
        .give-panel {
          padding: 1.45rem 1.25rem 1.6rem;
          border: 1px solid rgba(16, 58, 113, 0.1);
        }

        .story-panel {
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            rgba(255, 255, 255, 0.96);
        }

        .story-panel--deep {
          background:
            linear-gradient(135deg, rgba(16, 58, 113, 0.05), rgba(255, 255, 255, 0.98)),
            white;
        }

        .story-panel__content,
        .give-panel__content {
          max-width: 58rem;
        }

        .story-panel__content p,
        .give-panel__content p {
          margin: 0 0 1rem;
          font-size: 1.03rem;
          line-height: 1.95;
          color: var(--color-text);
        }

        .story-panel__opening {
          position: relative;
        }

        .story-panel__dropcap {
          float: left;
          width: 4.7rem;
          height: 4.7rem;
          margin: 0.2rem 1rem 0.2rem 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--color-blue), var(--color-blue-deep));
          box-shadow: 0 18px 38px rgba(16, 58, 113, 0.22);
          font-family: 'Outfit', sans-serif;
          font-size: 2.6rem;
          font-weight: 800;
          line-height: 1;
          color: white;
        }

        .story-panel blockquote {
          margin: 1.25rem 0;
          padding: 1rem 1rem 1rem 1.1rem;
          border-left: 4px solid var(--color-lemon);
          border-radius: 0 1rem 1rem 0;
          background: rgba(16, 58, 113, 0.04);
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          line-height: 1.6;
          color: var(--color-blue-deep);
        }

        .story-panel__reference {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-blue);
        }

        .give-panel {
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.16), transparent 26%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 242, 231, 0.94));
        }

        .ministries-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .ministry-card {
          overflow: hidden;
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .ministry-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(8, 29, 57, 0.14);
        }

        .ministry-card__media {
          overflow: hidden;
          aspect-ratio: 1.18;
          background: #dfe6ef;
        }

        .ministry-card__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ministry-card__media.is-contain img {
          object-fit: contain;
          background: #f4f6fa;
        }

        .ministry-card__media.is-contain {
          min-height: 16rem;
          padding: 0.35rem;
        }

        .ministry-card:hover .ministry-card__media img {
          transform: scale(1.06);
        }

        .ministry-card__body {
          padding: 1.25rem 1.1rem 1.3rem;
        }

        @keyframes heroLogoBounce {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-14px) scale(1.03);
          }
        }

        @keyframes heroLogoPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes heroLogoSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (min-width: 481px) {
          .hero-home__actions {
            flex-direction: row;
          }

          .hero-home__actions .button {
            width: auto;
          }

          .hero-home__feature-card {
            min-height: 22rem;
          }

          .section-shortcuts {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 901px) {
          .hero-home__content {
            grid-template-columns: minmax(0, 1.02fr) minmax(18rem, 0.68fr);
            align-items: center;
            gap: 2rem;
            padding: 7rem 0;
          }

          .hero-home p {
            font-size: 1.22rem;
            line-height: 1.95;
          }

          .hero-home__feature-card {
            transform: translateY(1.25rem);
          }

          .hero-home__logo-mark {
            width: min(18rem, 100%);
          }

          .leader-layout,
          .partnership-banner,
          .featured-ministry {
            grid-template-columns: minmax(0, 0.96fr) minmax(0, 1.04fr);
          }

          .leader-layout {
            grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
            gap: 3rem;
          }

          .leader-visual__frame img {
            min-height: 40rem;
          }

          .partnership-banner__media {
            min-height: 22rem;
          }

          .partnership-banner__content,
          .story-panel,
          .give-panel {
            padding: 2.35rem;
          }

          .featured-ministry__media img {
            min-height: 25rem;
          }

          .featured-ministry__body {
            padding: 2.35rem;
          }
        }

        @media (min-width: 1181px) {
          .home-intro-panel {
            grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
            gap: 1.5rem;
            padding: 2rem;
          }

          .home-intro-panel__body {
            justify-content: flex-end;
          }

          .ministries-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1025px) {
          .ministries-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.35rem;
          }

          .section-shortcuts {
            display: flex;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 640px) {
          .hero-home__eyebrow {
            font-size: 0.7rem;
            letter-spacing: 0.18em;
          }

          .hero-home__intro {
            width: 100%;
          }

          .hero-home__kicker {
            font-size: 1.35rem;
          }

          .hero-home__intro span {
            font-size: 0.92rem;
          }

          .story-panel__dropcap {
            width: 3.6rem;
            height: 3.6rem;
            margin-right: 0.75rem;
            font-size: 2rem;
          }

          .section-shortcut {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 380px) {
          .hero-home h1 {
            font-size: 2.65rem;
          }

          .hero-home__intro {
            grid-template-columns: 1fr;
            justify-items: start;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
