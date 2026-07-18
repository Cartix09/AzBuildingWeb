import { useParams, Link } from 'react-router-dom'
import { Check, ArrowUpRight } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { ContactCta } from '../components/ContactCta'
import { Reveal } from '../components/Reveal'
import { NotFound } from './NotFound'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { getService, services } from '../data/services'
import { projects } from '../data/projects'
import { getIcon } from '../components/icons'

export function ServiceDetail() {
  const { slug } = useParams()
  const { t, lang } = useLanguage()
  const service = slug ? getService(slug) : undefined
  useDocumentMeta(service ? pick(service.title, lang) : 'Service', service ? pick(service.summary, lang) : undefined)

  if (!service) return <NotFound />

  const Icon = getIcon(service.icon)
  // Simple related-projects heuristic: a couple of recent projects.
  const related = projects.slice(0, 3)
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4)

  return (
    <>
      <PageHero eyebrow={t('nav.services')} title={pick(service.title, lang)} description={pick(service.description, lang)} image={service.image}>
        <div className="mt-8">
          <Icon className="h-10 w-10 text-orange-brand" strokeWidth={1.5} />
        </div>
      </PageHero>

      {/* Scope of work */}
      <section className="border-b border-white/5 bg-slate-deep py-24 md:py-32">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading index="[01]" eyebrow="SCOPE" title={t('misc.scopeOfWork')} />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {pick(service.scope, lang).map((item, i) => (
                <Reveal as="li" key={i} index={i % 2} className="flex items-start gap-3 bg-slate-deep p-6">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange-brand" />
                  <span className="text-base">{item}</span>
                </Reveal>
              ))}
            </ul>

            {/* Other services */}
            <div className="mt-10 flex flex-wrap gap-3">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-steel transition-colors hover:border-orange-brand hover:text-orange-brand"
                >
                  {pick(s.title, lang)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="bg-slate-deep py-24 md:py-32">
        <div className="container-x">
          <div className="mb-14 flex items-end justify-between gap-6">
            <SectionHeading index="[02]" eyebrow={t('sections.featuredTag')} title={t('misc.relatedProjects')} />
            <Link to="/projects" className="group btn-ghost hidden shrink-0 sm:inline-flex">
              {t('cta.viewPortfolio')}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <ProjectsGrid projects={related} />
        </div>
      </section>

      <ContactCta />
    </>
  )
}
