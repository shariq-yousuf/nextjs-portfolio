import { spaceGrotesk } from '@/fonts'
import { FC } from 'react'

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className="hero-bg h-dvh p-4">
      <div className="grid h-full w-full place-content-center gap-4 md:w-1/2">
        <h1 className="text-secondary-50 flex flex-col gap-1 text-center text-lg md:text-left">
          <span>Hi, I am</span>
          <span
            className={`animate__animated animate__flipInX font-primary text-4xl ${spaceGrotesk.className}`}
          >
            <span className="text-primary font-bold">Shariq</span> Yousuf
          </span>
          <span className="italic">full stack web developer</span>
        </h1>

        <p className="text-primary max-w-lg text-center text-lg md:text-left">
          🔥 Transforming complex problems into seamless web solutions.
        </p>

        <a
          href=""
          className={`border-primary bg-primary hover:text-primary mx-auto max-w-max cursor-pointer rounded border-2 px-6 py-1 duration-300 hover:bg-transparent md:mx-0`}
        >
          Let's Connect
        </a>
      </div>
    </div>
  )
}

export default Hero
