import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Tailwind CSS / JavaScript / React / Next.js / Node.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
