import { FC, ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

const SectionContainer: FC<SectionContainerProps> = ({
  id,
  children,
  className,
}) => {
  return (
    <section id={id} className={`px-4 py-6 md:px-8 md:py-12 ${className}`}>
      {children}
    </section>
  )
}

export default SectionContainer
