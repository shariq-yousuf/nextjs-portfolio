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
    <section id={id} className={`my-8 px-4 md:my-16 md:px-8 ${className}`}>
      {children}
    </section>
  )
}

export default SectionContainer
