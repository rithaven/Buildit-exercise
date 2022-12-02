import Image from 'next/image'
import React from 'react'

const Projecticons = ( {socialImg}) => {
  return (
    <div className='flex justify-center mb-10'>
        <Image src={socialImg} alt='/'  />
    </div>
  )
}

export default Projecticons