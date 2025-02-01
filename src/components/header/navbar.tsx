'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const navItems = [
    { item: 'Home', link: '/' },
    { item: 'Projects', link: '#projects' },
    { item: 'Services', link: '#services' },
    { item: 'About', link: '#about' },
    { item: 'Contact', link: '#contact' },
  ]

  return (
    <div className="bg-primary-bg md:from-primary-bg fixed top-0 z-20 w-dvw md:bg-transparent md:bg-linear-to-b md:from-80% md:to-transparent">
      <button
        onClick={() => setShowNavbar(!showNavbar)}
        className="p-4 md:hidden"
      >
        {showNavbar ? (
          <XIcon size={28} className="text-primary" />
        ) : (
          <MenuIcon size={28} className="text-primary" />
        )}
      </button>

      <ul
        className={`${showNavbar ? 'left-0' : '-left-full'} absolute flex h-[calc(100dvh-4rem)] w-full flex-col bg-inherit px-4 transition-all duration-[300ms] md:static md:h-auto md:w-auto md:flex-row md:items-center md:justify-end md:gap-2 md:border-none md:pt-6 md:pr-[5dvw]`}
      >
        {navItems.map((navItem, index) => (
          <li
            key={index}
            className="border-primary border-collapse border-b last:border-0 md:border-none"
          >
            <Link
              href={navItem.link}
              className='text-primary md:before:text-secondary md:after:text-secondary hover:text-secondary-50 inline-block w-full p-4 text-center font-medium transition-all duration-300 hover:mx-1 md:p-0 md:py-0 md:text-xl md:font-normal md:before:opacity-0 md:before:transition-all md:before:duration-300 md:before:content-["//_"] md:after:opacity-0 md:after:transition-all md:after:duration-300 md:after:content-none md:hover:before:opacity-50 md:hover:after:opacity-50'
            >
              {navItem.item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
