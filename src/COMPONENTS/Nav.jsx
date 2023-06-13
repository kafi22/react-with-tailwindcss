import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Nav = () => {

  const [Nav, setNav] = useState(true)
  
  const handelChange = () => {
    setNav(!Nav)
  }
  
  return (
    <div className='text-white flex justify-between h-10 max-w-[1240px] mx-auto items-center px-10'>
        <h3 className='text-2xl text-[#00df9a] w-full'>React</h3>
        <ul className='hidden md:flex'>
            <li><a href="" className='mr-3'>Home</a></li>
            <li><a href="" className='mr-3'>About</a></li>
            <li><a href="" className='mr-3'>Pricing</a></li>
            <li><a href="" className='mr-3'>Contact</a></li>
        </ul>


      <div onClick={handelChange} className='md:hidden'>
      { !Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} className='cursor-pointer'/> }
      </div>
        

        <div className={!Nav ? 'fixed left-0 top-0 h-full w-3/5 bg-gray-800 ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
        <h3 className='text-3xl text-[#00df9a] m-4'>React</h3>
        <ul className='pt-10 uppercase ml-5'>
            <li><a href="" className='p-4 border-b border-gray-600 block '>Home</a></li>
            <li><a href="" className='p-4 border-b border-gray-600 block'>About</a></li>
            <li><a href="" className='p-4 border-b border-gray-600 block'>Pricing</a></li>
            <li><a href="" className='p-4 border-b border-gray-600 block'>Contact</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Nav