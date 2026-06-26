import { LogoMarquee } from './LogoMarquee'
import { partners } from '../data/partners'

/** Two-row looping partner carousel (opposite directions). */
export function PartnersCarousel() {
  const half = Math.ceil(partners.length / 2)
  return (
    <div className="space-y-4">
      <LogoMarquee items={partners.slice(0, half)} duration={42} />
      <LogoMarquee items={partners.slice(half)} duration={48} reverse />
    </div>
  )
}
