import React, { useEffect, useRef } from 'react';
import { BsInstagram, BsLinkedin, BsWhatsapp, BsYoutube } from 'react-icons/bs';
export default function SocialLinks() {
    const containerRef = useRef(null);

    useEffect(() => {
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                containerRef.current.style.left = '-8vh';
                console.log('Scrolling down');
            } else {
                // Scrolling up
                containerRef.current.style.left = '0vh';
                console.log('Scrolling up');
            }

            lastScrollTop = scrollTop;
        });
    }, []);
    return (
        <div className="fixed h-[32vh] top-[calc(50%-16vh)] left-0 z-50 flex flex-col gap-1 text-white duration-500" ref={containerRef}>
            <div className='h-[8vh] aspect-square bg-[#DD2A7B] flex items-center justify-center text-3xl rounded-tr-md'>
                <a href="https://www.instagram.com/incredible.jharkhand">
                    <BsInstagram />
                </a>
            </div>
            <div className='h-[8vh] aspect-square bg-[#0077b5] flex items-center justify-center text-3xl'>
                <a href="https://www.linkedin.com/company/incredible-jharkhand">
                    <BsLinkedin />
                </a>
            </div>
            <div className='h-[8vh] aspect-square bg-[#25d366] flex items-center justify-center text-3xl'>
                <a href="https://chat.whatsapp.com/Bc7Fx2Ij4WFJvcIGt7rmDy">
                    <BsWhatsapp />
                </a>
            </div>
            <div className='h-[8vh] aspect-square bg-[#ff0000] flex items-center justify-center text-3xl rounded-br-md'>
                <a href="https://www.youtube.com/@Incredible-Jharkhand">
                    <BsYoutube />
                </a>
            </div>
        </div>
    );
}
