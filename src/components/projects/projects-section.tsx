import { projects } from '@/app-data/projects'
import { ArrowUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import SectionContainer from '../ui/section-container'
import SectionHeading from '../ui/section-heading'
import ProjectCard from './project-card'

interface ProjectsSectionProps {}

const ProjectsSection: FC<ProjectsSectionProps> = () => {
  return (
    <SectionContainer id="projects">
      <div className="flex items-center justify-between">
        <SectionHeading heading="Projects" />
        <Link
          href="/projects"
          className="mb-6 flex items-center gap-1 underline hover:no-underline"
        >
          See all projects <ArrowUpRightIcon />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects
          .slice(-8)
          .reverse()
          .map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
      </div>
    </SectionContainer>
  )
}

export default ProjectsSection
