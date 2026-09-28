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
          <p className="home-hero__intro">{t('home.hero.meaning')}</p>
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
              <h2>{t('home.areas.title')}</h2>
            </div>
          </div>
          <div className="jump-grid">
            {areas.map((area, index) => (
              <Reveal key={area.path} delay={index * 70}>
                <Link className="jump-card" to={area.path}>
                  <span className="jump-card__number">{area.index}</span>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <span className="jump-card__link">
                    {t('home.areas.link')} <span aria-hidden="true">→</span>
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
