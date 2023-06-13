import React from 'react';

import single from '../images/single.png';
import double from '../images/double.png';
import triple from '../images/triple.png';

const Card = () => {
  return (
    <div className='my-8 p-10 bg-white'>
        <div className='grid md:grid-cols-3 md:justify-between md:items-center max-w-[1240px] mx-auto py-10 gap-10 md:gap-12' >
            <div className='border py-10 px-2 text-center my-12'>
                <img src={single} alt="single-image" className='w-20 mx-auto bg-white  mt-[-5rem]' />
                <article className='flex justify-between flex-col items-center h-full mt-10'>
                    <h1 className='text-3xl'>Single user</h1>
                    <p className='font-bold text-black-500 text-2xl my-4'>$120</p>
                    <div className='capitalize flex flex-col justify-between items-center text-xl leading-10 w-full text-center my-3'>
                        <p className='border-b-2 w-full'>500Gb storage</p>
                        <p className='border-b-2 w-full'>sped up to 2gb</p>
                        <p className='border-b-2 w-full'>1 General user</p>
                    </div>
                    <div className=''>
                <button className='btn_card '>Start Trial</button>
                </div>
                </article>
              
            </div>

            <div className='border py-20 px-2 text-center bg-gray-100 my-6 md:my-0 '>
                <img src={double} alt="single-image" className='w-20 mx-auto bg-gray-100  mt-[-5rem]' />
                <article className='flex justify-between flex-col items-center h-full mt-10'>
                    <h1 className='text-3xl'>Single user</h1>
                    <p className='font-bold text-black-500 text-2xl my-4'>$120</p>
                    <div className='capitalize flex flex-col justify-between items-center text-xl leading-10 w-full text-center my-3'>
                        <p className='border-b-2 w-full'>500Gb storage</p>
                        <p className='border-b-2 w-full'>sped up to 2gb</p>
                        <p className='border-b-2 w-full'>1 General user</p>
                    </div>
                    <div className=''>
                <button className='btn_card bg-black text-white'>Start Trial</button>
                </div>
                </article>
                
            </div>

            <div className='border py-10 px-2 text-center my-12'>
                <img src={triple} alt="single-image" className='w-20 mx-auto bg-white  mt-[-5rem]' />
                <article className='flex justify-between flex-col items-center h-full mt-10'>
                    <h1 className='text-3xl'>Single user</h1>
                    <p className='font-bold text-black-500 text-2xl my-4'>$120</p>
                    <div className='capitalize flex flex-col justify-between items-center text-xl leading-10 w-full text-center my-3'>
                        <p className='border-b-2 w-full'>500Gb storage</p>
                        <p className='border-b-2 w-full'>sped up to 2gb</p>
                        <p className='border-b-2 w-full'>1 General user</p>
                    </div>
                    <div className=''>
                <button className='btn_card '>Start Trial</button>
                </div>
                </article>
               
            </div>
        </div>
    </div>
  )
}

export default Card