import React from 'react'

const Newslatter = () => {
  return (
    <div className='text-white my-6 p-6 max-w-[1240px]'>
        <div className='form-group flex flex-col md:flex-row md:justify-between md:items-center mx-auto h-full justify-center items-center gap-4 md:gap-8 '>
            <div className='text-center md:text-left'>
                <h1 className='text-2xl font-bold text-white my-4'>Want tips and tricks to optimize your Flow?</h1>
                <p className='text-xl'>sign up our newsletters and stay up to date</p>
            </div>
            <div className='forms-area text-center md:text-right flex flex-col justify-center items-center'>
                <form action="" className='mt-12 flex gap-2  items-center flex-wrap w-[100%] md:flex-nowrap'>
                    <input type="text" placeholder='Enter your email' className='p-3 my-6 w-[100%] md:w-60' />
                    <button className=' bg-emerald-400 py-3 px-10 mx-auto rounded-md text-black'>Submit</button>
                </form>
        
                <p className='my-6'>we care both the protection and data. read out <span className='text-red-600'>Privacy policy</span></p>
              
            </div>
        </div>
    </div>
  )
}

export default Newslatter