'use client'

import Image from 'next/image';
import React, { useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const Logo = () => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  useEffect(() => {
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
          isMobile ? "GO" : "Gudangorder"
        }
      </h1>
    </div>
  )
}

export default Logo;
