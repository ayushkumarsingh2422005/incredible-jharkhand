import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { ImInstagram } from 'react-icons/im'

export default function Footer() {
    return (
        <>
        <br />
        <div className='w-full p-5 bg-gray-900 text-white flex justify-between'>
            <div>
                <div>&copy; Incredible Jharkhand 2024-25</div>
                <div>Designed and developed <br className='md:hidden block'/> by AlgoByte</div>
            </div>
            <div className='flex gap-3 items-center text-2xl pr-5 flex-col md:flex-row justify-center'>
                <a href='https://www.instagram.com/ayush_the_dev' target='_blank'><BsInstagram/></a>
                <a href='https://www.linkedin.com/company/algo-byte' target='_blank'><BsLinkedin/></a>
            </div>
        </div>
        </>
        
    )
}
