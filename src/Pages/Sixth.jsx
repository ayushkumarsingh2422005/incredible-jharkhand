import React from 'react'
import dhoni from '../assets/Images/dhoni.jpg';
import first from '../assets/Images/first.jpg';
import palas from '../assets/Images/palas.jpg';
import rock from '../assets/Images/rock.jpg';
import second from '../assets/Images/second.jpg';
import tribe from '../assets/Images/tribe.jpg';
import img1 from '../assets/Images/img1.jpg';
import img2 from '../assets/Images/img2.jpg';
import img3 from '../assets/Images/img3.jpg';
import img4 from '../assets/Images/img4.jpg';
import img5 from '../assets/Images/img5.jpg';
import img6 from '../assets/Images/img6.jpg';
import ImgView from '../Components/ImgView';

export default function Sixth() {
    const arr = [dhoni, first, palas, rock, second, tribe, img1, img2, img3, img4, img5, img6];
    return (
        <div className='w-full flex gap-1 md:-translate-y-0 -translate-y-10 px-1 flex-col md:flex-row'>
            <div className='w-full flex gap-1'>
                <ImgView arr={arr} initialIndex={1} key={1} />
                <ImgView arr={arr} initialIndex={2} key={2} />
                <ImgView arr={arr} initialIndex={3} key={3} />
            </div>
            <div className='w-full flex gap-1'>
                <ImgView arr={arr} initialIndex={4} key={4} />
                <ImgView arr={arr} initialIndex={5} key={5} />
                <ImgView arr={arr} initialIndex={6} key={6} />
            </div>
        </div>
    )
}
