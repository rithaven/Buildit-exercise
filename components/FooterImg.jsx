import Image from 'next/image'
import React from 'react'

const FooterImg = ({socialImg}) => {
  return (
    <div>
        <Image src={socialImg} alt='/' />
    </div>
  )
}

export default FooterImg