import React from 'react'
import IgImg1 from '../public/first.png';
import IgImg2 from '../public/card1.png';
import IgImg3 from '../public/card2.png';
import IgImg4 from '../public/card3.png';
import IgImg5 from '../public/card4.png';
import IgImg6 from '../public/card5.png';
import InstagramImg from './InstagramImg';

const Instagram = () => {
  return (
    <div className='bg-gray-100 w-full'>
        <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-cyan-500'>Socials</p>
        <p className='text-2xl font-bold p-2'>On Instagram</p>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1}/>
            <InstagramImg socialImg={IgImg2}/>
            <InstagramImg socialImg={IgImg3}/>
            <InstagramImg socialImg={IgImg4}/>
            <InstagramImg socialImg={IgImg5}/>
            <InstagramImg socialImg={IgImg6}/>
        </div>
        </div>
    </div>
  )
}

export default Instagram