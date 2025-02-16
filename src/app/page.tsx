import Hero from '@/components/hero'
import ProjectsSection from '@/components/projects/projects-section'
import ServicesSection from '@/components/services/services-section'
import TestimonialsSection from '@/components/testimonials/testimonials-section'

export default function Home() {
  return (
    <main className="mx-auto max-w-[1500px]">
      <Hero />
      <ProjectsSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
    </main>
  )
}
