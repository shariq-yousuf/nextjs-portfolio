import { socialLinks } from '@/app-data'
import { AtSignIcon } from 'lucide-react'
import * as motion from 'motion/react-client'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary-bg relative z-50">
      <div className="flex flex-col items-center px-4 py-12">
        <motion.h3
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.25,
            type: 'spring',
            visualDuration: 0.5,
          }}
          className="text-2xl font-semibold"
        >
          Get In Touch!
        </motion.h3>

        <div className="mt-8">
          <ul className="flex items-center gap-6">
            {socialLinks.map(({ name, icon, link }) => (
              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  type: 'spring',
                  visualDuration: 0.8,
                  bounce: 0.5,
                }}
                key={name}
              >
                <a
                  href={link}
                  title={name}
                  className="text-white"
                  target="_blank"
                >
                  <Image
                    src={icon}
                    alt={name}
                    className="transition-all duration-300 hover:scale-110"
                    width={40}
                    height={40}
                  />
                </a>
                <span className="sr-only">{name} account</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.25,
            type: 'spring',
            visualDuration: 0.5,
          }}
          className="mt-6 mb-2 flex items-center gap-2 text-white"
        >
          <AtSignIcon size={16} />
          <a
            href="mailto:shariqyousuf01@gmail.com"
            className="text-lg font-medium underline hover:no-underline"
          >
            shariqyousuf01@gmail.com
          </a>
        </motion.div>
      </div>

      <div className="bg-zinc-900">
        <div className="px-3 py-3 text-center">
          <span className="text-[#3d4049]">
            Portfolio &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
