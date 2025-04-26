'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const Logo = () => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const [content, setContent] = useState('GO')

  useEffect(() => {

    if (isMobile) {
      setContent('GO')
    } else {
      setContent('Gudangorder')
    }
  }, [isMobile])


  return (
    <div className='flex items-center gap-x-2'>
      <Image
        src={"/assets/img/logo/preloader/preloader-icon.svg"}
        alt="Gudangorder logo"
        width={34}
        height={34}
      />
      <h1 className='text-2xl font-bold m-0'>
        {
          content
        }
      </h1>
    </div>
  )
}

export default Logo;
