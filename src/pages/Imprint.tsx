import { t } from '../i18n'
import { LegalPage } from '../components/LegalPage'

export default function Imprint() {
  return (
    <LegalPage
      title={t('legal.imprint.meta.title')}
      description={t('legal.imprint.meta.description')}
      updated={t('legal.imprint.updated')}
      sidebar={{
        label: t('legal.imprint.sidebar.label'),
        title: t('legal.imprint.sidebar.title'),
        text: t('legal.imprint.sidebar.text'),
      }}
      details={{
        heading: t('legal.imprint.details.heading'),
        rows: t('legal.imprint.details.rows'),
      }}
      sections={t('legal.imprint.sections')}
    />
  )
}
