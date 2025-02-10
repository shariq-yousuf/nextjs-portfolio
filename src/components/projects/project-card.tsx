import GithubIcon from '@/assets/icons/github.svg'
import { Project } from '@/types'
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
    tags,
  },
}) => {
  return (
    <div className="border-primary relative overflow-hidden rounded-2xl border-[3px] bg-transparent p-2 transition-all duration-300 has-[.live:hover]:scale-[1.02]">
      <a href={live} className="live flex h-full flex-col gap-1.5">
        <figure className="relative h-[125px] w-full">
          <Image src={image} className="rounded-lg" alt={title} fill />
        </figure>

        <h3 className="text-primary text-2xl font-medium">{title}</h3>
        <p className="line-clamp-4 text-sm leading-[1.3] font-light">
          {description}
        </p>

        <div className="mt-1 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-primary inline-block rounded-full bg-zinc-800 px-2 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </a>

      {github && (
        <a
          className="bg-primary group absolute -top-2 -right-7 flex h-[40px] w-[80px] rotate-45 items-center justify-center"
          target="_blank"
          href={github}
        >
          <Image
            src={GithubIcon}
            alt="github"
            width={24}
            height={24}
            className="mt-1.5 -rotate-45 transition-transform duration-300 group-hover:scale-110"
          />
        </a>
      )}
    </div>
  )
}

export default ProjectCard
