import React from 'react'

import laptop from '../images/laptop.jpg'

const Analytics = () => {
  return (
    <div className='p-4 my-6 bg-white mx-w-[1240px] mx-auto  grid md:grid-cols-2 md: justify-between md:items-center md:gap-4'>
        <div className=''>
            <img className='min-w-[400px] my-4 mx-auto' src={laptop} alt="laptop-image" />
        </div>
        <div className='flex flex-col justify-center items-center gap-3 text-center'>
            <h4 className='text-[#00df9a] font-semibold text-xl uppercase'>Data analytics dashboard</h4>
            <h1 className='text-xl md:text-2xl'>Manage data analytics centrally</h1>
            <p className=' leading-6 mt-2 text-base md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat suscipit sapiente ea quo eos temporibus commodi numquam cupiditate iste corrupti. Id, nihil.
            </p>
            <button className='py-3 px-10 my-10 bg-black text-white rounded-lg capitalize'>Learn more</button>
        </div>
    </div>
  )
}

export default Analytics