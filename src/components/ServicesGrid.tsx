import { Reveal } from './Reveal'
import { ServiceCard } from './ServiceCard'
import type { Service } from '../data/services'

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s, i) => (
        <Reveal key={s.slug} index={i % 4}>
          <ServiceCard service={s} />
        </Reveal>
      ))}
    </div>
  )
}
