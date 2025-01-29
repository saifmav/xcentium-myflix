import React from 'react'
import Image from 'next/image'
import logo from "../assets/images/newflix_bg.png"
import rightCaret from "../assets/icons/right-arrow-backup-2-svgrepo-com.svg"
import Link from 'next/link'
import Header from './Header'


const Hero = () => {

  return (
    <div className='w-full h-[580px] max-[600px]:h-[500px] relative font-[Bebas Neue] text-white border-b-8 border-border-bottom' >
      <div className='bg-gradient-radial bg-black/30 absolute top-0 left-0 from-transparent to-black w-full h-full' />
      <Header />
    </div>
  )
}

export default Hero