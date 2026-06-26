import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { mainNav } from '../data/nav'

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

interface Result {
  group: string
  label: string
  sub?: string
  to: string
}

/** Frontend-only search across services, projects and pages. */
export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const { lang, t } = useLanguage()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setQuery('')
      // focus after the enter animation tick
      const id = setTimeout(() => inputRef.current?.focus(), 50)
      return () => clearTimeout(id)
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const results = useMemo<Result[]>(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    const out: Result[] = []
    for (const s of services) {
      if (pick(s.title, lang).toLowerCase().includes(q) || pick(s.summary, lang).toLowerCase().includes(q)) {
        out.push({ group: t('search.services'), label: pick(s.title, lang), sub: pick(s.summary, lang), to: `/services/${s.slug}` })
      }
    }
    for (const p of projects) {
      if (
        pick(p.name, lang).toLowerCase().includes(q) ||
        pick(p.location, lang).toLowerCase().includes(q) ||
        pick(p.scopeTag, lang).toLowerCase().includes(q)
      ) {
        out.push({ group: t('search.projects'), label: pick(p.name, lang), sub: `${p.year} · ${pick(p.location, lang)}`, to: `/projects/${p.slug}` })
      }
    }
    for (const n of mainNav) {
      if (t(n.labelKey).toLowerCase().includes(q)) {
        out.push({ group: t('search.pages'), label: t(n.labelKey), to: n.to })
      }
    }
    return out
  }, [query, lang, t])

  const go = (to: string) => {
    onClose()
    navigate(to)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-slate-deep/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div className="container-x pt-24">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-steel transition-colors hover:text-orange-brand"
              >
                <X className="h-5 w-5" /> ESC
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4 border-b border-steel/30 pb-4">
              <Search className="h-7 w-7 text-orange-brand" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('search.placeholder')}
                className="w-full bg-transparent font-display text-2xl text-base placeholder:text-steel/60 focus:outline-none md:text-4xl"
                aria-label={t('search.placeholder')}
              />
            </div>

            <div className="mt-8 max-h-[60vh] overflow-y-auto">
              {!query && <p className="font-mono text-sm text-steel">{t('search.hint')}</p>}
              {query && results.length === 0 && (
                <p className="font-mono text-sm text-steel">{t('search.noResults')}</p>
              )}
              <ul className="divide-y divide-white/5">
                {results.map((r, i) => (
                  <li key={`${r.to}-${i}`}>
                    <button
                      type="button"
                      onClick={() => go(r.to)}
                      className="group flex w-full items-center justify-between gap-4 py-4 text-left"
                    >
                      <span>
                        <span className="block font-mono text-[10px] uppercase tracking-widest text-orange-brand">{r.group}</span>
                        <span className="mt-1 block font-display text-lg text-base">{r.label}</span>
                        {r.sub && <span className="mt-0.5 block text-sm text-steel">{r.sub}</span>}
                      </span>
                      <ArrowRight className="h-5 w-5 shrink-0 text-steel transition-all group-hover:translate-x-1 group-hover:text-orange-brand" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
