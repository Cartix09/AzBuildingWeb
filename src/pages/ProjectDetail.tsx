import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ZoomIn } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { ContactCta } from '../components/ContactCta'
import { Reveal } from '../components/Reveal'
import { Lightbox } from '../components/Lightbox'
import { NotFound } from './NotFound'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { getProject, relatedProjects, projectTypeLabels } from '../data/projects'

export function ProjectDetail() {
  const { slug } = useParams()
  const { t, lang } = useLanguage()
  const project = slug ? getProject(slug) : undefined
  const [activeImg, setActiveImg] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  useDocumentMeta(project ? pick(project.name, lang) : 'Project', project ? pick(project.short, lang) : undefined)

  if (!project) return <NotFound />

  // Full-size images shown in the big view and the lightbox (fall back to the
  // cover when a project has no separate gallery).
  const images = project.gallery.length ? project.gallery : [project.cover]
  const safeIdx = Math.min(activeImg, images.length - 1)
  const related = relatedProjects(project.slug, project.type)
  const meta = [
    { label: t('misc.period'), value: pick(project.period, lang) },
    { label: t('misc.location'), value: pick(project.location, lang) },
    { label: t('misc.type'), value: pick(projectTypeLabels[project.type], lang) },
    { label: t('misc.partner'), value: pick(project.partner, lang) },
    { label: t('misc.role'), value: pick(project.role, lang) },
    { label: t('misc.activity'), value: pick(project.activity, lang) },
  ]

  return (
    <>
      {/* Hero image */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden border-b border-white/10 bg-slate-deep">
        <img src={images[safeIdx] ?? project.cover} alt={pick(project.name, lang)} className="absolute inset-0 h-full w-full object-cover" />
        {/* Click the image area to open the full-size lightbox. Sits above the
            image but below the caption content, so the back link / title stay
            clickable. */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label={t('cta.viewLarger')}
          className="absolute inset-0 z-[5] cursor-zoom-in"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-deep via-slate-deep/50 to-slate-deep/30" />
        {/* Visible "view larger" affordance */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="group absolute right-4 top-4 z-20 flex items-center gap-2 border border-white/20 bg-navy-deep/50 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-[#F8FAFC] backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-navy-deep/70 sm:right-6 sm:top-6"
        >
          <ZoomIn className="h-4 w-4" />
          <span className="hidden sm:inline">{t('cta.viewLarger')}</span>
        </button>
        <div className="container-x pointer-events-none relative z-10 flex h-full flex-col justify-end pb-12">
          <Link to="/projects" className="pointer-events-auto mb-6 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-steel transition-colors hover:text-orange-brand">
            <ArrowLeft className="h-4 w-4" /> {t('cta.backToPortfolio')}
          </Link>
          <span className="bg-orange-brand px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white w-fit">
            {pick(projectTypeLabels[project.type], lang)}
          </span>
          <h1 className="display mt-4 max-w-4xl text-4xl leading-tight text-base sm:text-5xl md:text-6xl">{pick(project.name, lang)}</h1>
        </div>
      </section>

      {/* Meta + description */}
      <section className="border-b border-white/5 bg-slate-deep py-16 md:py-24">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-steel">{pick(project.description, lang)}</p>

            {/* Careful "experience / participation" note */}
            <p className="mt-8 border-l-2 border-orange-brand/60 pl-4 text-sm italic leading-relaxed text-steel">
              {t('projects.participationNote')}
            </p>

            {project.confidential && (
              <p className="mt-4 border-l-2 border-white/20 pl-4 text-sm leading-relaxed text-steel">
                {t('projects.confidentialNote')}
              </p>
            )}
          </div>

          {/* Meta sidebar */}
          <aside className="lg:col-span-5">
            <div className="border border-white/10 bg-slate-surface/30 p-8">
              <dl className="space-y-5">
                {meta.map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col gap-1.5 border-b border-white/10 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
                  >
                    <dt className="font-mono text-xs uppercase tracking-widest text-steel sm:shrink-0 sm:pt-0.5">{m.label}</dt>
                    <dd className="font-display text-[0.95rem] font-bold leading-snug text-[#F8FAFC] [overflow-wrap:anywhere] sm:max-w-[62%] sm:text-right sm:text-base">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="border-b border-white/5 bg-slate-deep py-16 md:py-24">
          <div className="container-x">
            <h2 className="eyebrow mb-8">GALLERY</h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {project.gallery.map((img, i) => (
                <Reveal as="div" key={i} index={i % 3}>
                  <button
                    type="button"
                    onClick={() => setActiveImg(i)}
                    className={`group block aspect-[4/3] w-full overflow-hidden border ${i === activeImg ? 'border-orange-brand' : 'border-white/10'}`}
                  >
                    <img src={img} alt={`${pick(project.name, lang)} - ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-slate-deep py-24 md:py-32">
          <div className="container-x">
            <SectionHeading index="[03]" eyebrow={t('sections.featuredTag')} title={t('misc.relatedProjects')} className="mb-14" />
            <ProjectsGrid projects={related} />
          </div>
        </section>
      )}

      <ContactCta />

      <Lightbox
        images={images}
        index={safeIdx}
        open={lightboxOpen}
        alt={pick(project.name, lang)}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setActiveImg}
      />
    </>
  )
}
