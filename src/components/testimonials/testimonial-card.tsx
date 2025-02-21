'use client'

import QuoteMarkIcon from '@/assets/icons/quote-mark.svg'
import { Testimonial } from '@/types'
import { StarIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

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
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        type: 'spring',
        visualDuration: 0.8,
        bounce: 0.4,
      }}
    >
      <div className="relative space-y-3 rounded-lg bg-gray-900 px-6 pt-16 pb-4 text-center">
        <Image
          src={QuoteMarkIcon}
          alt="quote mark"
          width={50}
          height={50}
          className="absolute top-4 right-8"
        />

        <div className="flex items-center justify-center gap-[1px]">
          {Array.from({ length: stars }).map((_, index) => (
            <StarIcon key={index} size={20} fill="#ffae00" color="#ffae00" />
          ))}
        </div>

        <p>{testimonial}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          {image && (
            <Image
              src={image}
              alt={fullname}
              width={70}
              height={70}
              className="rounded-full"
            />
          )}

          <div className="-space-y-1">
            <h5 className="text-primary-content">{fullname}</h5>
            <span className="text-sm text-gray-500">{role}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
