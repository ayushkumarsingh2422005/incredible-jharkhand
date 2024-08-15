import React from 'react'
import bg from '../assets/Images/second.jpg';

export default function Third() {
  return (
    <div className='w-full h-auto relative before:absolute before:top-0 before:right-0 before:h-[100px] before:bg-gradient-to-b before:from-white before:to-transparent before:w-full pb-10 clip2' style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className='mx-auto md:text-7xl text-4xl pt-20 text-center font-bold text-white'>Celebrating Culture <br /> Empowering Growth</div>
      <div className='md:w-[60%] w-[80%] mx-auto flex my-10 gap-10 md:flex-row flex-col md:text-xl text-base text-white z-50 text-justify relative'>
        A land of rich minerals, stunning waterfalls, and vibrant tribal heritage. Home to sacred sites like Parasnath Hills and Baba Baidyanath Dham, Jharkhand blends natural beauty, industrial strength, and cultural richness. From lush forests and wildlife to global sports icons like MS Dhoni, it stands as a unique destination of heritage and progress in India.
      </div>
    </div>
  )
}
