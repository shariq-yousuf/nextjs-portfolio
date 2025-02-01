import { projects } from '@/app-data/projects'
import ProjectCard from '@/components/projects/project-card'
import SectionContainer from '@/components/ui/section-container'
import SectionHeading from '@/components/ui/section-heading'

const Projects = () => {
  return (
    <main className="mx-auto my-16 max-w-[1500px]">
      <SectionContainer id="projects" className="">
        <SectionHeading heading="All Projects" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.toReversed().map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </SectionContainer>
    </main>
  )
}

export default Projects
