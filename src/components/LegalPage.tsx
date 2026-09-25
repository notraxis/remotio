import type { ReactNode } from 'react'
import { PageMeta } from './PageMeta'

type LegalPageProps = {
  title: string
  description: string
  updated: string
  children: ReactNode
}

export function LegalPage({ title, description, updated, children }: LegalPageProps) {
  return (
    <>
      <PageMeta title={title} description={description} />
      <header className="legal-hero">
        <div className="container legal-hero__inner">
          <p className="eyebrow">Rechtliches</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <span>Stand: {updated}</span>
        </div>
      </header>
      <div className="container legal-layout">
        <aside className="legal-sidebar">
          <p>Wichtiger Hinweis</p>
          <strong>Diese Seite ist eine Inhaltsvorlage.</strong>
          <span>
            Verantwortliche Angaben, Rechtstexte und Kontaktdaten müssen vor der
            Veröffentlichung ergänzt und geprüft werden.
          </span>
        </aside>
        <article className="legal-content">{children}</article>
      </div>
    </>
  )
}
