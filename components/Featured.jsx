import React from 'react'
import IgImg4 from '../public/Houses.png';
import FeaturedImg from './FeaturedImg'

const Featured = () => {
  return (
    <div className='flex justify-center p-20'>
        <div className='grid grid-flow-rows w-96 h-80 mt-20 '>
            <p className='text-cyan-400'>Available Properties</p>
            <h1 className='text-xl p-4 font-bold'>Featured Listing</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi,
                 quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.</p>
          
            <button className='rounded-lg bg-cyan-700 text-white w-24 h-10 mt-10'>Explore</button>
            
        </div>
        <div>
        <FeaturedImg socialImg={IgImg4}/>
        </div>
    </div>
  )
}

export default Featured