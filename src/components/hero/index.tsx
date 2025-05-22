'use client'

import { heroBgImage, heroDescriptions, heroTitles } from '@/app-data'
import { spaceGrotesk } from '@/fonts'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import TypingAnimation from '../ui/typing-animation'
import { MoveRight } from 'lucide-react'

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
        className="from-primary absolute top-0 z-10 h-dvh w-full bg-linear-to-r from-20% to-transparent p-4"
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:w-2/3 md:items-start md:gap-6 md:pb-[8%] md:pl-[10%]">
          <h1 className="space-y-3 text-center text-[#e9e7dfdc] md:space-y-6 md:text-left">
            <div className="flex items-end justify-center gap-2 md:justify-start">
              <span className="text-lg">Hi, I am</span>
              <motion.span
                initial={{ opacity: 0, rotateX: 0 }}
                whileInView={{ opacity: 1, rotateX: [null, '90deg', 0] }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className={`text-primary-content text-3xl font-bold md:text-4xl ${spaceGrotesk.className}`}
              >
                Shariq Yousuf
              </motion.span>
            </div>

            <div className="flex flex-col gap-4 text-3xl font-light md:text-5xl">
              Modern JavaScript Developer
              <span>
                |{' '}
                <TypingAnimation
                  textArr={heroTitles}
                  className="text-primary-content font-semibold"
                  delay={20}
                />
              </span>
            </div>
          </h1>

          {/* <p className="text-primary-content min-h-16 max-w-lg text-center text-lg md:text-left">
            <span className="hidden md:inline">🔥 </span>
            <TypingAnimation textArr={heroDescriptions} />
          </p> */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: 'spring',
              visualDuration: 0.3,
              delay: 0.5,
            }}
            className="mt-5 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="/download/shariq-yousuf.pdf"
              download
              className="border-primary-content bg-primary-content hover:text-primary-content text-primary mx-auto max-w-max cursor-pointer rounded border-2 px-6 py-1 font-medium transition-all duration-300 hover:bg-transparent md:mx-0"
            >
              Download CV
            </a>
            <a
              href="https://github.com/shariq-yousuf"
              target="_blank"
              className="border-secondary-content/70 hover:border-primary-content hover:text-primary-content text-secondary-content/70 mx-auto flex max-w-max cursor-pointer items-center gap-2 rounded border-2 bg-transparent px-6 py-1 font-medium transition-colors duration-300 md:mx-0"
            >
              Github <MoveRight />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Hero
