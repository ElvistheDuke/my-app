import React from 'react'
import { LightBulbIcon, BoltIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'



const aboutInfo = [
    {
        icon : <LightBulbIcon className='w-14 text-[#293991] my-2'/>,
        title : "Zero Interruptions",
        text: "Tiken's automation ensures that you never experience power interruptions during grid outages or fluctuations."
    },
    {
        icon : <BoltIcon className='w-14 text-[#293991] my-2'/>,
        title : "Energy Efficiency",
        text: "By intelligently managing the transition and shutdown of the generator, Tiken optimizes energy usage, saving both fuel costs and reducing environmental impact."
    },
    {
        icon : <LightBulbIcon className='w-14 text-[#293991] my-2'/>,
        title : "Cost Savings",
        text: "Reduced generator operation time and improved efficiency translate into significant cost savings over time."
    },
    {
        icon : <LightBulbIcon className='w-14 text-[#293991] my-2'/>,
        title : "Reliability",
        text: "Tiken's advanced sensors and algorithms make it highly reliable, even in adverse conditions."
    },
]




const ServicesSection = () => {
  return (
    <div className='container p-4 my-4 flex flex-col items-center'>
        <div>
            <h1 className='text-4xl font-bold text-[#293991]'>WHY US?</h1>
        </div>
        <div className='flex flex-wrap justify-center my-4'>
            {
                aboutInfo.map((about) => {
                    return(
                    <div style={{height: "300px"}} className='w-72 rounded mx-2 my-6 flex flex-col p-4 items-center border-2 text-center border-[#293991]'>
                        {about.icon}
                        <h2 className='text-xl font-bold text-[#293991]'>{about.title}</h2>
                        <p className=' text-[#293991]'>{about.text}</p>
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ServicesSection