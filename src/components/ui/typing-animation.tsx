import { motion } from 'motion/react'
import { FC } from 'react'

interface TypingAnimationProps {
  text: string
}

const TypingAnimation: FC<TypingAnimationProps> = ({ text }) => {
  return (
    <>
      {text.split('').map((char, i) => (
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
    </>
  )
}

export default TypingAnimation
