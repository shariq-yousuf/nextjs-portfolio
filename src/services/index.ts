import { Testimonial } from '@/types'
import { isUrl } from '@/utils/functions'

export const getAllTestimonials = async () => {
  const url = process.env.TESTIMONIALS_API_URL
  if (!url) {
    throw new Error('TESTIMONIALS_API_URL environment variable is not set')
  }

  const res = await fetch(url)
  const data = await res.json()

  const testimonials: Testimonial[] = data.map((item: any) => {
    let imageUrl
    let githubUsername

    if (isUrl(item['Github Username or Image URL'])) {
      imageUrl = item['Github Username or Image URL'].trim()
    } else {
      githubUsername = item['Github Username or Image URL'].trim()
    }

    return {
      fullname: item['Full name'].trim(),
      role: item['Role / Designation / Experience'].trim(),
      testimonial: item.Feedback.replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim(),
      stars: item['Rate Your Experience'],
      imageUrl,
      githubUsername,
      // recommend: item['Would you recommend me to others?'],
    }
  })

  return testimonials
}
