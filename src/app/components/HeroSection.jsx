'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <div className='container rounded flex flex-col sm:flex-row justify-center items-center text-center sm:text-start sm:justify-start bg-gradient-to-b p-4 from-[#293991] to-[#261E57]'>
      <div className='m-6 lg:ml-56 md:ml-32'>
        <Image src="/images/tikenflier.png" width={200} height={200} alt='logo' />
      </div>
      <div className='flex-1 flex flex-col justify-center sm:ml-8'>
        <h1 className='text-4xl text-white font-bold sm:max-w-sm mt-5 sm:mt-0'>TIKEN AUTOMATIC CHANGE OVER</h1>
        <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Technology for Seamless Power Transition',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Technology for Auto Generator Shutdown',
          1000,
          'Technology for Energy Efficiency',
          1000,
          'Technology for Cost Savings',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '24px', display: 'inline-block', color: 'white', margin: "10px 0px" }}
        repeat={Infinity}
        />
        <p className="text-xl text-white font-bold">Power Rating</p>
        <p className="text-sm text-white">Input voltage: 100 - 250V</p>
        <p className="text-sm text-white mb-10 sm:mb-0">Output voltage: 100 - 250V</p>
      </div>
    </div>
  )
}

export default HeroSection