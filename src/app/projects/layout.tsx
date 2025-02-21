import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Projects of Shariq Yousuf | Modern JavaScript Developer | React / Next.js / Node.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
