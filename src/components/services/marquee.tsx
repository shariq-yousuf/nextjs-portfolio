'use client'

import useMarqueeAnimation from '@/hooks/useMarqueeAnimation'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

interface MarqueeProps {
  items: { title: string; icon: string }[]
}

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  const itemsElementRef = useRef<HTMLDivElement>(null)
  useMarqueeAnimation(itemsElementRef)

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        type: 'spring',
        visualDuration: 1,
      }}
      viewport={{ once: true }}
      className="from-primary to-primary relative overflow-x-hidden bg-gradient-to-r via-gray-900"
    >
      <div
        className="w-max p-5 whitespace-nowrap lg:px-10 lg:py-7"
        ref={itemsElementRef}
      >
        <div className="flex gap-8 lg:gap-24">
          {items.map(({ title, icon }, index) => (
            <span
              key={index}
              className="text-primary-content flex items-center text-lg lg:text-base"
            >
              <figure className="relative mx-2 size-11 lg:size-14">
                <Image src={icon} alt={title} fill />
              </figure>
              {title}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Marquee
