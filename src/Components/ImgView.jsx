import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function ImgView({ arr, initialIndex }) {
    const [imgIndex, setImgIndex] = useState(initialIndex);
    const [imgUrl, setImgUrl] = useState(arr[initialIndex]);
    const imgRef = useRef(null);

    // useEffect(() => {
    //     const length = arr.length;
    //     let intervalId;

    //     // Calculate delay for wave effect
    //     const waveDelay = Math.sin(initialIndex * Math.PI / 3) * 0.5; // Adjust wave period and amplitude

    //     const changeImage = () => {
    //         // Fade out
    //         gsap.to(imgRef.current, {
    //             opacity: 0,
    //             duration: 2,
    //             delay: initialIndex*2/6, // Apply wave delay
    //             onComplete: () => {
    //                 // Change the image source
    //                 setImgIndex((prevIndex) => {
    //                     const newIndex = (prevIndex + 1) % length;
    //                     setImgUrl(arr[newIndex]);
    //                     return newIndex;
    //                 });

    //                 // Fade in
    //                 gsap.to(imgRef.current, { opacity: 1, duration: 1 });
    //             },
    //         });
    //     };

    //     // Start the interval with wave delay
    //     intervalId = setInterval(changeImage, 2000 + waveDelay * 1000);

    //     // Cleanup the interval on component unmount
    //     return () => clearInterval(intervalId);
    // }, [arr, initialIndex]);

    return (
        <div
            ref={imgRef}
            className='w-full aspect-square bg-red-50'
            style={{
                backgroundImage: `url("${imgUrl}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 1,
            }}
        ></div>
    );
}
