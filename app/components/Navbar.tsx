import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'

const Navbar = () => {
  const{user}= auth()
  console.log(user)
  return (
    <nav className='flex-between fixed z-50 w-full bg-black px-6 lg:px-10 bg-dark-1 mt-7'>
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
        <div className='flex-between gap-5'>
          <SignedIn>
            <UserButton/>
          </SignedIn>

        </div>
        <MobileNav/>

      </div>
    </nav>
  )
}

export default Navbar