'use client'

import useDisableScroll from '@/hooks/useDisableScroll'
import { MenuIcon, XIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  useDisableScroll(showNavbar)

  const navItems = [
    { item: 'Home', link: '/' },
    { item: 'Projects', link: '/projects' },
    { item: 'Services', link: '/#services' },
    // { item: 'About', link: '#about' },
    { item: 'Contact', link: '#contact' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        type: 'spring',
        visualDuration: 0.5,
        delay: 0.5,
      }}
      className="from-primary fixed top-0 z-20 w-dvw bg-linear-to-b from-80% to-transparent md:relative md:w-full"
    >
      <button
        onClick={() => setShowNavbar(!showNavbar)}
        className="p-4 md:hidden"
      >
        {showNavbar ? (
          <XIcon size={28} className="text-primary-content" />
        ) : (
          <MenuIcon size={28} className="text-primary-content" />
        )}
      </button>

      <ul
        className={`${showNavbar ? 'left-0' : '-left-full'} bg-primary absolute top-[48px] z-20 flex h-dvh w-full flex-col px-4 transition-all duration-[300ms] md:static md:h-auto md:w-auto md:flex-row md:items-center md:justify-end md:gap-2 md:border-none md:bg-inherit md:pt-6 md:pr-[5dvw]`}
      >
        {navItems.map((navItem, index) => (
          <li
            key={index}
            className="border-primary-content border-collapse border-b last:border-0 md:border-none"
          >
            <Link
              href={navItem.link}
              onClick={() => setShowNavbar(false)}
              className='text-primary-content md:before:text-secondary-content md:after:text-secondary-content hover:text-secondary-content/50 inline-block w-full p-4 text-center font-medium transition-all duration-300 hover:mx-1 md:p-0 md:py-0 md:text-xl md:font-normal md:before:opacity-0 md:before:transition-all md:before:duration-300 md:before:content-["//_"] md:after:opacity-0 md:after:transition-all md:after:duration-300 md:after:content-none md:hover:before:opacity-50 md:hover:after:opacity-50'
            >
              {navItem.item}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Navbar
