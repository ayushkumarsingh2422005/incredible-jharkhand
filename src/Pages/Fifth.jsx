import React from 'react'
import palas from '../assets/Images/palas.jpeg';
import rock from '../assets/Images/rock.jpg';
import tribe from '../assets/Images/tribe.jpg';
export default function Fifth() {
  return (
    <div className='w-full h-auto px-10 md:-translate-y-10 -translate-y-20 flex flex-row justify-around gap-5 md:gap-0'>
      <div className='w-[400px] aspect-[9/12] rounded-md' style={{
        backgroundImage: 'url("'+palas+'")',
        backgroundSize: 'cover'
      }}></div>
      <div className='w-[400px] aspect-[9/12] rounded-md' style={{
        backgroundImage: 'url("'+rock+'")',
        backgroundSize: 'cover'
      }}></div>
      <div className='w-[400px] aspect-[9/12] md:block hidden rounded-md' style={{
        backgroundImage: 'url("'+tribe+'")',
        backgroundSize: 'cover'
      }}></div>
    </div>
  )
}
