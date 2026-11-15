import { Fragment } from 'react'
import { t } from '../i18n'
import type { DetailRow, LegalPart, LegalSection } from '../i18n'
import { PageMeta } from './PageMeta'

type LegalSidebar = {
  label: string
  title: string
  text: string
}

type LegalPageProps = {
  title: string
  description: string
  updated: string
  sidebar?: LegalSidebar
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
  sidebar,
  details,
  sections,
}: LegalPageProps) {
  const sidebarContent = sidebar ?? {
    label: t('legal.sidebar.label'),
    title: t('legal.sidebar.title'),
    text: t('legal.sidebar.text'),
  }

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
          <p>{sidebarContent.label}</p>
          <strong>{sidebarContent.title}</strong>
          <span>{sidebarContent.text}</span>
        </aside>
        <article className="legal-content">
          {details ? (
            <section>
              <h2>{details.heading}</h2>
              <div className="legal-details">
                {details.rows.map(([label, value]) => (
                  <div key={label}>
                    <strong>{label}</strong>
                    <span className={value.startsWith('[') ? 'legal-placeholder' : undefined}>
                      {value}
                    </span>
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
