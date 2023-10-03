import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Link from 'next/link'
import ServicesSection from './components/ServicesSection'
import AboutUsSection from './components/AboutUsSection'

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto flex flex-col ">
        <HeroSection />
        <ServicesSection />
        <AboutUsSection />
    </main>
  )
}
