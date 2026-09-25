import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { navigation, site } from '../data/site'

function Brand() {
  return (
    <Link className="brand" to="/" aria-label={`${site.name} Startseite`}>
      <img
        src="/logo_transparent.png"
        width="2170"
        height="725"
        alt={`${site.name} Physiotherapie`}
      />
    </Link>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${menuOpen ? 'is-open' : ''}`}>
      <div className="container site-header__inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Schließen' : 'Menü'}</span>
          <span className="menu-toggle__icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
        <nav
          id="main-navigation"
          className="main-navigation"
          aria-label="Hauptnavigation"
        >
          <div className="main-navigation__links">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'nav-link is-active' : 'nav-link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <Link
            className="button button--primary main-navigation__cta"
            to="/termine"
            onClick={closeMenu}
          >
            Termin buchen
            <span aria-hidden="true">↗</span>
          </Link>
          <p className="main-navigation__meta">
            Persönlich. Klar. In Bewegung.
          </p>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <img
            className="site-footer__logo"
            src="/logo_transparent.png"
            width="2170"
            height="725"
            alt={site.name}
          />
          <p>{site.claim}</p>
        </div>
        <div className="site-footer__nav">
          <p className="site-footer__label">Entdecken</p>
          {navigation.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
          <Link to="/termine">Termin buchen</Link>
        </div>
        <div className="site-footer__contact">
          <p className="site-footer__label">Kontakt</p>
          <a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          <p>
            {site.contact.street}
            <br />
            {site.contact.postalCode} {site.contact.city}
          </p>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {year} {site.name}</p>
        <div>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </div>
        <a href="#main-content">Nach oben ↑</a>
      </div>
    </footer>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Zum Inhalt springen
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
