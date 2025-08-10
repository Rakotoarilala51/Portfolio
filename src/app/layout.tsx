import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RAMAITRE - Retrowave Portfolio',
  description: 'Full-Stack Software & Web Developer - Coding the Future with Retro Style',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-orbitron bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
