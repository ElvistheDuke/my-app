'use client'
import React from 'react'
import Image from 'next/image'
import { BuildingOfficeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'



const NavBar = (props) => {

    const [isSelected, setSelected] = useState("home")

  return (
    <div className='container mx-auto flex flex-col'>
        <div className="flex justify-between items-center container ">
            <div>
                <Image src="/images/logo.png" width={200} height={200} alt='logo' />
            </div>
            <div className='flex'>
                <div className='sm:flex items-center pb-2 mx-3 hidden'>
                    <BuildingOfficeIcon className="h-8 w-8 text-blue-500 mr-2 pt-1" />
                    <div>
                        <p className='pb-1 px-3 border-b border-black '>example@gmail.com</p>
                        <p className='text-sm px-3 pt-1'>Drop us a text.</p>
                    </div>
                </div>

                <div className='sm:flex items-center pb-2 mx-3 hidden'>
                    <PhoneIcon className="h-8 w-8 text-blue-500 mr-2 pt-1" />
                    <div>
                        <p className='pb-1 px-3 border-b border-black '>+234 8012345678</p>
                        <p className='text-sm px-3 pt-1'>Call for Enquiry</p>
                    </div>
                </div>

                <Link className='bg-[#293991] px-4 flex items-center justify-center mx-4 h-12 rounded' href="#">
                    <p className='text-white font-bold text-center'>BUY A UNIT</p>
                </Link>
            </div>
        </div>
        <div className='container flex justify-evenly flex-col sm:flex-row my-4'> 
            <div className='border-r py-2  border-l bg-[#293991] hover:bg-[#0078E7] w-full '>
                <Link className='w-full flex justify-center items-center' href="/">
                    <p className='font-bold text-white'>Home</p>
                </Link>
            </div>
            <div className='border-r py-2  border-l bg-[#293991] hover:bg-[#0078E7] w-full '>
                <Link className='w-full flex justify-center items-center' href="/">
                    <p className='font-bold text-white'>Distrubutors</p>
                </Link>
            </div>
            <div className='border-r py-2  border-l bg-[#293991] hover:bg-[#0078E7] w-full '>
                <Link className='w-full flex justify-center items-center' href="/">
                    <p className='font-bold text-white'>Contact</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar