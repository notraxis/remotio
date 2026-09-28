import { site } from '../data/site'
import { t } from '../i18n'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'

export default function Appointments() {
  return (
    <>
      <PageMeta
        title={t('appointments.meta.title')}
        description={t('appointments.meta.description')}
      />
      <PageHero
        eyebrow={t('appointments.hero.eyebrow')}
        title={
          <>
            {t('appointments.hero.title')}{' '}
            <span>{t('appointments.hero.titleAccent')}</span>
          </>
        }
        description={t('appointments.hero.description')}
        aside={
          <div className="page-hero__marker" aria-hidden="true">
            <span>{t('appointments.hero.marker.number')}</span>
            <i />
            <span>{t('appointments.hero.marker.label')}</span>
          </div>
        }
      />

      <section className="section booking-section">
        <div className="container booking-layout">
          <Reveal className="booking-card">
            <span className="booking-card__status">
              {t('appointments.booking.status')}
            </span>
            <h2>{t('appointments.booking.title')}</h2>
            <p>{t('appointments.booking.text')}</p>
            {site.bookingUrl ? (
              <a
                className="button button--primary"
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t('appointments.booking.action')}
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="button button--disabled" aria-disabled="true">
                {t('appointments.booking.disabled')}
              </span>
            )}
            <p className="booking-card__privacy">
              {t('appointments.booking.privacy')}
            </p>
          </Reveal>

          <Reveal className="booking-alternative" delay={90}>
            <p className="section-index">{t('appointments.alternative.index')}</p>
            <h2>{t('appointments.alternative.title')}</h2>
            <p>{t('appointments.alternative.text')}</p>
            <a className="contact-tile" href={site.contact.phoneHref}>
              <span>{t('common.telefon')}</span>
              <strong>{site.contact.phoneDisplay}</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a className="contact-tile" href={`mailto:${site.contact.email}`}>
              <span>{t('common.email')}</span>
              <strong>{site.contact.email}</strong>
              <i aria-hidden="true">↗</i>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
