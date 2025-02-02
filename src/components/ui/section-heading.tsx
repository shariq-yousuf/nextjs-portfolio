import { FC } from 'react'
import * as motion from 'motion/react-client'

interface SectionHeadingProps {
  heading: string
  descriptoin?: string
  className?: string
}

const SectionHeading: FC<SectionHeadingProps> = ({
  heading,
  descriptoin,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        visualDuration: 0.5,
      }}
      className={`mb-8 space-y-4 ${className}`}
    >
      <h3 className="text-primary text-2xl font-semibold">{heading}</h3>
      {descriptoin && (
        <p className="text-primary max-w-2xl text-base font-normal">
          {descriptoin}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
