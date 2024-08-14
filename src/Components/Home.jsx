import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import bg1 from '../assets/bg1.jpg';

export default function Home() {
    const elementRef = useRef(null);
    useGSAP(() => {
        gsap.from('.incrediable-Jharkhand div', {
            duration: 4,
            x: -500,
            ease: "elastic.out(0.4, 0.3)",
            stagger: 0.2,
            opacity: 0
        });
        gsap.to('.imageFirst', {
            duration: 2,
            ease: "elastic.out(0.4, 0.3)",
            // ease: "none",
            scale : 1,
        });
    }, []);

    return (
        <>
            <div ref={elementRef} className='text-6xl md:p-20 p-4 md:text-left  font-semibold leading-[150%] incrediable-Jharkhand'>
                <div className='px-2 inline-block'>Incredible</div>
                <div className='px-2 inline-block'>Jharkhand</div> <br />
                <div className='bg-green-200 px-5 rounded-full inline-block'>Welcome's</div>
                <div className='px-2 inline-block'>You</div>
            </div>
            <div className='w-full flex justify-end md:px-[15vw] px-4 items-center pt-10 md:pt-0'>
                <div className='rounded-[50px] imageFirst w-full md:w-[40vw]' style={{
                    backgroundImage: 'url("'+bg1+'")',
                    aspectRatio: '16/7',
                    transform : 'scale(0)'
                }}></div>
            </div>
        </>
    );
}
