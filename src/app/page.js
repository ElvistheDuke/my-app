import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto flex flex-col ">
        <HeroSection />
    </main>
  )
}
