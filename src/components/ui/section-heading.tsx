import * as motion from 'motion/react-client'
import { FC } from 'react'

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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        type: 'spring',
        visualDuration: 0.8,
      }}
      className={`mb-6 space-y-4 md:mb-12 ${className}`}
    >
      <h3 className="text-primary-content text-4xl font-semibold">{heading}</h3>
      {descriptoin && (
        <p className="text-primary-content max-w-3xl text-lg font-normal">
          {descriptoin}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
