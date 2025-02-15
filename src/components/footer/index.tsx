import { footerSections, socialLinks } from '@/app-data'
import { PhoneIcon } from 'lucide-react'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      className="bg-gray-950 px-4 py-6"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        type: 'spring',
        visualDuration: 0.8,
      }}
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-4">
          {footerSections.map((section, index) => (
            <section
              key={index}
              className="cursor-pointer rounded-lg p-4 transition-colors duration-300 hover:bg-gray-900"
            >
              <Link href={section.href} className="block">
                <h2 className="text-primary text-lg font-semibold">
                  {section.title}
                </h2>

                <p className="mt-2 text-sm text-gray-300">{section.content}</p>
              </Link>
            </section>
          ))}

          <section className="rounded-lg p-4">
            <h2 className="text-primary text-lg font-semibold">Contact</h2>

            <a
              href="mailto:shariqyousuf01@gmail.com"
              target="_blank"
              className="flex items-center gap-2 text-base text-gray-300"
            >
              <span className="no-underline">@</span>
              <span className="underline hover:no-underline">
                shariqyousuf01@gmail.com
              </span>
            </a>

            <a
              href="https://wa.me/03151163020"
              target="_blank"
              className="flex items-center gap-2 text-base text-gray-300 underline hover:no-underline"
            >
              <PhoneIcon size={18} />
              0315 1163020
            </a>
          </section>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-gray-600 md:mb-0">
              &copy; {new Date().getFullYear()} | Coded with 💜
            </p>

            <ul className="flex space-x-4">
              {socialLinks.map(({ name, link, icon }) => (
                <li
                  key={name}
                  className="transition-all duration-300 hover:scale-110"
                >
                  <motion.a
                    href={link}
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 1,
                      type: 'spring',
                      visualDuration: 0.8,
                      bounce: 0.5,
                    }}
                  >
                    <Image src={icon} alt={name} width={32} height={32} />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
