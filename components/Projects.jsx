import React from 'react'
import IgImg2 from '../public/icon1.JPG';
import IgImg3 from '../public/icon2.JPG';
import IgImg4 from '../public/icon3.png';
import Projecticons from './Projecticons';

const Projects = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center mb-20' >
        <p className='text-2xl font-bold mb-10'>Innovative Execution</p>
        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 p-4'>
            <div>
               <Projecticons socialImg={IgImg2} />
               <h1 className='text-xl font-bold p-4'>Featured Listing</h1>
               <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. </p>
            </div>

            <div>
               <Projecticons socialImg={IgImg3} />
               <h1 className='text-xl font-bold p-4'>Available Properties</h1>
               <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.  </p>
            </div>

            <div>
               <Projecticons socialImg={IgImg4} />
               <h1 className='text-xl font-bold p-4'>In the News</h1>
               <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>
  )
}

export default Projects