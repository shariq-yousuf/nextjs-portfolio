'use client'

import { motion } from 'motion/react'
import { FC, useEffect, useState } from 'react'
import TypingAnimation from '../ui/typing-animation'

interface HeroDescriptionProps {
  descriptions: string[]
}

const HeroDescription: FC<HeroDescriptionProps> = ({ descriptions }) => {
  const [currentText, setCurrentText] = useState(descriptions[0])

  useEffect(() => {
    let timerId
    const intervalId = setInterval(() => {
      setCurrentText('')

      setTimeout(() => {
        const index = descriptions.indexOf(currentText)
        const nextIndex = (index + 1) % descriptions.length
        setCurrentText(descriptions[nextIndex])
      }, 100)
    }, 5000)

    return () => {
      clearInterval(intervalId)
      clearTimeout(timerId)
    }
  }, [currentText])

  return (
    <p className="text-primary-content min-h-16 max-w-lg text-center text-lg md:text-left">
      <span className="hidden md:inline">🔥 </span>
      {currentText && (
        <motion.span
          initial={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 4.7,
          }}
          animate={{ opacity: 0 }}
        >
          <TypingAnimation text={currentText} />
        </motion.span>
      )}
    </p>
  )
}

export default HeroDescription
