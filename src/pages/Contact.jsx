import { useEffect, useRef } from 'react'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import FaqSection from '../components/FaqSection'
import { seoRouteMap } from '../seo/routes'

function SocialIcon({ type }) {
  if (type === 'tiktok') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.24V2h-3.12v13.17a2.67 2.67 0 1 1-2.67-2.67c.23 0 .45.03.67.08V9.4a5.79 5.79 0 1 0 5.12 5.77V8.54a7.9 7.9 0 0 0 4.57 1.45V6.86c-.27 0-.54-.06-.8-.17Z" />
      </svg>
    )
  }

  if (type === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.58A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.58 9.4.58 9.4.58s7.55 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </svg>
    )
  }

  if (type === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M13.5 21v-8.03h2.7l.4-3.12h-3.1V7.86c0-.9.25-1.52 1.55-1.52H16.7V3.55c-.29-.04-1.27-.12-2.42-.12-2.4 0-4.03 1.46-4.03 4.15v2.27H7.5v3.12h2.75V21h3.25Z" />
      </svg>
    )
  }

  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.9A3.85 3.85 0 0 0 3.9 7.75v8.5a3.85 3.85 0 0 0 3.85 3.85h8.5a3.85 3.85 0 0 0 3.85-3.85v-8.5a3.85 3.85 0 0 0-3.85-3.85h-8.5Zm8.98 1.43a1.14 1.14 0 1 1 0 2.28 1.14 1.14 0 0 1 0-2.28ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z" />
      </svg>
    )
  }

  return <MessageCircle size={18} aria-hidden="true" />
}

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

const socialLinks = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@wccug?_r=1&_t=ZS-956s5H5QE0z', icon: 'tiktok' },
  { label: 'YouTube', href: 'https://youtube.com/@wccug?si=P8YJjF2mwdE4fFoR', icon: 'youtube' },
  { label: 'Facebook', href: 'https://www.facebook.com/benjaminkiconco', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/benjaminkiconco', icon: 'instagram' },
  { label: 'WhatsApp', href: 'https://wa.me/256707000999', icon: 'whatsapp' },
]

const contactImages = [
  '/2024/09/PXL_20240218_084201789.jpg',
  '/2024/09/MG_2988.jpg',
]

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__bg" />
        <div className="contact-hero__overlay" />
        <div className="container contact-hero__content">
          <Reveal className="contact-hero__copy">
            <span className="eyebrow">Contact us</span>
            <h1>CONTACT US</h1>
            <p>
              Thank you for visiting our website. You can reach us with any inquiries on wonderchristiancentre@gmail.com.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <article className="contact-community surface-card">
              <div className="contact-community__copy">
                <span className="eyebrow">Stay Connected</span>
                <h2>Meet us online, stay encouraged, and feel at home with us.</h2>
                <p>
                  Connect with us online by following us on Facebook, Instagram, YouTube, TikTok,
                  and WhatsApp. Whatever you choose to do, know that we love you and want to
                  welcome you to the family.
                </p>
              </div>
              <div className="contact-community__chips">
                {socialLinks.map((item) => (
                  <a key={item.label} href={item.href} className="contact-community__chip" target="_blank" rel="noreferrer">
                    <span className="contact-community__chip-icon">
                      <SocialIcon type={item.icon} />
                    </span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </article>
          </Reveal>

          <div className="contact-layout">
            <Reveal>
              <article className="contact-card surface-card">
                <h2>Reach us</h2>
                <div className="contact-list">
                  <a href="mailto:wonderchristiancentre@gmail.com" className="contact-list__item">
                    <Mail size={20} />
                    <div>
                      <strong>Email</strong>
                      <span>wonderchristiancentre@gmail.com</span>
                    </div>
                  </a>
                  <a href="tel:+256707000999" className="contact-list__item">
                    <Phone size={20} />
                    <div>
                      <strong>Phone</strong>
                      <span>+256707000999</span>
                    </div>
                  </a>
                  <a href="https://wa.me/256707000999" className="contact-list__item">
                    <MessageCircle size={20} />
                    <div>
                      <strong>WhatsApp</strong>
                      <span>256707000999</span>
                    </div>
                  </a>
                  <div className="contact-list__item">
                    <MapPin size={20} />
                    <div>
                      <strong>Location</strong>
                      <span>Busega-Kibumbiro, Kampala, Uganda</span>
                    </div>
                  </div>
                </div>

                <div className="contact-socials">
                  {socialLinks.map((item) => {
                    return (
                      <a key={item.label} href={item.href} className="contact-socials__item" target="_blank" rel="noreferrer">
                        <span className="contact-socials__icon">
                          <SocialIcon type={item.icon} />
                        </span>
                        <strong>{item.label}</strong>
                      </a>
                    )
                  })}
                </div>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="contact-form-card surface-card">
                <h2>You can also use the form below to contact us:</h2>
                <form className="contact-form">
                  <label className="contact-field">
                    <span>Name</span>
                    <input type="text" placeholder="Name" autoComplete="name" inputMode="text" />
                  </label>
                  <label className="contact-field">
                    <span>Email</span>
                    <input type="email" placeholder="Email" autoComplete="email" inputMode="email" />
                  </label>
                  <label className="contact-field">
                    <span>Phone Number</span>
                    <input type="tel" placeholder="Phone Number" autoComplete="tel" inputMode="tel" />
                  </label>
                  <label className="contact-field contact-field--full">
                    <span>Message</span>
                    <textarea rows="6" placeholder="Message" />
                  </label>
                  <label className="contact-checkbox">
                    <input type="checkbox" />
                    <span>SIGN UP FOR MONTHLY EMAIL UPDATES</span>
                  </label>
                  <div className="contact-actions">
                    <button type="submit" className="button button-primary">Send Message</button>
                  </div>
                </form>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="contact-gallery">
            {contactImages.map((image, index) => (
              <Reveal key={image} delay={index * 90}>
                <figure className={`contact-gallery__item surface-card ${index === 0 ? 'is-featured' : ''}`}>
                  <img src={image} alt={`Contact Wonder Christian Centre ${index + 1}`} loading="lazy" decoding="async" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection {...seoRouteMap['/contact'].faqSection} />

      <style>{`
        .contact-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .contact-hero {
          position: relative;
          overflow: clip;
          background: #081d39;
        }

        .contact-hero__bg,
        .contact-hero__overlay {
          position: absolute;
          inset: 0;
        }

        .contact-hero__bg {
          background:
            linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)),
            url('/2024/11/_MG_1019.jpg.jpeg') center/cover no-repeat;
          transform: scale(1.06);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .contact-hero__overlay {
          background:
            radial-gradient(circle at 22% 22%, rgba(181, 214, 58, 0.18), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.84), rgba(8, 29, 57, 0.4) 48%, rgba(8, 29, 57, 0.82));
        }

        .contact-hero__content {
          position: relative;
          z-index: 1;
          padding: 5.25rem 0 4.5rem;
        }

        .contact-hero__copy {
          max-width: 52rem;
          color: white;
        }

        .contact-hero .eyebrow {
          color: rgba(255, 255, 255, 0.92);
        }

        .contact-hero .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.92), transparent);
        }

        .contact-hero__copy h1 {
          margin: 1rem 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 6vw, 5.4rem);
          line-height: 0.94;
          letter-spacing: -0.06em;
          color: white;
        }

        .contact-hero__copy p {
          margin: 0 0 1rem;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.84);
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          align-items: start;
          margin-top: 1.1rem;
        }

        .contact-community {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.2rem;
          margin-bottom: 1.1rem;
          padding: 1.35rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.16), transparent 22%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 242, 231, 0.9));
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
        }

        .contact-community__copy h2 {
          margin: 0.9rem 0 0.85rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.9rem, 4vw, 3rem);
          line-height: 1;
          color: var(--color-blue-deep);
        }

        .contact-community__copy p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.82;
          color: var(--color-text);
        }

        .contact-community__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .contact-community__chip {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          min-height: 3rem;
          padding: 0.8rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(16, 58, 113, 0.1);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 14px 32px rgba(8, 29, 57, 0.06);
          font-weight: 800;
          color: var(--color-blue-deep);
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }

        .contact-community__chip:hover {
          transform: translateY(-3px);
          border-color: rgba(181, 214, 58, 0.45);
          box-shadow: 0 18px 36px rgba(8, 29, 57, 0.1);
        }

        .contact-community__chip-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 999px;
          background: rgba(16, 58, 113, 0.08);
          color: var(--color-blue);
        }

        .contact-community__chip-icon svg {
          width: 1rem;
          height: 1rem;
        }

        .contact-card,
        .contact-form-card {
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            rgba(255, 255, 255, 0.97);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
        }

        .contact-card,
        .contact-form-card {
          padding: 1.35rem;
        }

        .contact-card h2,
        .contact-form-card h2 {
          margin: 0 0 1.2rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.9rem, 3vw, 2.6rem);
          line-height: 1.02;
          color: var(--color-blue-deep);
        }

        .contact-list {
          display: grid;
          gap: 0.9rem;
        }

        .contact-list__item {
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          padding: 1rem 1.05rem;
          border-radius: 1rem;
          background: rgba(16, 58, 113, 0.04);
          transition: transform var(--transition), background-color var(--transition);
        }

        .contact-list__item:hover {
          transform: translateY(-3px);
          background: rgba(181, 214, 58, 0.12);
        }

        .contact-list__item svg {
          margin-top: 0.15rem;
          color: var(--color-blue);
          flex-shrink: 0;
        }

        .contact-list__item strong,
        .contact-socials__item strong {
          display: block;
          margin-bottom: 0.15rem;
          color: var(--color-blue-deep);
        }

        .contact-list__item span {
          color: var(--color-text);
          line-height: 1.7;
        }

        .contact-socials {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.85rem;
          margin-top: 1.25rem;
        }

        .contact-socials__item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.95rem 1rem;
          border-radius: 1rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background: white;
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .contact-socials__item:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(8, 29, 57, 0.1);
        }

        .contact-socials__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 999px;
          background: rgba(16, 58, 113, 0.08);
          color: var(--color-blue);
          flex-shrink: 0;
        }

        .contact-socials__icon svg {
          width: 1.15rem;
          height: 1.15rem;
        }

        .contact-socials__item svg,
        .contact-socials__item span,
        .contact-socials__icon {
          color: var(--color-blue);
        }

        .contact-form {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .contact-gallery {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .contact-gallery__item {
          margin: 0;
          overflow: hidden;
          padding: 0.8rem;
          border-radius: 1.45rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            rgba(255, 255, 255, 0.97);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .contact-gallery__item:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
        }

        .contact-gallery__item.is-featured {
          min-height: 16rem;
        }

        .contact-gallery__item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.94);
        }

        .contact-field {
          display: grid;
          gap: 0.45rem;
        }

        .contact-field--full,
        .contact-checkbox,
        .contact-actions {
          grid-column: auto;
        }

        .contact-field span,
        .contact-checkbox span {
          font-size: 0.94rem;
          font-weight: 700;
          color: var(--color-blue-deep);
        }

        .contact-field input,
        .contact-field textarea {
          width: 100%;
          min-height: 3rem;
          padding: 0.9rem 1rem;
          border: 1px solid rgba(16, 58, 113, 0.12);
          border-radius: 0.95rem;
          background: white;
          color: var(--color-text);
          font: inherit;
          outline: none;
          resize: vertical;
          transition: border-color var(--transition), box-shadow var(--transition);
        }

        .contact-field input:focus,
        .contact-field textarea:focus {
          border-color: rgba(181, 214, 58, 0.88);
          box-shadow: 0 0 0 4px rgba(181, 214, 58, 0.12);
        }

        .contact-checkbox {
          display: inline-flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-top: 0.2rem;
        }

        .contact-checkbox input {
          width: 1.05rem;
          height: 1.05rem;
          accent-color: #b5d63a;
        }

        .contact-actions {
          display: flex;
          justify-content: flex-start;
        }

        @media (min-width: 481px) {
          .contact-socials {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 981px) {
          .contact-hero__content {
            padding: 7rem 0 5.5rem;
          }

          .contact-hero__copy p {
            font-size: 1.08rem;
            line-height: 1.9;
          }

          .contact-layout {
            grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
            gap: 1.3rem;
          }

          .contact-community {
            grid-template-columns: minmax(0, 1fr) auto;
            align-items: center;
            padding: 2rem;
          }

          .contact-community__chips {
            justify-content: flex-end;
            max-width: 26rem;
          }

          .contact-card,
          .contact-form-card {
            padding: 2rem;
          }

          .contact-form {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .contact-gallery {
            grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
            gap: 1.2rem;
          }

          .contact-gallery__item.is-featured {
            min-height: 30rem;
          }

          .contact-gallery__item img {
            object-fit: contain;
          }

          .contact-field--full,
          .contact-checkbox,
          .contact-actions {
            grid-column: span 2;
          }
        }

        @media (max-width: 640px) {
          .contact-actions .button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact