import Footer from '@/components/footer'
import Navbar from '@/components/header/navbar'
import { poppins } from '@/fonts'
import type { Metadata } from 'next'
import './globals.css'

const title = 'Shariq Yousuf | Full Stack Developer'
const description =
  'As a creative problem-solver with a strong work ethic, I am dedicated to delivering exceptional results, often exceeding client expectations. My proficiency in technologies like HTML, CSS, JavaScript, React, Next.js, Node.js, and Express enables me to build high-performing and scalable web solutions.'

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  applicationName: 'Shariq Yousuf | Full Stack Developer',
  title,
  description,
  category: 'technology',
  alternates: {
    canonical: url,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  openGraph: {
    title,
    description,
    url,
    siteName: 'Shariq Yousuf | Full Stack Developer',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@Shariq_601',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="jBdQza6o3wbRxOF4cwdUeCCbK_LKwUIMu85MKuEO5sc"
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
