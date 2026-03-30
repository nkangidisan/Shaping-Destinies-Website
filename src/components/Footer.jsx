import { Mail, MapPin, Phone } from 'lucide-react'

function FooterSocialIcon({ type }) {
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

  if (type === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.58A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.58 9.4.58 9.4.58s7.55 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </svg>
    )
  }

  if (type === 'tiktok') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.24V2h-3.12v13.17a2.67 2.67 0 1 1-2.67-2.67c.23 0 .45.03.67.08V9.4a5.79 5.79 0 1 0 5.12 5.77V8.54a7.9 7.9 0 0 0 4.57 1.45V6.86c-.27 0-.54-.06-.8-.17Z" />
      </svg>
    )
  }

  if (type === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.14 0C5.62 0 .31 5.3.31 11.83c0 2.08.54 4.11 1.56 5.89L0 24l6.46-1.69a11.8 11.8 0 0 0 5.68 1.45h.01c6.52 0 11.83-5.3 11.83-11.83 0-3.16-1.23-6.12-3.46-8.45Zm-8.38 18.3h-.01a9.84 9.84 0 0 1-5.01-1.37l-.36-.21-3.83 1 1.02-3.73-.24-.38a9.84 9.84 0 0 1-1.52-5.27c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.95 2.89a9.79 9.79 0 0 1 2.88 6.96c0 5.43-4.42 9.85-9.84 9.85Zm5.4-7.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.16-.17.2-.34.22-.64.08-.3-.15-1.25-.46-2.39-1.46-.89-.79-1.5-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.2-.23-.55-.47-.47-.66-.48h-.56c-.2 0-.51.07-.78.37s-1.02 1-.1 2.45c.92 1.46 1.31 1.97 2.82 3.27 1.52 1.31 2.91 1.71 3.94 1.91 1.03.2 1.97.17 2.71.1.83-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.4-.08-.12-.28-.2-.57-.35Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.52 19.36V14.5H6.1v-2.9h2.38V9.4c0-2.35 1.4-3.65 3.54-3.65 1.02 0 2.08.18 2.08.18v2.3h-1.17c-1.15 0-1.5.72-1.5 1.46v1.75h2.56l-.41 2.9h-2.15v6.86A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

const footerLinks = [
  { label: 'Team Leader', href: '/#benjamin' },
  { label: 'Our Ministries', href: '/#ministries' },
  { label: 'Ambassadors of Hope', href: '/#quick-links' },
  { label: 'Contact Us', href: '/contact' },
]

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src="/dist/wp-content/icon.png" alt="Wonder Christian Centre icon" />
          <h3>Wonder Christian Centre</h3>
          <p>
            A Christ-centered ministry committed to shaping destinies through the preaching of the
            Word of His Grace and Faith, and the ministry of miracles, signs and wonders.
          </p>
          <div className="site-footer__socials">
            <a href="https://www.facebook.com/wccug" aria-label="Facebook">
              <FooterSocialIcon type="facebook" />
            </a>
            <a href="https://www.tiktok.com/@wccug?_r=1&_t=ZS-956s5H5QE0z" aria-label="TikTok">
              <FooterSocialIcon type="tiktok" />
            </a>
            <a href="https://youtube.com/@wccug?si=P8YJjF2mwdE4fFoR" aria-label="YouTube">
              <FooterSocialIcon type="youtube" />
            </a>
            <a href="https://www.instagram.com/wcc" aria-label="Instagram">
              <FooterSocialIcon type="instagram" />
            </a>
            <a href="https://wa.me/256707000999" aria-label="WhatsApp">
              <FooterSocialIcon type="whatsapp" />
            </a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="site-footer__list">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Ministry Focus</h4>
          <ul className="site-footer__list">
            <li>Leadership Conferences</li>
            <li>Dreams of Hope</li>
            <li>Mass Evangelism Crusades</li>
            <li>Free Medical Camps</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="site-footer__contact">
            <li>
              <Phone size={17} />
              <span>+256 707 000 999</span>
            </li>
            <li>
              <Mail size={17} />
              <span>wonderchristiancentre@gmail.com</span>
            </li>
            <li>
              <MapPin size={17} />
              <span>Busega-Kibumbiro, Kampala, Uganda</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>&copy; {new Date().getFullYear()} Wonder Christian Centre. All rights reserved.</span>
        <span>Shaping destinies with grace, faith, and purpose.</span>
      </div>

      <style>{`
        .site-footer {
          position: relative;
          overflow: hidden;
          color: rgba(255, 255, 255, 0.88);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.18), transparent 28%),
            linear-gradient(135deg, #06162c 0%, #0b2141 50%, #102f5a 100%);
        }

        .site-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.12));
          pointer-events: none;
        }

        .site-footer__grid,
        .site-footer__bottom {
          position: relative;
          z-index: 1;
        }

        .site-footer__grid {
          display: grid;
          grid-template-columns: 1.35fr repeat(3, 1fr);
          gap: 2rem;
          padding: 5rem 0 2.5rem;
        }

        .site-footer__brand img {
          width: 4.25rem;
          height: 4.25rem;
          margin-bottom: 1rem;
          border-radius: 50%;
          background: white;
        }

        .site-footer h3,
        .site-footer h4 {
          margin: 0 0 1rem;
          font-family: 'Outfit', sans-serif;
          color: white;
        }

        .site-footer h3 {
          font-size: 1.45rem;
        }

        .site-footer h4 {
          font-size: 1.05rem;
        }

        .site-footer p,
        .site-footer li,
        .site-footer span,
        .site-footer a {
          font-size: 0.96rem;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.76);
        }

        .site-footer__socials {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .site-footer__socials a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.6rem;
          height: 2.6rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          transition: transform var(--transition), border-color var(--transition), background-color var(--transition);
        }

        .site-footer__socials svg {
          width: 1rem;
          height: 1rem;
          fill: currentColor;
        }

        .site-footer__socials a:hover {
          transform: translateY(-3px);
          border-color: rgba(181, 214, 58, 0.65);
          background: rgba(181, 214, 58, 0.15);
        }

        .site-footer__list,
        .site-footer__contact {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .site-footer__contact li {
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
        }

        .site-footer__contact svg {
          margin-top: 0.45rem;
          flex-shrink: 0;
          color: var(--color-lemon);
        }

        .site-footer__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.35rem 0 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .site-footer__bottom span {
          font-size: 0.84rem;
          letter-spacing: 0.02em;
        }

        @media (max-width: 1024px) {
          .site-footer__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .site-footer__grid {
            grid-template-columns: 1fr;
            padding-top: 4.25rem;
          }

          .site-footer__bottom {
            flex-direction: column;
            align-items: flex-start;
            padding-bottom: 1.6rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
