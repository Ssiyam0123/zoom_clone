import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-black px-6 lg:px-10 bg-dark-1'>
      <Link href={'/'} className='flex items-center gap-1'>
        <Image src={'/icons/logo.svg'}
        width={32}
        height={32}
        alt='yoom logo'
        />
        <p className='text-[26px] text-white font-extrabold max-sm:hidden'>Yoom</p>
      </Link>
      <div className='flex-between gap-5'>
        {/* clerk management */}
        <MobileNav/>

      </div>
    </nav>
  )
}

export default Navbar