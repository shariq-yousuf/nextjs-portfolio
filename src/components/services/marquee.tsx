'use client'

import useMarqueeAnimation from '@/hooks/useMarqueeAnimation'
import Image from 'next/image'
import { useRef } from 'react'

interface MarqueeProps {
  items: { title: string; icon: string }[]
}

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  const itemsElementRef = useRef<HTMLDivElement>(null)
  useMarqueeAnimation(itemsElementRef)

  return (
    <div className="from-primary via-secondary to-primary relative overflow-x-hidden bg-gradient-to-r">
      <div
        className="w-max p-5 whitespace-nowrap lg:px-10 lg:py-7"
        ref={itemsElementRef}
      >
        <div className="flex gap-8 lg:gap-24">
          {items.map(({ title, icon }, index) => (
            <span
              key={index}
              className="text-primary-bg flex items-center text-lg lg:text-base"
            >
              <figure className="relative mx-2 size-11 lg:size-14">
                <Image src={icon} alt={title} fill />
              </figure>
              {title}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee
