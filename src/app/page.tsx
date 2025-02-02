import Hero from '@/components/hero'
import ProjectsSection from '@/components/projects/projects-section'
import ServicesSection from '@/components/services/services-section'

export default function Home() {
  return (
    <main className="mx-auto max-w-[1500px]">
      <Hero />
      <ProjectsSection />
      <ServicesSection />
    </main>
  )
}
