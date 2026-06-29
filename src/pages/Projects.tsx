import { useMemo, useState } from 'react'
import { PageHero } from '../components/PageHero'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { ContactCta } from '../components/ContactCta'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { projects, projectTypeLabels, type ProjectType } from '../data/projects'
import { cn } from '../lib/cn'

const TYPES: (ProjectType | 'all')[] = ['all', 'residential', 'infrastructure', 'fitout', 'private', 'siteworks', 'engineering']

export function Projects() {
  const { t, lang } = useLanguage()
  useDocumentMeta(t('nav.projects'), t('sections.featuredTitle'))

  const [type, setType] = useState<ProjectType | 'all'>('all')
  const [year, setYear] = useState<number | 'all'>('all')

  const years = useMemo(() => Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a), [])

  const filtered = useMemo(
    () =>
      projects.filter((p) => (type === 'all' || p.type === type) && (year === 'all' || p.year === year)),
    [type, year],
  )

  return (
    <>
      <PageHero
        eyebrow={t('sections.featuredTag')}
        title={pick({ az: 'Seçilmiş Layihələr', ru: 'Избранные проекты', en: 'Selected Projects' }, lang)}
        description={pick(
          {
            az: 'Tikinti, fit-out, infrastruktur və mühəndislik dəstəyi üzrə işlərimizdən nümunələr. Bəzi layihələr məxfidir və sifarişçinin razılığı ilə paylaşılır.',
            ru: 'Примеры наших работ по строительству, fit-out, инфраструктуре и инженерной поддержке. Некоторые проекты конфиденциальны и публикуются с согласия заказчика.',
            en: 'Representative examples of our work across construction, fit-out, infrastructure and engineering support. Some projects are confidential and shown with client permission.',
          },
          lang,
        )}
        image="/images/projects/project-02.svg"
      />

      <section className="bg-slate-deep py-16 md:py-20">
        <div className="container-x">
          {/* Filters */}
          <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
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

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-steel">{t('misc.year')}</span>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="border border-white/15 bg-slate-deep px-4 py-2 font-mono text-xs uppercase tracking-widest text-base focus:border-orange-brand focus:outline-none"
              >
                <option value="all">{t('misc.allYears')}</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
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
