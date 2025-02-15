import { Testimonial } from '@/types'
import { FC } from 'react'
import SectionContainer from '../ui/section-container'
import SectionHeading from '../ui/section-heading'
import TestimonialCard from './testimonial-card'
import * as motion from 'motion/react-client'

interface TestimonialsSectionProps {}

const TestimonialsSection: FC<TestimonialsSectionProps> = () => {
  const testimonials: Testimonial[] = [
    {
      fullname: 'Shariq Yousuf',
      role: 'Full Stack Developer',
      testimonial:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, totam? Est reprehenderit harum culpa nostrum aliquam. Amet sint qui velit hic harum quia sequi, perferendis suscipit, nihil, facere autem vero.',
      stars: 5,
      githubUsername: 'shariq-yousuf',
    },
    {
      fullname: 'Shariq Yousuf',
      role: 'Full Stack Developer',
      testimonial:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, totam? Est reprehenderit harum culpa nostrum aliquam. Amet sint qui velit hic harum quia sequi, perferendis suscipit, nihil, facere autem vero.',
      stars: 5,
      githubUsername: 'shariq-yousuf',
    },
  ]

  return (
    <SectionContainer>
      <SectionHeading
        heading="Kind Words from Amazing People"
        className="text-center"
      />

      <motion.div
        // initial={{ opacity: 0, scale: 0.8 }}
        // whileInView={{ opacity: 1, scale: 1 }}
        // transition={{
        //   duration: 1,
        //   type: 'spring',
        //   visualDuration: 0.8,
        //   bounce: 0.4,
        // }}
        // viewport={{ once: true }}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
      >
        {testimonials.map(test => (
          <TestimonialCard key={test.fullname} testimonial={test} />
        ))}
      </motion.div>
    </SectionContainer>
  )
}

export default TestimonialsSection
