
import IgImg1 from '../public/face.JPG'
import IgImg2 from '../public/insta.JPG'
import React from 'react'
import FooterImg from './FooterImg'

const Footer = () => {
  return (
    <div className='bg-cyan-700 w-full text-white'>
        <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 p-4 '>
            <div className='grid grid-rows-3'>
                <h1 className=' text-xl'>Buildit</h1>
                <p>Development company, 2022</p>
                <p>Site design – ⏰ Alarm</p>
            </div> 

            <div className='grid grid-rows-5'>
                <p>Service1</p>
                <p>Service2</p>
                <p>Service3</p>
                <p>Service4</p>
                <div className='flex gap-2'>
                    <FooterImg socialImg={IgImg1}/>
                    <FooterImg socialImg={IgImg2}/>
                </div>
            </div> 

            <div className='grid grid-rows-4'>
                <p>About us</p>
                <p>Services</p>
                <p>Projects</p>
                <p>Contact</p>
              
            </div> 
            <div className='grid grid-rows-6'>
                <p>Get in touch</p>
                <p>60 Manor Station St. Fairport</p>
                <p> NY 14450</p>
                <p>708-790-0000</p>
                <p>sales@buildit.site</p>
                <p>Contact</p>
              
            </div>
        </div>
        

    </div>
  )
}

export default Footer