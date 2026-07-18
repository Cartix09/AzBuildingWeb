import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { getIcon } from './icons'
import type { Service } from '../data/services'

export function ServiceCard({ service }: { service: Service }) {
  const { lang } = useLanguage()
  const Icon = getIcon(service.icon)
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative flex h-full flex-col border border-white/10 bg-slate-surface/40 p-7 transition-colors hover:bg-slate-surface/70"
    >
      {/* Orange left accent on hover */}
      <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-orange-brand transition-transform duration-300 group-hover:scale-y-100" />
      <Icon className="h-8 w-8 text-steel transition-colors group-hover:text-orange-brand" strokeWidth={1.5} />
      <h3 className="mt-6 font-display text-xl font-bold text-base">{pick(service.title, lang)}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{pick(service.summary, lang)}</p>
      <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-orange-brand">
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
