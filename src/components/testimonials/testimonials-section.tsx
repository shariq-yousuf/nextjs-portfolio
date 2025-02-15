import { getAllTestimonials } from '@/services'
import { Testimonial } from '@/types'
import * as motion from 'motion/react-client'
import SectionContainer from '../ui/section-container'
import SectionHeading from '../ui/section-heading'
import TestimonialCard from './testimonial-card'

const TestimonialsSection = async () => {
  const testimonials: Testimonial[] = await getAllTestimonials()

  return (
    <SectionContainer>
      <SectionHeading
        heading="Kind Words from Amazing People"
        className="text-center"
      />

      <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {testimonials.map(test => (
          <TestimonialCard key={test.fullname} testimonial={test} />
        ))}
      </motion.div>
    </SectionContainer>
  )
}

export default TestimonialsSection
