import { Reveal } from './Reveal'
import { ProjectCard } from './ProjectCard'
import type { Project } from '../data/projects'

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        // h-full lets the reveal cell fill the stretched grid row so every card
        // is equal height regardless of how long translated text wraps.
        <Reveal key={p.slug} index={i % 3} className="h-full">
          <ProjectCard project={p} />
        </Reveal>
      ))}
    </div>
  )
}
