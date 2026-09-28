import { Fragment } from 'react'
import { t } from '../i18n'
import type { DetailRow, LegalPart, LegalSection } from '../i18n'
import { PageMeta } from './PageMeta'

type LegalPageProps = {
  title: string
  description: string
  updated: string
  details?: {
    heading: string
    rows: readonly DetailRow[]
  }
  sections: readonly LegalSection[]
}

function Paragraph({ parts }: { parts: readonly LegalPart[] }) {
  return (
    <p>
      {parts.map((part, index) =>
        typeof part === 'string' ? (
          <Fragment key={index}>{part}</Fragment>
        ) : (
          <span key={index} className="legal-placeholder">
            {part.placeholder}
          </span>
        ),
      )}
    </p>
  )
}

export function LegalPage({
  title,
  description,
  updated,
  details,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageMeta title={title} description={description} />
      <header className="legal-hero">
        <div className="container legal-hero__inner">
          <p className="eyebrow">{t('legal.heroLabel')}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <span>
            {t('legal.standLabel')} {updated}
          </span>
        </div>
      </header>
      <div className="container legal-layout">
        <aside className="legal-sidebar">
          <p>{t('legal.sidebar.label')}</p>
          <strong>{t('legal.sidebar.title')}</strong>
          <span>{t('legal.sidebar.text')}</span>
        </aside>
        <article className="legal-content">
          {details ? (
            <section>
              <h2>{details.heading}</h2>
              <div className="legal-details">
                {details.rows.map(([label, value]) => (
                  <div key={label}>
                    <strong>{label}</strong>
                    <span className="legal-placeholder">{value}</span>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph, index) => (
                <Paragraph key={index} parts={paragraph} />
              ))}
            </section>
          ))}
        </article>
      </div>
    </>
  )
}
