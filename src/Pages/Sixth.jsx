import React from 'react'
import dhoni from '../assets/Images/dhoni.jpg';
import first from '../assets/Images/first.jpg';
import palas from '../assets/Images/palas.jpg';
import rock from '../assets/Images/rock.jpg';
import second from '../assets/Images/second.jpg';
import tribe from '../assets/Images/tribe.jpg';

export default function Sixth() {
    return (
        <div className='w-full flex gap-1 md:-translate-y-0 -translate-y-10 px-1 flex-col md:flex-row'>
            <div className='w-full flex gap-1'>
                <div className='w-full aspect-square bg-red-50' style={{
                    backgroundImage: 'url("' + tribe + '")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>
                <div className='w-full aspect-square bg-red-50' style={{
                    backgroundImage: 'url("' + second + '")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>
                <div className='w-full aspect-square bg-red-50' style={{
                    backgroundImage: 'url("' + rock + '")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>
            </div>
            <div className='w-full flex gap-1'>
                <div className='w-full aspect-square bg-red-50' style={{
                    backgroundImage: 'url("' + palas + '")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>
                <div className='w-full aspect-square bg-red-50' style={{
                    backgroundImage: 'url("' + dhoni + '")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>
                <div className='w-full aspect-square bg-red-50' style={{
                    backgroundImage: 'url("' + first + '")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>
            </div>
        </div>
    )
}
