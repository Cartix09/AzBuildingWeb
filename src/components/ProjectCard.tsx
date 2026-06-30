import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { projectTypeLabels, type Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  const { t, lang } = useLanguage()
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative flex h-full flex-col border border-white/10 bg-slate-surface/30 transition-colors hover:border-orange-brand/50"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.cover}
          alt={pick(project.name, lang)}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />
        <span className="absolute left-0 top-4 bg-orange-brand px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
          {pick(projectTypeLabels[project.type], lang)}
        </span>
        <span className="absolute right-4 top-4 font-mono text-xs text-base/80">{project.year}</span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-steel">
          {pick(project.location, lang)}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold leading-tight text-base">{pick(project.name, lang)}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{pick(project.short, lang)}</p>
        {/* AZBUILDING role — important for an engineering/office company */}
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-steel">
          <span className="text-orange-brand">{t('misc.role')}: </span>
          {pick(project.role, lang)}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-steel">{pick(project.scopeTag, lang)}</span>
          <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-orange-brand">
            {t('cta.viewProject')}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
