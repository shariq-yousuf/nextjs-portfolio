import { heroBgImage, heroDescriptions } from '@/app-data'
import { spaceGrotesk } from '@/fonts'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import HeroDescription from './hero-desc'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 2,
        type: 'spring',
        visualDuration: 0.5,
      }}
      className="relative h-dvh"
    >
      <Image src={heroBgImage} fill alt="hero-bg" className="object-cover" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="from-primary-bg absolute top-0 z-10 h-dvh w-full bg-linear-to-r from-20% to-transparent p-4"
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:w-1/2 md:items-start md:pl-[10%]">
          <h1 className="flex flex-col gap-1 text-center text-lg text-[#e9e7dfdc] md:text-left">
            <span>Hi, I am</span>
            <motion.span
              initial={{ opacity: 0, rotateX: 0 }}
              whileInView={{ opacity: 1, rotateX: [null, '90deg', 0] }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className={`font-primary text-4xl ${spaceGrotesk.className}`}
            >
              <span className="text-primary font-bold">Shariq</span> Yousuf
            </motion.span>
            <span className="text-sm font-light">Full Stack Web Developer</span>
          </h1>

          <HeroDescription descriptions={heroDescriptions} />

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: 'spring',
              visualDuration: 0.3,
              delay: 0.5,
            }}
            href="https://www.linkedin.com/in/shariq-yousuf"
            target="_blank"
            className={`border-primary bg-primary hover:text-primary text-primary-bg mx-auto max-w-max cursor-pointer rounded border-2 px-6 py-1 font-medium duration-300 hover:bg-transparent md:mx-0`}
          >
            Let's Connect
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Hero
