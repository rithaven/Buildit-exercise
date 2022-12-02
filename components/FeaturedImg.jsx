import Image from 'next/image'
import React from 'react'

const FeaturedImg = ({socialImg}) => {
  return (
    <div>
        <Image src={socialImg} alt='/' />
    </div>
  )
}

export default FeaturedImg