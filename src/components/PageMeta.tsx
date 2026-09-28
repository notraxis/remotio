import { useEffect } from 'react'
import { site } from '../data/site'
import { t } from '../i18n'

type PageMetaProps = {
  title: string
  description?: string
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

export function PageMeta({
  title,
  description = t('meta.fallbackDescription'),
}: PageMetaProps) {
  useEffect(() => {
    const pageTitle = t('meta.titlePattern', { page: title, name: site.name })
    document.title = pageTitle
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', pageTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('name', 'twitter:card', 'summary_large_image')
  }, [description, title])

  return null
}
