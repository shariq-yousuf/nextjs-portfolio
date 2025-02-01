import { Project } from '@/types'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: FC<ProjectCardProps> = ({
  project: {
    title,
    description,
    image,
    links: { live, github },
  },
}) => {
  return (
    <div className="border-primary flex flex-col justify-between gap-1 rounded-2xl border-[3px] bg-transparent p-2">
      <figure className="relative h-[125px] w-full">
        <Image src={image} className="rounded-lg" alt={title} fill />
      </figure>
      <h3 className="text-primary text-2xl font-medium">{title}</h3>
      <p className="line-clamp-4 text-base leading-[1.3] font-light">
        {description}
      </p>
      <div className="text-primary flex justify-around">
        <a
          className="flex items-center gap-1 transition-transform duration-300 hover:scale-110"
          href={live}
        >
          <EyeIcon />
          Live
        </a>
        <a
          className="transition-transform duration-300 hover:scale-110"
          target="_blank"
          href={github}
        >
          Github
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
