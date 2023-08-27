import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'


// Metadata is used to specify the title and description of the page.
export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"relative"}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}

// The Difference between body and children is that body is the whole page and children is the content of the page.


