import Image from 'next/image';
import React from 'react';
import IgImg1 from '../public/ig-img-1.png';
import Galleryimg from './Galleryimg'

const Hero = ({heading,message}) => {
  return (
    <div>
        {/* overlay */}
    <div />
       <div className='flex items-center justify-between h-screen mb-[10rem] bg-fixed bg-center bg-cover custom-img'>
            <div className='container ml-36 gap-60 sm:flex md:flex md:container'>
                <div className='flex-row mt-64 z-40 w-96 '>
                    <h2 className='text-5xl'>{heading}</h2>
                    <p className='mt-5 mb-10 '>{message}</p>
                    <div className=' flex-col'>
                        <button className='bg-cyan-800 gap-2 rounded-lg text-white mr-2 py-3 px-5'>Services</button>
                        <button className='bg-slate-300 rounded-lg  py-3 px-5' >About the company</button>
                    </div>
                </div>
                <div className='w-[40%] mb-10 flex-row mt-36 sm:w-[40%] '>
                    <Galleryimg socialImg={IgImg1} />
                </div>
            </div>
        </div>

    </div>
  
  )
}

export default Hero