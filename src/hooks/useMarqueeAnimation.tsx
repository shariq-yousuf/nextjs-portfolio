import { RefObject, useEffect, useState } from 'react'

const useMarqueeAnimation = (
  itemsElementRef: RefObject<HTMLDivElement | null>
) => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (window) setWindowWidth(window.innerWidth)

    if (itemsElementRef.current) {
      const itemsElementWidth =
        itemsElementRef.current.getBoundingClientRect().width
      marqueeAnimation(
        itemsElementRef.current as HTMLElement,
        itemsElementWidth,
        windowWidth
      )
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth])
}

export default useMarqueeAnimation

type MarqueeAnimationType = (
  element: HTMLElement,
  elementWidth: number,
  windowWidth: number
) => void

const marqueeAnimation: MarqueeAnimationType = (
  element,
  elementWidth,
  windowWidth
) => {
  element.animate(
    [
      { transform: 'translateX(0)' },
      { transform: `translateX(${windowWidth - elementWidth}px)` },
    ],
    {
      duration: 20000,
      easing: 'linear',
      direction: 'alternate',
      iterations: Infinity,
    }
  )
}
