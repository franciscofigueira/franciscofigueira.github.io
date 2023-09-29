import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import styles from "../components/Layout/layout.module.css"
import Header from '@/components/header/header'

const inter = Roboto({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: 'Francisco Figueira',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className={styles.main}>  {children}</main>     
        </body>
    </html>
  )
}
