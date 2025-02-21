import { HTMLMotionProps, motion } from 'motion/react'
import { FC, useEffect, useState } from 'react'

interface TypingAnimationProps extends HTMLMotionProps<'span'> {
  textArr: string[]
}

const TypingAnimation: FC<TypingAnimationProps> = ({ textArr, ...props }) => {
  const [currentText, setCurrentText] = useState(textArr[0])

  useEffect(() => {
    let timerId
    const intervalId = setInterval(() => {
      setCurrentText('')

      setTimeout(() => {
        const index = textArr.indexOf(currentText)
        const nextIndex = (index + 1) % textArr.length
        setCurrentText(textArr[nextIndex])
      }, 100)
    }, 4000)

    return () => {
      clearInterval(intervalId)
      clearTimeout(timerId)
    }
  }, [currentText])

  return (
    currentText && (
      <motion.span
        initial={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 4.7,
        }}
        animate={{ opacity: 0 }}
        {...props}
      >
        {currentText.split('').map((char, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 40,
            }}
            key={i}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    )
  )
}

export default TypingAnimation
