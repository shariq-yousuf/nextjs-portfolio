'use client'

import { Testimonial } from '@/types'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import QuoteMarkIcon from '@/assets/icons/quote-mark.svg'

interface TestimonialCardProps {
  testimonial: Testimonial
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  testimonial: { fullname, role, testimonial, stars, imageUrl, githubUsername },
}) => {
  const [image, setImage] = useState(imageUrl)

  useEffect(() => {
    if (!imageUrl) {
      ;(async () => {
        const user = await fetch(
          `https://api.github.com/users/${githubUsername}`
        )
        const res = await user.json()

        setImage(res.avatar_url)
      })()
    }
  }, [])

  return (
    <div className="relative space-y-2 rounded-lg bg-gray-900 p-8 pt-16 text-center">
      <Image
        src={QuoteMarkIcon}
        alt="quote mark"
        width={50}
        height={50}
        className="absolute top-4 right-8"
      />

      <div className="text-xl">{'⭐'.repeat(stars)}</div>

      <p>{testimonial}</p>

      <div className="mt-10 flex flex-col items-center justify-center gap-2">
        {image && (
          <Image
            src={image}
            alt={fullname}
            width={100}
            height={100}
            className="rounded-full"
          />
        )}

        <div className="-space-y-1">
          <h5 className="text-primary">{fullname}</h5>
          <span className="text-sm text-gray-500">{role}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
