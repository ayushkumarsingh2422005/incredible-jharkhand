import React from 'react'
import logo from '/logo.png'
export default function First() {
  return (
    <div className='w-screen md:h-screen h-[80vh] relative before:absolute before:w-full before:h-[90%] before:top-0 before:left-0 before:bg-slate-600 before:-z-10 clip1 pt-10'>
      <div className='md:w-[200px] w-[150px] aspect-square mx-auto rounded-full' style={{
        backgroundImage: 'url("' + logo + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        aspectRatio: '1/1',
      }}></div>
      <div className='text-white md:text-7xl text-3xl text-center pt-10 font-bold'>Incredible Jharkhand <br /> Welcomes You</div>
      <div className='text-white md:text-2xl text-base text-center pt-10 font-semibold z-10'>Wild and wonderful <br />
      Essence of extraordinary</div>
    </div>
  )
}
