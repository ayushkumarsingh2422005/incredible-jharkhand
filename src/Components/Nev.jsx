import React, { useRef } from 'react';
import { HiHome, HiPhone } from 'react-icons/hi2';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Nev() {
    const elementRef1 = useRef(null);
    useGSAP(() => {
        gsap.from(elementRef1.current, {
            duration: 1,
            ease: "power2.out",
            y: -250
        });
        gsap.from(".nev-links > div", {
            duration: 1,
            ease: "power2.out",
            y: -250
        });
    }, []);

    return (
        <div className='w-full flex p-5 justify-between items-center'>
            <div ref={elementRef1} className='md:text-3xl text-xl font-bold uppercase'>
                Incredible Jharkhand
            </div>
            <div className='flex md:gap-5 gap-2 nev-links md:text-base text-sm'>
                <div className='flex items-center md:gap-3 gap-1 font-bold rounded-full bg-green-200 cursor-pointer p-1 md:pl-4 h-fit'>Home <div className='bg-white md:p-2 p-1 rounded-full'><HiHome /></div></div>
                <div className='flex items-center md:gap-3 gap-1 font-bold rounded-full bg-red-200 cursor-pointer p-1 md:pl-4 h-fit'>Contact<div className='bg-white md:p-2 p-1 rounded-full'><HiPhone /></div></div>
            </div>
        </div>
    )
}
