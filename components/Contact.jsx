import React from 'react';
import IgImg1 from '../public/call.JPG'
import IgImg2 from '../public/message.JPG'
import ContactImg from './ContactImg'

const Contact = () => {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-2 p-20'>
        <div>

          <div className='grid '>
            <p className='text-cyan-400 mb-2'>Contact</p>
            <h1 className=' text-xl mb-2'>Get in Touch</h1>
            <div className='flex gap-3'>
                <div className='grid grid-rows-3 gap-5'> 
                    <ContactImg socailImg={IgImg1}/>
                    <ContactImg socailImg={IgImg2}/>
                    <ContactImg socailImg={IgImg2}/>
                </div>

                <div className='grid gap-2'>
                  <div> 
                    <p>Tel</p>
                    <p>708-790-0000</p>
                  </div>
                    
                  <div>
                    <p>Email</p>
                    <p>sales@buildit.site</p>
                  </div>
                    
                  <div>
                      <p>Office</p>
                      <p>60 Manor Station St.</p>
                      <p>Fairport, NY 14450</p>
                  </div>
                  
                    
                </div>
            </div>
           
          
          </div>
        </div>
        
        <div className='grid p-4 border shadow bg-slate-200'>
            
             <div className='flex gap-5 mb-4'>
                <div className='grid gap-1'>
                    <p>Name</p>
                    <input type="text" className='w-40'/>
                </div>
                
                <div className='grid gap-1'>
                    <p>Email</p>
                    <input type="text" className='w-40'/>
                </div>
             </div>

             <div className='grid gap-2'>
                <p>Subject</p>
                <textarea name="" id="" cols="30" rows="5">  </textarea>
                <button className='rounded-lg bg-cyan-700 text-white p-2'>Send message</button>
             </div>
    
          

          

        
        </div>

      </div>
    </div>
  )
}

export default Contact