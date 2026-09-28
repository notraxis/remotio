import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { t } from '../i18n'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'

export default function Home() {
  const areas = t('home.areas.items')

  return (
    <>
      <PageMeta
        title={t('home.meta.title')}
        description={t('home.meta.description')}
      />
      <section className="home-hero">
        <div className="container home-hero__inner">
          <p className="eyebrow">{t('home.hero.eyebrow')}</p>
          <h1>
            {t('home.hero.title')}
            <span>{t('home.hero.titleAccent')}</span>
          </h1>
          <p className="home-hero__name">
            <span className="home-hero__wordmark">
              <span className="home-hero__wordmark-accent">
                {t('home.hero.meaning.nameAccent')}
              </span>
              {t('home.hero.meaning.name')}
            </span>
            <span className="home-hero__definition">
              {t('home.hero.meaning.definition')}
            </span>
          </p>
          <p className="home-hero__goal">{t('home.hero.goal')}</p>
          <div className="button-row">
            <Link className="button button--primary" to="/termine">
              {t('common.termin')} <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <ul className="home-hero__facts">
            {t('home.hero.facts').map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-index">{t('home.areas.index')}</p>
            </div>
          </div>
          <div className="jump-list">
            {areas.map((area, index) => (
              <Reveal key={area.path} delay={index * 70}>
                <Link className="jump-row" to={area.path}>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <span className="jump-row__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section closing-cta">
        <div className="container closing-cta__inner">
          <Reveal>
            <p className="eyebrow">{t('home.cta.eyebrow')}</p>
            <h2>{t('home.cta.title')}</h2>
            <p>{t('home.cta.text')}</p>
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
