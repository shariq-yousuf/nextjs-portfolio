import Hero from '@/components/hero'
import ProjectsSection from '@/components/projects/projects-section'

export default function Home() {
  return (
    <main className="mx-auto max-w-[1500px]">
      <Hero />
      <ProjectsSection />
    </main>
  )
}
