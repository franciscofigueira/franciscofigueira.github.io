import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/header/header'
import Hero from '@/components/Hero/Hero'
import Contact from '@/components/Contact/Contact'
import Skills from '@/components/Skills/Skills'
import Projects from '@/components/Projects/Projects'

export default function Home() {
  return (
    <>
    
    
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
   
    </>
  )
}
