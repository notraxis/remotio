import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { t } from '../i18n'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'

export default function Practice() {
  const team = t('team.members')

  return (
    <>
      <PageMeta
        title={t('practice.meta.title')}
        description={t('practice.meta.description')}
      />
      <PageHero
        eyebrow={t('practice.hero.eyebrow')}
        title={
          <>
            {t('practice.hero.title')}{' '}
            <span>{t('practice.hero.titleAccent')}</span>
          </>
        }
        description={t('practice.hero.description')}
        aside={
          <div className="page-hero__marker" aria-hidden="true">
            <span>{t('practice.hero.marker.number')}</span>
            <i />
            <span>{t('practice.hero.marker.label')}</span>
          </div>
        }
      />

      <section className="section">
        <div className="container practice-story">
          <Reveal className="practice-story__media">
            <MediaPlaceholder
              label={t('media.practice.label')}
              caption={t('media.practice.caption')}
              variant="practice"
            />
          </Reveal>
          <div className="practice-story__text">
            <Reveal>
              <p className="section-index">{t('practice.story.index')}</p>
            </Reveal>
            <Reveal delay={70}>
              <h2>{t('practice.story.title')}</h2>
              <p className="lead">{t('practice.story.goal')}</p>
              <p>{t('practice.story.audience')}</p>
              <p>{t('practice.story.method')}</p>
            </Reveal>
            <Reveal delay={120}>
              <ul
                className="chip-list"
                aria-label={t('practice.story.chipsLabel')}
              >
                {t('practice.story.audiences').map((audience) => (
                  <li key={audience}>{audience}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={160}>
              <p className="statement">{t('practice.story.statement')}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-index">{t('practice.team.index')}</p>
              <h2>{t('practice.team.title')}</h2>
            </div>
            <p>{t('practice.team.intro')}</p>
          </div>
          <div className="team-grid">
            {team.map((person, index) => (
              <Reveal key={person.name} delay={index * 80}>
                <article className="team-card">
                  <MediaPlaceholder
                    label={t('media.team.label', { number: index + 1 })}
                    variant="team"
                  />
                  <div className="team-card__info">
                    <p>{person.role}</p>
                    <h3>{person.name}</h3>
                    <span>{person.focus}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section closing-cta">
        <div className="container closing-cta__inner">
          <Reveal>
            <p className="eyebrow">{t('practice.cta.eyebrow')}</p>
            <h2>{t('practice.cta.title')}</h2>
            <p>{t('practice.cta.text')}</p>
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
