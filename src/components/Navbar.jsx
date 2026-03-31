import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'

function HeaderSocialIcon({ type }) {
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

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.58A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.58 9.4.58 9.4.58s7.55 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  )
}

const navItems = [
  { label: 'Home', href: '/' },
  {
    href: '/about',
    label: 'About',
    children: [
      { label: 'Team leader', href: '/team-leader' },
      { label: 'Mission', href: '/about#mission' },
      { label: 'The amazing journey of wcc', href: '/amazing-journey' },
      { label: 'Statement of faith', href: '/about' },
    ],
  },
  {
    label: 'Ambassadors of Hope',
    href: '/outreach',
    children: [
      { label: 'Mass evangelism', href: '/outreach/mass-evangelism' },
      { label: 'School and university outreach', href: '/outreach/school-and-university' },
      { label: 'Free medical outreach', href: '/outreach/free-medical-outreach' },
      { label: 'Food distribution', href: '/outreach/food-distribution' },
    ],
  },
  {
    label: 'Partership',
    href: '/donate',
    children: [
      { label: 'Why partnering', href: '/donate' },
      { label: 'Whats happening', href: '/#ministries' },
    ],
  },
  { label: 'Women of Destiny', href: '/women-of-destiny' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'Give', href: '/give', emphasis: true },
]

function NavAnchor({ href, children, className, onClick }) {
  if (href.includes('#')) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28)

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
    setOpenMobileMenu(null)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsOpen(false)
        setOpenMobileMenu(null)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setOpenMobileMenu(null)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const toggleMobileBranch = (label) => {
    setOpenMobileMenu((current) => (current === label ? null : label))
  }

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-topbar">
        <div className="container header-topbar__inner">
          <div className="header-topbar__info">
            <a href="tel:+256707000999">
              <Phone size={14} />
              <span>+256 707 000 999</span>
            </a>
            <a href="mailto:wonderchristiancentre@gmail.com">
              <Mail size={14} />
              <span>wonderchristiancentre@gmail.com</span>
            </a>
          </div>
          <div className="header-topbar__socials">
            <a href="https://www.facebook.com/wccug" aria-label="Facebook" target="_blank" rel="noreferrer">
              <HeaderSocialIcon type="facebook" />
            </a>
            <a href="https://www.instagram.com/wccug" aria-label="Instagram" target="_blank" rel="noreferrer">
              <HeaderSocialIcon type="instagram" />
            </a>
            <a href="https://youtube.com/@wccug?si=P8YJjF2mwdE4fFoR" aria-label="YouTube" target="_blank" rel="noreferrer">
              <HeaderSocialIcon type="youtube" />
            </a>
          </div>
        </div>
      </div>

      <div className="header-nav-shell">
        <div className="container header-nav">
          <Link to="/" className="header-brand" aria-label="Wonder Christian Centre home">
            <img
src="/2024/08/icon.png"
              alt="Wonder Christian Centre icon"
              width="48"
              height="48"
              decoding="async"
            />
            <div>
              <strong>Wonder Christian Centre</strong>
              <span>Shaping Destinies</span>
            </div>
          </Link>

          <nav className="header-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <div key={item.label} className={`header-item ${item.children ? 'has-dropdown' : ''}`}>
                {item.children ? (
                  <>
                    <div className="header-link-group">
                      <NavAnchor href={item.href || '#'} className={`header-link ${item.emphasis ? 'header-link--give' : ''}`}>
                        {item.label}
                      </NavAnchor>
                      <button type="button" className="header-link header-link--button" aria-label={`${item.label} menu`}>
                        <ChevronDown size={16} />
                      </button>
                    </div>
                    <div className="header-dropdown">
                      {item.children.map((child) => (
                        <NavAnchor key={child.label} href={child.href} className="header-dropdown__link">
                          {child.label}
                        </NavAnchor>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavAnchor href={item.href} className={`header-link ${item.emphasis ? 'header-link--give' : ''}`}>
                    {item.label}
                  </NavAnchor>
                )}
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="header-menu-toggle"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-panel"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-navigation-panel"
        className={`mobile-panel ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      >
        <div className="mobile-panel__card" onClick={(event) => event.stopPropagation()}>
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="mobile-branch">
                <div className="mobile-panel__row">
                  <NavAnchor
                    href={item.href || '#'}
                    className="mobile-panel__link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavAnchor>
                  <button
                    type="button"
                    className="mobile-panel__toggle-button"
                    onClick={() => toggleMobileBranch(item.label)}
                    aria-label={`${item.label} submenu`}
                    aria-expanded={openMobileMenu === item.label}
                  >
                    <ChevronDown size={18} className={openMobileMenu === item.label ? 'is-rotated' : ''} />
                  </button>
                </div>
                <div className={`mobile-panel__submenu ${openMobileMenu === item.label ? 'is-open' : ''}`}>
                  {item.children.map((child) => (
                    <NavAnchor
                      key={child.label}
                      href={child.href}
                      className="mobile-panel__sublink"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </NavAnchor>
                  ))}
                </div>
              </div>
            ) : (
              <NavAnchor
                key={item.label}
                href={item.href}
                className={`mobile-panel__link ${item.emphasis ? 'mobile-panel__link--give' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavAnchor>
            ),
          )}
        </div>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 40;
          padding-top: var(--safe-top);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .site-header.is-scrolled .header-nav-shell {
          box-shadow: 0 18px 35px rgba(8, 29, 57, 0.12);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(14px);
        }

        .header-topbar {
          background: linear-gradient(135deg, var(--color-blue-deep), var(--color-blue));
          color: rgba(255, 255, 255, 0.92);
        }

        .header-topbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          min-height: 3rem;
          padding-block: 0.35rem;
        }

        .header-topbar__info,
        .header-topbar__socials {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .header-topbar a {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          min-height: 2.75rem;
          font-size: 0.82rem;
          font-weight: 700;
        }

        .header-topbar__socials a {
          justify-content: center;
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.08);
          transition: transform var(--transition), background-color var(--transition), border-color var(--transition);
        }

        .header-topbar__socials a:hover {
          transform: translateY(-2px);
          border-color: rgba(181, 214, 58, 0.7);
          background: rgba(181, 214, 58, 0.18);
        }

        .header-topbar__socials svg {
          width: 0.95rem;
          height: 0.95rem;
          fill: currentColor;
        }

        .header-nav-shell {
          background: rgba(255, 255, 255, 0.9);
          border-bottom: 1px solid rgba(16, 58, 113, 0.08);
          transition: background-color var(--transition), box-shadow var(--transition);
        }

        .header-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          min-height: 4.75rem;
        }

        .header-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          min-width: 0;
          flex: 1 1 auto;
        }

        .header-brand img {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 10px 30px rgba(16, 58, 113, 0.15);
          background: white;
        }

        .header-brand strong,
        .header-brand span {
          display: block;
        }

        .header-brand strong {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          line-height: 1.05;
          color: var(--color-blue-deep);
        }

        .header-brand span {
          margin-top: 0.22rem;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-lemon);
        }

        .header-links {
          display: flex;
          align-items: center;
          gap: 1.15rem;
        }

        .header-item {
          position: relative;
          padding-bottom: 1.15rem;
          margin-bottom: -1.15rem;
        }

        .header-link-group {
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
        }

        .header-link,
        .header-link--button {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0;
          border: 0;
          background: transparent;
          font-size: 0.92rem;
          font-weight: 800;
          color: var(--color-blue-ink);
          transition: color var(--transition);
        }

        .header-link--button {
          width: 1.4rem;
          justify-content: center;
        }

        .header-link::after,
        .header-link--button::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -0.45rem;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transform-origin: left;
          background: linear-gradient(90deg, var(--color-lemon), transparent);
          transition: transform var(--transition);
        }

        .header-link:hover,
        .header-link--button:hover,
        .header-item:hover .header-link,
        .header-item:hover .header-link--button {
          color: var(--color-blue);
        }

        .header-link:hover::after,
        .header-link--button:hover::after,
        .header-item:hover .header-link::after,
        .header-item:hover .header-link--button::after {
          transform: scaleX(1);
        }

        .header-link--give {
          padding: 0.72rem 1.1rem;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--color-lemon), #d6ea64);
          color: var(--color-blue-deep);
          box-shadow: 0 16px 36px rgba(181, 214, 58, 0.2);
        }

        .header-link--give::after {
          display: none;
        }

        .header-dropdown {
          position: absolute;
          top: calc(100% + 0.2rem);
          left: 0;
          min-width: 16rem;
          padding: 0.7rem;
          border-radius: 1.25rem;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(16, 58, 113, 0.08);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.14);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(8px);
          transition: opacity var(--transition), transform var(--transition), visibility var(--transition);
        }

        .header-dropdown::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: -0.85rem;
          height: 0.85rem;
        }

        .header-item:hover .header-dropdown,
        .header-item:focus-within .header-dropdown {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
        }

        .header-dropdown__link {
          display: block;
          padding: 0.8rem 0.9rem;
          border-radius: 0.9rem;
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--color-blue-deep);
          transition: background-color var(--transition), color var(--transition);
        }

        .header-dropdown__link:hover {
          background: rgba(16, 58, 113, 0.06);
          color: var(--color-blue);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .header-menu-toggle {
          display: none;
          width: 3rem;
          height: 3rem;
          border: 1px solid rgba(16, 58, 113, 0.12);
          border-radius: 999px;
          background: white;
          color: var(--color-blue-deep);
        }

        .mobile-panel {
          position: fixed;
          inset: 0;
          z-index: 39;
          display: none;
          align-items: flex-start;
          justify-content: center;
          padding: calc(4.9rem + var(--safe-top)) calc(0.75rem + var(--safe-right)) calc(1rem + var(--safe-bottom)) calc(0.75rem + var(--safe-left));
          background: rgba(8, 29, 57, 0.32);
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition);
        }

        .mobile-panel.is-open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-panel__card {
          width: min(100%, 28rem);
          padding: 1.25rem;
          border-radius: 1.75rem;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-strong);
          display: grid;
          gap: 0.5rem;
          transform: translateY(-10px);
          transition: transform var(--transition);
        }

        .mobile-panel.is-open .mobile-panel__card {
          transform: translateY(0);
        }

        .mobile-panel__link {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          min-height: 3rem;
          padding: 1rem 0.9rem;
          border: 0;
          border-radius: 1rem;
          background: transparent;
          font-weight: 800;
          color: var(--color-blue-deep);
          text-align: left;
        }

        .mobile-panel__link:hover,
        .mobile-panel__toggle:hover,
        .mobile-panel__sublink:hover {
          background: rgba(16, 58, 113, 0.05);
        }

        .mobile-panel__link--give {
          background: linear-gradient(135deg, var(--color-lemon), #d6ea64);
          color: var(--color-blue-deep);
        }

        .mobile-panel__row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 0.35rem;
          align-items: center;
        }

        .mobile-panel__toggle-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border: 0;
          border-radius: 1rem;
          background: transparent;
          color: var(--color-blue-deep);
        }

        .mobile-panel__submenu {
          display: grid;
          gap: 0.2rem;
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition);
        }

        .mobile-panel__submenu.is-open {
          max-height: 20rem;
        }

        .mobile-panel__sublink {
          display: block;
          padding: 0.8rem 1rem 0.8rem 1.8rem;
          border-radius: 0.9rem;
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--color-blue);
        }

        .is-rotated {
          transform: rotate(180deg);
          transition: transform var(--transition);
        }

        @media (max-width: 1100px) {
          .header-links {
            gap: 0.9rem;
          }

          .header-link,
          .header-link--button {
            font-size: 0.86rem;
          }
        }

        @media (max-width: 960px) {
          .header-topbar {
            display: none;
          }

          .header-links {
            display: none;
          }

          .header-nav {
            min-height: 4.4rem;
          }

          .header-menu-toggle,
          .mobile-panel {
            display: flex;
          }
        }

        @media (max-width: 720px) {
          .header-brand strong {
            font-size: 0.92rem;
          }

          .header-brand span {
            font-size: 0.72rem;
            letter-spacing: 0.14em;
          }
        }

        @media (max-width: 480px) {
          .header-nav {
            min-height: 4.4rem;
            gap: 0.75rem;
          }

          .header-brand {
            gap: 0.7rem;
            align-items: center;
          }

          .header-brand img {
            width: 2.7rem;
            height: 2.7rem;
          }

          .header-brand strong {
            font-size: 0.86rem;
          }

          .header-brand span {
            font-size: 0.68rem;
          }

          .mobile-panel__card {
            padding: 1rem;
            border-radius: 1.4rem;
          }
        }
      `}</style>
    </header>
  )
}

export default Navbar
