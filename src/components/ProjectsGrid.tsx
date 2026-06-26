import { Reveal } from './Reveal'
import { ProjectCard } from './ProjectCard'
import type { Project } from '../data/projects'

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <Reveal key={p.slug} index={i % 3}>
          <ProjectCard project={p} />
        </Reveal>
      ))}
    </div>
  )
}
