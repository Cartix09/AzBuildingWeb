import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: string
  description?: string
  image?: string
  children?: ReactNode
}

/** Reusable inner-page header band with dark overlay and blueprint grid. */
export function PageHero({ eyebrow, title, description, image, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-deep">
      {image && (
        <>
          <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-deep via-slate-deep/80 to-slate-deep/60" />
        </>
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-blueprint-grid bg-[size:40px_40px] opacity-30" />
      <div className="container-x relative z-10 py-20 md:py-28">
        <p className="eyebrow">
          <span className="text-orange-brand">+ </span>
          {eyebrow}
        </p>
        <h1 className="display mt-4 max-w-4xl text-4xl leading-[1.02] text-base sm:text-5xl md:text-6xl">{title}</h1>
        {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">{description}</p>}
        {children}
      </div>
    </section>
  )
}
