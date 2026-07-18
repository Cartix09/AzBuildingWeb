import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useDocumentMeta } from '../lib/useDocumentMeta'

export function NotFound() {
  const { t } = useLanguage()
  useDocumentMeta('404')
  return (
    <section className="flex min-h-[60vh] items-center bg-slate-deep py-24">
      <div className="container-x text-center">
        <p className="font-display text-7xl font-extrabold text-orange-brand md:text-9xl">404</p>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-steel">Page not found</p>
        <Link to="/" className="group btn-ghost mx-auto mt-10 w-fit">
          <ArrowLeft className="h-4 w-4" />
          {t('nav.home')}
        </Link>
      </div>
    </section>
  )
}
