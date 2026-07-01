import { Reveal } from './Reveal'

interface LogoItem {
  name: string
  logo?: string
  url?: string
}

/** Static grid of logo slots. Empty `logo` renders a labelled placeholder box. */
export function LogoGrid({ items }: { items: LogoItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item, i) => {
        const inner = item.logo ? (
          <img src={item.logo} alt={item.name} loading="lazy" className="max-h-14 max-w-[70%] object-contain opacity-70 transition-opacity group-hover:opacity-100" />
        ) : (
          <span className="font-mono text-xs uppercase tracking-widest text-steel/50">{item.name}</span>
        )
        return (
          <Reveal key={i} index={i % 4} className="group flex h-32 items-center justify-center bg-slate-deep transition-colors hover:bg-slate-surface/40">
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex h-full w-full items-center justify-center">
                {inner}
              </a>
            ) : (
              inner
            )}
          </Reveal>
        )
      })}
    </div>
  )
}
