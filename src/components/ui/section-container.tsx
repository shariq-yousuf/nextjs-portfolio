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
    <section id={id} className={`my-12 px-4 md:my-24 md:px-8 ${className}`}>
      {children}
    </section>
  )
}

export default SectionContainer
