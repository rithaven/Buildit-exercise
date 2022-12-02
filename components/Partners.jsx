import React from 'react'
import IgImg4 from '../public/line.png';
import IgImg5 from '../public/about.png';
import IgImg6 from '../public/n.png';
import IgImg7 from '../public/round.png';
import IgImg8 from '../public/big.png';
import IgImg9 from '../public/victor.png';
import IgImg10 from '../public/icon8.png';
import PartnersHeader from './PartnersHeader'

const Partners = () => {
  return (
    <div className='bg-gray-100 p-20'>
        <PartnersHeader socailImg={IgImg4} alt='/' />
        <div className='flex justify-center gap-10 p-4'>
            <PartnersHeader socailImg={IgImg6} alt='/' />
            <PartnersHeader socailImg={IgImg7} alt='/' />
            <PartnersHeader socailImg={IgImg8} alt='/' />
            <PartnersHeader socailImg={IgImg9} alt='/' />
            <PartnersHeader socailImg={IgImg10} alt='/' />
           
        </div>
        <PartnersHeader socailImg={IgImg4} alt='/' />

        <div className='flex flex-cols-2 justify-center gap-20 p-4 mt-20'>
           <div className='w-96 mt-10'> <PartnersHeader socailImg={IgImg5} alt='/'/></div>
            <div className='grid grid-col-4  w-96 gap-5'>
                <p className='text-teal-600'>About us</p>
                <h1 className='text-3xl'>Owner and investor with a reputation</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.</p>
                <button className='rounded-lg bg-teal-600 w-36 text-white py-3'>Explore</button>

            </div>
        </div>
    </div>
  )
}

export default Partners