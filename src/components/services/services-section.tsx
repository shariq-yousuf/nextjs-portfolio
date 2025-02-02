import { skills } from '@/app-data/skills'
import SectionHeading from '../ui/section-heading'
import Marquee from './marquee'

const ServicesSection = () => {
  return (
    <section id="services" className="my-8 md:my-16">
      <SectionHeading
        heading="Services"
        descriptoin="I design and develop seamless, high-performance web experiences using modern frameworks like React, Next.js, and Node.js. Whether it's building sleek UIs with Tailwind CSS or creating robust backend solutions with Express.js, my focus is on delivering user-friendly, scalable, and future-proof solutions."
        className="flex flex-col items-center px-4 text-center"
      />

      <Marquee items={skills} />
    </section>
  )
}

export default ServicesSection
