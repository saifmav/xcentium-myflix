"use client"
import Image from 'next/image'
import React from 'react'
import homeIcon from "../assets/icons/home_icon.svg"
import Link from 'next/link'

const Header = () => {
    return (
        <>
        <div className='absolute top-0 left-0 w-full z-10'>
            <nav className='w-full flex items-center justify-between text-white p-4 max-w-5xl mx-auto bg-gradient-to-b from-black'>
                <Link href="/">
                    <h1 className='text-4xl font-bold text-primary cursor-pointer'>MYFLIX</h1>
                </Link>
                <div className='flex items-center justify-center gap-4 text-sm font-semibold'>
                    <div className='w-8 h-8 max-[500px]:block hidden rounded-full overflow-hidden'>
                        <Image src={homeIcon} alt='home' className='object-cover w-full h-full' />
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Header;
