import { useMemo, useState } from 'react'
import { PageHero } from '../components/PageHero'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { ContactCta } from '../components/ContactCta'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { projects, projectTypeLabels, type ProjectType } from '../data/projects'
import { cn } from '../lib/cn'

const TYPES: (ProjectType | 'all')[] = ['all', 'civil', 'infrastructure', 'industrial', 'residential', 'fitout']

export function Projects() {
  const { t, lang } = useLanguage()
  useDocumentMeta(t('nav.projects'), t('sections.featuredTitle'))

  const [type, setType] = useState<ProjectType | 'all'>('all')

  const filtered = useMemo(
    () => projects.filter((p) => type === 'all' || p.type === type),
    [type],
  )

  return (
    <>
      <PageHero
        eyebrow={t('sections.featuredTag')}
        title={pick({ az: 'Seçilmiş Layihələr', ru: 'Избранные проекты', en: 'Selected Projects' }, lang)}
        description={pick(
          {
            az: '2009-cu ildən etibarən mühəndislik dəstəyi, infrastruktur, mülki tikinti, təmir-tamamlama üzrə icra etdiyimiz və iştirak etdiyimiz bəzi işlərdən qısa nümunələr.',
            ru: 'Краткие примеры работ, которые мы выполнили и в которых участвовали с 2009 года — инженерное сопровождение, инфраструктура, гражданское строительство, ремонт и отделка.',
            en: 'Brief examples of works we have carried out and taken part in since 2009 — engineering support, infrastructure, civil construction, repair and finishing.',
          },
          lang,
        )}
        image="/images/pagehero/projects.svg"
      />

      <section className="bg-slate-deep py-16 md:py-20">
        <div className="container-x">
          {/* Careful experience/participation note */}
          <p className="mb-8 max-w-3xl border-l-2 border-orange-brand/60 pl-4 text-sm italic leading-relaxed text-steel">
            {t('projects.participationNote')}
          </p>

          {/* Type filters */}
          <div className="mb-12 flex flex-wrap gap-2 border-b border-white/10 pb-8">
            {TYPES.map((ty) => (
              <button
                key={ty}
                type="button"
                onClick={() => setType(ty)}
                className={cn(
                  'border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors',
                  type === ty ? 'border-orange-brand bg-orange-brand text-white' : 'border-white/15 text-steel hover:border-orange-brand hover:text-orange-brand',
                )}
              >
                {ty === 'all' ? t('misc.allTypes') : pick(projectTypeLabels[ty], lang)}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <ProjectsGrid projects={filtered} />
          ) : (
            <p className="py-20 text-center font-mono text-sm text-steel">{t('search.noResults')}</p>
          )}
        </div>
      </section>

      <ContactCta />
    </>
  )
}
