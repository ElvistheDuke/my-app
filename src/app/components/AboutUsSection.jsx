import React from 'react'

const AboutUsSection = () => {
  return (
    <div className='container'>
            <div className='container relative bg-[#293991] py-12 sm:py-0 h-auto sm:h-60 flex flex-col sm:flex-row justify-end items-center mb-6 mt-12 sm:mt-48'>
                <iframe className='static sm:absolute left-5 bottom-10 w-full sm:w-1/2 px-6 sm:px-3' width="450" height="304" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                <p className='text-4xl text-white sm:text-[#293991] static my-4 sm:my-0 mt-10 sm:mt-0 sm:absolute -top-12 font-bold right-20 '>About Us</p>
                <p className=' max-w-lg text-white text-center sm:text-start my-4 sm:my-0 pl-0 sm:pl-6'>
                    Tiken, short for "Transition Kit for Energy," was developed in response to the persistent challenges faced by individuals and businesses when managing power supply during outages and fluctuations. The idea behind Tiken was to create a system that seamlessly transitions from generator power to the federal grid when the grid is restored, eliminating the need for manual intervention and optimizing energy usage.
                </p>

                
            </div>
    </div>
  )
}

export default AboutUsSection