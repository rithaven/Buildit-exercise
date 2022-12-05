import Image from 'next/image'
import React from 'react'

const InstagramImg = ({socialImg}) => {
  return (
    <div>
        <Image src={socialImg} alt='/' className='w-full h-full' layout='responsive' />
    </div>
  )
}

export default InstagramImg