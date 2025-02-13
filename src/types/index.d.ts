export interface Project {
  title: string
  description: string
  image: string
  links: {
    live?: string
    github?: string
  }
  tags: string[]
}

export interface Testimonial {
  fullname: string
  role: string
  testimonial: string
  stars: number
  imageUrl?: string
  githubUsername?: string
}
