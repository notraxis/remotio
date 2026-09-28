import { t } from '../i18n'
import { LegalPage } from '../components/LegalPage'

export default function Imprint() {
  return (
    <LegalPage
      title={t('legal.imprint.meta.title')}
      description={t('legal.imprint.meta.description')}
      updated={t('legal.imprint.updated')}
      details={{
        heading: t('legal.imprint.details.heading'),
        rows: t('legal.imprint.details.rows'),
      }}
      sections={t('legal.imprint.sections')}
    />
  )
}
