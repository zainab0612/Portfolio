import { Header } from '@/components/Header/header';
import './globals.css';
import type { Metadata } from 'next';
import { Footer } from '@/components/Footer/footer';

export const metadata: Metadata = {
  title: 'Portfolio - Zainab',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children, }: RootLayoutProps) {
  return (
    <html lang="en" className="font-fira">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className='bg-secondary w-full flex justify-center'>
        <div className="2xl:w-[70%] xl:w-[90%] w-full transition-all duration-300 ease-in-out">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
