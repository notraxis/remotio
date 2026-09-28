import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { t } from '../i18n'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'

export default function Services() {
  const services = t('services.items')

  return (
    <>
      <PageMeta
        title={t('services.meta.title')}
        description={t('services.meta.description')}
      />
      <PageHero
        eyebrow={t('services.hero.eyebrow')}
        title={
          <>
            {t('services.hero.title')}{' '}
            <span>{t('services.hero.titleAccent')}</span>
          </>
        }
        description={t('services.hero.description')}
        aside={
          <div className="page-hero__marker" aria-hidden="true">
            <span>{t('services.hero.marker.number')}</span>
            <i />
            <span>{t('services.hero.marker.label')}</span>
          </div>
        }
      />

      <section className="section service-list-section">
        <div className="container service-list">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 45}>
              <article className="service-row">
                <div className="service-row__content">
                  <h2>{service.title}</h2>
                  <div>
                    <p>{service.description}</p>
                    <div className="tag-list">
                      {service.focus.map((focus) => (
                        <span key={focus}>{focus}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section closing-cta">
        <div className="container closing-cta__inner">
          <Reveal>
            <p className="eyebrow">{t('services.cta.eyebrow')}</p>
            <h2>{t('services.cta.title')}</h2>
            <p>{t('services.cta.text')}</p>
            <div className="button-row">
              <Link className="button button--primary" to="/termine">
                {t('common.termin')} <span aria-hidden="true">↗</span>
              </Link>
              <a className="text-link" href={site.contact.phoneHref}>
                {site.contact.phoneDisplay} <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
