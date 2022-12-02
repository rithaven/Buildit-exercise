import Image from 'next/image'
import React from 'react'

const InstagramImg = ({socialImg}) => {
  return (
    <div>
        <Image src={socialImg} alt='/' className='w-full h-full' layout='responsive' />
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>


        </div>
    </div>
  )
}

export default InstagramImg