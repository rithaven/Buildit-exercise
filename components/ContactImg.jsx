import Image from 'next/image'
import React from 'react'

const ContactImg = ({socailImg}) => {
  return (
    <div>
        <Image src={socailImg} alt='/'/>
    </div>
  )
}

export default ContactImg