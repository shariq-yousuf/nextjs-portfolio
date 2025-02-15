import { skills } from '@/app-data/skills'
import SectionHeading from '../ui/section-heading'
import Marquee from './marquee'

const ServicesSection = () => {
  const descriptoin =
    "I design and develop seamless, high-performance web experiences using modern frameworks like React and Next.js. Whether it's building sleek UIs with Tailwind CSS or creating robust backend solutions with Node.js and Express, my focus is on delivering user-friendly, scalable, and future-proof solutions."

  return (
    <section id="services" className="my-8 md:my-16">
      <SectionHeading heading="Services" descriptoin={descriptoin} />

      <div className="my-20">
        <Marquee items={skills.toReversed()} />
      </div>
    </section>
  )
}

export default ServicesSection
