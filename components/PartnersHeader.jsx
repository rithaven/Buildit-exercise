import Image from 'next/image'
import React from 'react'

const PartnersHeader = ({socailImg}) => {
  return (
    <div>
        <Image src={socailImg} alt='/'/>
    </div>
  )
}

export default PartnersHeader