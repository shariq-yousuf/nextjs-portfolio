import { projects } from '@/app-data/projects'
import { ArrowUpRightIcon } from 'lucide-react'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import SectionContainer from '../ui/section-container'
import SectionHeading from '../ui/section-heading'
import ProjectCard from './project-card'

const ProjectsSection = () => {
  return (
    <SectionContainer id="projects">
      <div className="flex w-full items-center justify-between overflow-x-hidden">
        <SectionHeading heading="Projects" />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            type: 'spring',
            visualDuration: 1,
          }}
        >
          <Link
            href="/projects"
            className="mb-6 flex items-center gap-1 underline hover:no-underline"
          >
            See all projects <ArrowUpRightIcon />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          type: 'spring',
          visualDuration: 1,
        }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {projects
          .slice(-8)
          .reverse()
          .map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
      </motion.div>
    </SectionContainer>
  )
}

export default ProjectsSection
