import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Lang } from '../data/translations'

// eslint-disable-next-line react-refresh/only-export-components
export const LANGS: Lang[] = ['az', 'en', 'ru']
const STORAGE_KEY = 'azbuilding-lang'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Translate a dotted key path, e.g. t('nav.projects'). Falls back to EN, then the key. */
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function resolve(lang: Lang, key: string): string | undefined {
  const parts = key.split('.')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any = translations[lang]
  for (const part of parts) {
    if (node == null) return undefined
    node = node[part]
  }
  return typeof node === 'string' ? node : undefined
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'az'
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored && LANGS.includes(stored)) return stored
    return 'az'
  })

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback(
    (key: string) => resolve(lang, key) ?? resolve('en', key) ?? key,
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

/** Helper for picking a localized value out of a { az, ru, en } record. */
// eslint-disable-next-line react-refresh/only-export-components
export function pick<T>(record: Record<Lang, T>, lang: Lang): T {
  return record[lang] ?? record.en
}
