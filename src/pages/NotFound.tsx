import { Link } from 'react-router-dom'
import { t } from '../i18n'
import { PageMeta } from '../components/PageMeta'

export default function NotFound() {
  return (
    <>
      <PageMeta
        title={t('notFound.meta.title')}
        description={t('notFound.meta.description')}
      />
      <section className="not-found">
        <div className="container not-found__inner">
          <p className="eyebrow">{t('notFound.eyebrow')}</p>
          <span aria-hidden="true">404</span>
          <h1>{t('notFound.title')}</h1>
          <p>{t('notFound.text')}</p>
          <div className="button-row">
            <Link className="button button--primary" to="/">
              {t('notFound.home')} <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" to="/kontakt">
              {t('notFound.contact')} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
