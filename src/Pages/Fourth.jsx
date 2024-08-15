import React from 'react'
import dhoni from '../assets/Images/dhoni.jpg';

export default function Fourth() {
  return (
    <div className='w-full h-auto clip4 relative flex flex-col md:gap-10 gap-5 md:p-10 md:pb-20 pb-36'>
      <div className='flex md:ml-20 ml-5 items-center gap-10'>
        <div className='md:w-[100px] w-[70px] aspect-square' style={{
          backgroundImage: `url(${dhoni})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '50%'
        }}></div>
        <div className='font-bold text-white'>
          MS DHONi
          <div className='font-thin'>The Cricketor</div>
        </div>
      </div>
      <div className='flex md:ml-20 ml-5 items-center gap-10'>
        <div className='md:w-[100px] w-[70px] aspect-square' style={{
          backgroundImage: `url(${dhoni})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '50%'
        }}></div>
        <div className='font-bold text-white'>
          Deepika Kumari
          <div className='font-thin'>Olympic athlete</div>
        </div>
      </div>
      <div className='flex md:ml-20 ml-5 items-center gap-10'>
        <div className='md:w-[100px] w-[70px] aspect-square' style={{
          backgroundImage: `url(${dhoni})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '50%'
        }}></div>
        <div className='font-bold text-white'>
          MS DHONi
          <div className='font-thin'>The Cricketor</div>
        </div>
      </div>
    </div>
  )
}
