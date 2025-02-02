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
    <div className={`mb-8 space-y-4 ${className}`}>
      <h3 className="text-primary text-2xl font-semibold">{heading}</h3>
      {descriptoin && (
        <p className="text-primary max-w-2xl text-base font-normal">
          {descriptoin}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
