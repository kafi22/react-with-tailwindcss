import React from 'react'

import {
    FaDribbble,
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagram
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='text-white grid  gap-5 max-w-[1240px] p-6 mx-auto lg:grid-cols-3'>

        <div className='mb-4'>

            <h3 className='text-2xl text-[#00df9a] w-full mb-6'>React</h3>
            <p className=' text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ipsam.</p>
        <div className='flex items-center mt-6 gap-6'>
            <FaDribbble size={20} />
            <FaFacebookSquare size={20} />
            <FaTwitterSquare size={20} />
            <FaInstagram size={20} />
        </div>

        </div>

        <div className=' flex lg:col-span-2 justify-between items-center gap-2'>

            <div>
            <ul>
                <li>Analytics</li>
                <li>Policy </li>
                <li>Trams and Condition</li>
                <li>Contact</li>
            </ul>
            </div>

            <div>
            <ul>
                <li>Analytics</li>
                <li>Policy </li>
                <li>Trams and Condition</li>
                <li>Contact</li>
            </ul>
            </div>

            <div>
            <ul>
                <li>Analytics</li>
                <li>Policy </li>
                <li>Trams and Condition</li>
                <li>Contact</li>
            </ul>
            </div>

            <div>
            <ul>
                <li>Analytics</li>
                <li>Policy </li>
                <li>Trams and Condition</li>
                <li>Contact</li>
            </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer