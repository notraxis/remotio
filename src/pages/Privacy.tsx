import { t } from '../i18n'
import { LegalPage } from '../components/LegalPage'

export default function Privacy() {
  return (
    <LegalPage
      title={t('legal.privacy.meta.title')}
      description={t('legal.privacy.meta.description')}
      updated={t('legal.privacy.updated')}
      sections={t('legal.privacy.sections')}
    />
  )
}
