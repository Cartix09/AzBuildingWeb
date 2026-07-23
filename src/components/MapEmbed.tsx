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
    <div className={`group relative overflow-hidden border border-gold/25 shadow-[0_10px_40px_rgba(5,15,35,0.35)] ${className}`}>
      {/* Clean gold location pill (lighter than the old dark chip) */}
      <span className="absolute left-3 top-3 z-10 flex items-center gap-2 bg-gold px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-navy-deep shadow-md">
        <MapPin className="h-3.5 w-3.5" /> AZBUILDING MMC
      </span>
      {/* Full-colour Google map (no grayscale) so the location feels light and
          inviting; a soft warm ring frames it without darkening the map. */}
      <iframe
        title="AZBUILDING MMC location"
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[320px] w-full"
        style={{ border: 0 }}
      />
    </div>
  )
}
