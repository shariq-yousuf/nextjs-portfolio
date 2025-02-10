import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Full Stack Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
