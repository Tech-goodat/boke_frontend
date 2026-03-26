'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

const inputFields=[
  {name:'email', placeholder:'Email', type:'text', style:'outline-none text-[12px] w-full bg-olive-900 p-3 focus:ring-1 focus:ring-[#00d60e] rounded-sm'},
  {name:'password', placeholder:'Enter your password', type:'password', style:'outline-none w-full text-[12px] bg-olive-900 focus:ring-1 focus:ring-[#00d60e] p-3 rounded-sm'},
]

const LogIn = () => {
  const [isOpen, setIsOpen]=useState<{
    password:boolean;
    confirm_password:boolean
  }>({
    password:false,
    confirm_password:false
  })
  const [loginData, setLoginData]=useState({
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    confirm_password:''

  })


  const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{

    const {name, value}=e.target
    setLoginData((prev)=>({
      ...prev,
      [name]:value,
    }))
  }
   const TogglePasswordView=(field: keyof typeof isOpen)=>{
    setIsOpen((prev)=>({
      ...prev,
      [field]:!prev[field]
    }))

  }
  return (
    <div className='flex w-full items-center justifx-center flex-col lg:flex-row'>
       <Image
          src='/signupimage.jpg'
          alt='Logo'
          width={300}
          height={300}
          className='rounded-xl w-150 h-auto mt-8'
        />

        <form className='flex gap-5 lg:w-180 flex-col w-full items-center justify-center lg:ml-20 mt-10'>
          <h1 className='flex w-full text-3xl font-bold'>Sign in to your Account</h1>
          <p className='flex w-full items-center text-[12px] gap-2'>Don't have and account ? <Link href='/signup' className='text-[#00d60e] underline'>Create account</Link></p>
          {inputFields.map((field)=>(
            <div key={field.name} className="relative w-full">
            <input type={field.type==='password' ?isOpen[field.name as keyof typeof isOpen]? 'text' : 'password' :field.type} name={field.name} onChange={handleInputChange} placeholder={field.placeholder} className={field.style}/>
            {field.type==='password'&&(
              <button type='button' onClick={()=>TogglePasswordView(field.name as keyof typeof isOpen)}
              className="absolute flex items-center justify-center text-[#00d60e] cursor-pointer right-3.5 top-2.5 text-xs">
              {isOpen[field.name as keyof typeof isOpen]
                ? <FaRegEyeSlash size={20}/>: <FaEye size={20}/>
              }</button>
            )}
             </div>
          ))}

          <button className='w-full rounded-sm items-center justify-center flex cursor-pointer p-2.5 text-[13px] bg-linear-to-r from-[#009f0b] to-[#50da00]'>Sign in</button>
         <section className='flex w-full items-center justify-center' >
          <hr className='flex text-gray-500 w-full'/>
          <p className='flex w-full items-center text-gray-500 justify-center text-[13px]'>Or Sign in with</p>
          <hr className='flex text-gray-500 w-full'/>
         </section>
         <section className='flex w-full items-center justify-center gap-5'>
          <div className='flex w-full text-[13px] items-center justify-center gap-2 p-3 border cursor-pointer rounded-sm border-gray-500'>
             <Image
          src='/google.png'
          alt='Logo'
          width={10}
          height={10}
          className='rounded-xl w-5'
        />
        Google
        </div>
          <div className='flex w-full text-[13px] items-center justify-center gap-2 p-3 border cursor-pointer rounded-sm border-gray-500'>
               <Image
          src='/apple.png'
          alt='Logo'
          width={10}
          height={10}
          className='rounded-xl w-5'
        />
        Apple
        </div>
         </section>
        </form>
      
    </div>
  )
}

export default LogIn