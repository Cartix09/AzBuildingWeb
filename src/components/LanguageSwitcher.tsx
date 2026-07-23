import { LANGS, useLanguage } from '../i18n/LanguageContext'
import { cn } from '../lib/cn'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage()
  return (
    <div className={cn('flex items-center gap-1 font-mono text-xs', className)} role="group" aria-label="Language">
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="px-1 text-steel/40">|</span>}
          <button
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={cn(
              'px-1 py-1 uppercase tracking-widest transition-colors hover:text-gold',
              lang === l ? 'font-bold text-gold' : 'text-steel',
            )}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  )
}
