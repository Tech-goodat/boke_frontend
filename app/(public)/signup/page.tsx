'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

const inputFields=[
  {name:'email', placeholder:'Email', type:'text', style:'outline-none text-[12px] w-full bg-olive-900 p-3 focus:ring-1 focus:ring-[#00d60e] rounded-sm'},
  {name:'password', placeholder:'Enter your password', type:'password', style:'outline-none w-full text-[12px] bg-olive-900 focus:ring-1 focus:ring-[#00d60e] p-3 rounded-sm'},
  {name:'confirm_password', placeholder:'Confirm password', type:'password', style:'outline-none w-full text-[12px] focus:ring-1 focus:ring-[#00d60e] bg-olive-900 p-3 rounded-sm'}
]

const SignUp = () => {
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
          src='/loginimage.jpg'
          alt='Logo'
          width={400}
          height={500}
          className='rounded-xl w-150 h-auto mt-8'
        />

        <form className='flex gap-5 lg:w-180 flex-col w-full items-center justify-center lg:ml-20 mt-10'>
          <h1 className='flex gap-2 w-full text-3xl font-bold'>Create a <Link href='/'>Tsavou<span className='text-[#00d60e]'>Rite</span></Link> Account</h1>
          <p className='flex w-full items-center text-[12px] gap-2'>Already have and account ? <Link href='/login' className='text-[#00d60e] underline'>Sign in</Link></p>
          <section className='flex w-full items-center gap-4'>
            <input type='text' name='first_name' value={loginData.first_name} onChange={handleInputChange} placeholder='First name' className='outline-none focus:ring-1 focus:ring-[#00d60e] w-full text-[12px] bg-olive-900 p-3 rounded-sm'/>
            <input type='text' name='last_name' value={loginData.last_name} onChange={handleInputChange} placeholder='Last name' className='outline-none focus:ring-1 focus:ring-[#00d60e] text-[12px] w-full bg-olive-900 p-3 rounded-sm'/>
          </section>
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

          <button className='w-full rounded-sm items-center justify-center flex cursor-pointer p-2.5 text-[13px] bg-linear-to-r from-[#009f0b] to-[#50da00]'>Create Account</button>
         <section className='flex w-full items-center justify-center' >
          <hr className='flex text-gray-500 w-full'/>
          <p className='flex w-full items-center text-gray-500 justify-center text-[13px]'>Or register with</p>
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

export default SignUp