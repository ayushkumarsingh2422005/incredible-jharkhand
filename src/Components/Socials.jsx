import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { BsInstagram, BsLinkedin, BsWhatsapp, BsYoutube } from 'react-icons/bs';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Socials() {
    const iconRefs = useRef([]);
    iconRefs.current = [];

    useGSAP(() => {
        gsap.fromTo(iconRefs.current, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                stagger: 0.2, // Adds a stagger delay of 0.2 seconds between each icon's animation
                scrollTrigger: {
                    trigger: iconRefs.current,
                    start: "top 80%", 
                    end: "top 20%",
                    toggleActions: "play none none reverse",
                }
            }
        );
    }, []);

    const addToRefs = (el) => {
        if (el && !iconRefs.current.includes(el)) {
            iconRefs.current.push(el);
        }
    };

    return (
        <div className='w-full flex gap-5 py-20 md:justify-start justify-center px-20'>
            <div>
                <Tilt>
                    <div ref={addToRefs} className='aspect-square flex items-center justify-center md:w-[60px] w-[15vw] text-5xl'>
                        <a href='https://www.instagram.com/incredible.jharkhand'><BsInstagram /></a>
                    </div>
                </Tilt>
            </div>
            <div>
                <Tilt>
                    <div ref={addToRefs} className='aspect-square flex items-center justify-center md:w-[60px] w-[15vw] text-5xl'>
                        <a href='https://www.linkedin.com/company/incredible-jharkhand'><BsLinkedin /></a>
                    </div>
                </Tilt>
            </div>
            <div>
                <Tilt>
                    <div ref={addToRefs} className='aspect-square flex items-center justify-center md:w-[60px] w-[15vw] text-5xl'>
                        <a href='https://www.youtube.com/@Incredible-Jharkhand'><BsYoutube /></a>
                    </div>
                </Tilt>
            </div>
            <div>
                <Tilt>
                    <div ref={addToRefs} className='aspect-square flex items-center justify-center md:w-[60px] w-[15vw] text-5xl'>
                        <a href='https://chat.whatsapp.com/Bc7Fx2Ij4WFJvcIGt7rmDy'><BsWhatsapp /></a>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}
