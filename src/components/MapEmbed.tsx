import { MapPin } from 'lucide-react'
import { company } from '../data/translations'

/**
 * Google Maps embed. Uses the keyless embed endpoint with the company query.
 * For a precise pin, replace `mapsQuery` in translations.ts with the exact
 * address, or swap `src` for a Place embed URL from Google Maps → Share → Embed.
 */
export function MapEmbed({ className = '' }: { className?: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&output=embed`
  return (
    <div className={`relative border border-white/10 ${className}`}>
      <span className="absolute left-3 top-3 z-10 flex items-center gap-2 bg-slate-deep/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-orange-brand">
        <MapPin className="h-3.5 w-3.5" /> AZBUILDING MMC
      </span>
      <iframe
        title="AZBUILDING MMC location"
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[320px] w-full grayscale"
        style={{ border: 0 }}
      />
    </div>
  )
}
