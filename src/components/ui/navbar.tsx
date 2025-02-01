'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { FC, useState } from 'react'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const navItems = [
    { item: 'Home', link: '/' },
    { item: 'My Work', link: '/projects' },
    { item: 'My Skills', link: '/skills' },
    { item: 'About', link: '/about' },
    { item: 'Contact', link: '/contact' },
  ]

  return (
    <div className="relative bg-black">
      <button
        onClick={() => setShowNavbar(!showNavbar)}
        className="relative z-50 bg-inherit p-4 md:hidden"
      >
        {showNavbar ? (
          <XIcon size={28} className="text-primary" />
        ) : (
          <MenuIcon size={28} className="text-primary" />
        )}
      </button>

      <ul
        className={`${showNavbar ? 'left-0' : '-left-full'} border-primary absolute flex w-full flex-col border bg-inherit transition-all duration-[300ms] md:static md:w-auto md:flex-row md:items-center md:justify-end md:gap-1 md:border-none md:p-6 md:pr-[5dvw]`}
      >
        {navItems.map((navItem, index) => (
          <li
            key={index}
            className="border-primary border-collapse border-b last:border-0 md:border-none"
          >
            <Link
              href={navItem.link}
              className='text-primary md:before:text-secondary md:after:text-secondary inline-block w-full p-4 text-center font-medium transition-transform duration-300 md:py-0 md:text-xl md:font-normal md:before:opacity-0 md:before:transition-all md:before:duration-500 md:before:content-["<"] md:after:opacity-0 md:after:transition-all md:after:duration-500 md:after:content-["_/>"] md:hover:scale-[1.05] md:hover:before:opacity-40 md:hover:after:opacity-50'
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
