import React from 'react'

import ReactTyped from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
    <div className=' flex justify-center items-center min-h-screen'>
        <div className='text-center -mt-[5rem]'>
            <p className='uppercase text-2xl mb-5 text-[#00df9a] font-bold'>Growing with data analytics</p>
            <h1 className='text-xl mb-3'>Growing with data</h1>
         
            <p className='text-2xl'>Fast, flexible financing for   <ReactTyped  
            strings={['BTB', 'SASS', 'BTC']}
            typeSpeed={120}
            backSpeed={140}
            loop
            /></p>
            <div className='mt-10'>
  <p className='text-lg md:text-2xl text-gray-500'>Monitor your data analytic to increase revenue for BTS, BTC, SASS</p>
              
                <button className='my-6 p-3 px-8 rounded-lg bg-emerald-300'>Get Started</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero