import { LogoMarquee } from './LogoMarquee'
import { partners } from '../data/partners'

/** Single-row looping partner carousel (brand presence). */
export function PartnersCarousel() {
  return <LogoMarquee items={partners} duration={32} />
}
