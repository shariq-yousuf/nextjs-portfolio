import { useEffect } from 'react'

const useDisableScroll = (condition: boolean) => {
  useEffect(() => {
    if (window) {
      if (condition) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }

      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [condition])
}

export default useDisableScroll
