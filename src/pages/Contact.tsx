import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { t } from '../i18n'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'

export default function Contact() {
  return (
    <>
      <PageMeta
        title={t('contact.meta.title')}
        description={t('contact.meta.description')}
      />
      <PageHero
        eyebrow={t('contact.hero.eyebrow')}
        title={
          <>
            {t('contact.hero.title')}{' '}
            <span>{t('contact.hero.titleAccent')}</span>
          </>
        }
        description={t('contact.hero.description')}
        aside={
          <div className="page-hero__marker" aria-hidden="true">
            <span>{t('contact.hero.marker.number')}</span>
            <i />
            <span>{t('contact.hero.marker.label')}</span>
          </div>
        }
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <Reveal className="contact-card contact-card--primary">
            <p className="section-index">{t('contact.direct.index')}</p>
            <h2>{t('contact.direct.title')}</h2>
            <p>{t('contact.direct.text')}</p>
            <div className="contact-links">
              <a href={site.contact.phoneHref}>
                <span>{t('common.telefon')}</span>
                <strong>{site.contact.phoneDisplay}</strong>
                <i aria-hidden="true">↗</i>
              </a>
              <a href={`mailto:${site.contact.email}`}>
                <span>{t('common.email')}</span>
                <strong>{site.contact.email}</strong>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-card" delay={80}>
            <p className="section-index">{t('contact.address.index')}</p>
            <h2>{t('contact.address.title')}</h2>
            <address>
              {site.contact.street}
              <br />
              {site.contact.postalCode} {site.contact.city}
            </address>
            <div className="hours-list">
              {site.hours.map((item) => (
                <div key={item.days}>
                  <span>{item.days}</span>
                  <strong>{item.time}</strong>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section closing-cta closing-cta--compact">
        <div className="container closing-cta__inner">
          <Reveal>
            <p className="eyebrow">{t('contact.cta.eyebrow')}</p>
            <h2>{t('contact.cta.title')}</h2>
            <p>{t('contact.cta.text')}</p>
            <div className="button-row">
              <Link className="button button--primary" to="/termine">
                {t('common.termin')} <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" to="/leistungen">
                {t('common.leistungen')} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
