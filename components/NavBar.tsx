import React from 'react'
import Image  from 'next/image'
import { UserButton } from '@clerk/nextjs'

const NavBar = () => {
  return (
    <div className='flex justify-between border-b-[1px] shadow-sm'>
        <div className="flex gap-10 items-center p-3 px-10 ">
            <Image src='/logo.png'
            alt='logo'
            width={120}
            height={60} />
            <div className="hidden md:flex gap-6">
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer'>Home</h2>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer'>History</h2>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer'>Help</h2>

            </div>
        </div>
        <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default NavBar