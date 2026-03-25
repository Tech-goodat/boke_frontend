'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { IoIosClose } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";



const GlobalNavbar = () => {
    const [isOpen, setIsOpen]=useState(false)
    const Toggle=()=>{
        setIsOpen((prev)=>!prev)
    }
    const pathname=usePathname()
    const navLinks=[
        {name:'Home', href:'/'},
        {name:'About', href:'/about'},
        {name:'Contact', href:'/contact'},
        {name:'Sign in', href:'/login'}
    ]
  return (
    <>
    <div className='hidden sm:flex md:flex lg:flex  w-full justify-between items-center'>
        <section className='flex items-center gap-2'>
            <Image
            src='/landing.png'
            alt='Logo'
            width={30}
            height={30}
             />
             <Link href='/'>Tsavou<span className='text-[#00d60e]'>Rite</span></Link>
        </section>
        <section>
        <ul className='flex w-full gap-6 items-center'>
            {
                navLinks.map((link)=>{
                    const isActive=pathname===link.href
                    return(
                    <li key={link.href}>
                        <Link className={`text-[12px] px-4 py-2 rounded-full hover:text-gray-700  ${isActive ? 'bg-[#00d60e] text-gray-700' : 'hover:bg-[#7efa86] hover:text-black'}`} href={link.href}>
                        {link.name}
                        </Link>
                    </li>
                    )
                })
            }
        </ul>
        </section>

    </div>
    <section className='flex sm:hidden md:hidden lg:hidden w-full items-center justify-between relative'>
        <section className='flex items-center gap-2'>
            <Image
            src='/landing.png'
            alt='Logo'
            width={30}
            height={30}
             />
             <Link href='/'>Tsavou<span className='text-[#00d60e]'>Rite</span></Link>
        </section>
    <button className=' text-[#00ff11]' onClick={Toggle}>
            {isOpen ? <IoIosClose size={25} /> : <HiBars3 size={22}/>}
    </button>
            {
                isOpen && 
                <section className='absolute top-full right-0 mt-2 w-48 bg-gray-900 py-7 rounded-md'>
        <ul className='flex flex-col w-full gap-6 items-center'>
            {
                navLinks.map((link)=>{
                    const isActive=pathname===link.href
                    return(
                    <li className='flex w-full px-2 ' key={link.href}>
                        <Link className={`text-[12px] w-full px-4 py-2 rounded-md hover:text-gray-700  ${isActive ? 'bg-[#00d60e] text-gray-700 border border-[#dfff51]' : 'hover:bg-[#7efa86] hover:text-black hover:border hover:border-[#dfff51]'}`} 
                        href={link.href}
                        onClick={()=>setIsOpen(false)}
                        >
                        {link.name}
                        </Link>
                    </li>
                    )
                })
            }
        </ul>
        </section>
            }
    </section>
    </>
  )
}

export default GlobalNavbar