import { FC } from 'react'

interface SectionHeadingProps {
  heading: string
}

const SectionHeading: FC<SectionHeadingProps> = ({ heading }) => {
  return <h3 className="text-primary mb-6 text-2xl font-semibold">{heading}</h3>
}

export default SectionHeading
