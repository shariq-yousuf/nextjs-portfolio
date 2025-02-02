import { heroBgImage, heroDescriptions } from '@/app-data'
import { spaceGrotesk } from '@/fonts'
import Image from 'next/image'
import { FC } from 'react'
import HeroDescription from './hero-desc'
interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className="relative h-dvh">
      <Image src={heroBgImage} fill alt="hero-bg" className="object-cover" />

      <div className="from-primary-bg absolute top-0 z-10 h-dvh w-full bg-linear-to-r from-20% to-transparent p-4">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:w-1/2 md:items-start md:pl-[10%]">
          <h1 className="flex flex-col gap-1 text-center text-lg text-[#e9e7dfdc] md:text-left">
            <span>Hi, I am</span>
            <span className={`font-primary text-4xl ${spaceGrotesk.className}`}>
              <span className="text-primary font-bold">Shariq</span> Yousuf
            </span>
            <span className="text-sm font-light">Full Stack Web Developer</span>
          </h1>

          <HeroDescription descriptions={heroDescriptions} />

          <a
            href="https://www.linkedin.com/in/shariq-yousuf"
            target="_blank"
            className={`border-primary bg-primary hover:text-primary text-primary-bg mx-auto max-w-max cursor-pointer rounded border-2 px-6 py-1 font-medium duration-300 hover:bg-transparent md:mx-0`}
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
