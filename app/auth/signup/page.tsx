'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const SignUp = () => {
    const [formData, setFormData]=useState({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        confirm_password:''
    })
    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target
        setFormData((prev)=>({
            ...prev, [name] : value
        }))

    }
  return (
    <div className='flex flex-col w-full items-xenter p-8'>
        <div className='flex flex-col w-full items-center lg:grid lg:grid-cols-2'>
            <section className='flex w-full items-center justify-center' >
                 <Image 
                          src='/HomePic.png'
                          alt='home pic'
                          width={200}
                          height={200}
                          className='w-80 lg:w-130'
                         />
            </section>
            <section className='flex w-full items-center flex-col' >
                <header className='flex w-full items-center justify-center flex-col'>
                    <h1 className='text-3xl'>Create an Account</h1>
                    <p className='text-[12px]'> Already have an account? <Link className='underline text-green-700' href='/auth/login'>Log in</Link></p>
                </header>

                <form className='flex mt-5 gap-5 flex-col w-full items-center justify-center'>
                    <input type='text' name='first_name' value={formData.first_name} onChange={handleInputChange} placeholder='First Name' className='flex px-3 text-[14px] w-80 p-2 rounded-full outline-none border border-gray-200'/>
                    <input type='text' name='last_name' value={formData.last_name} onChange={handleInputChange} placeholder='Last Name' className='flex px-3 text-[14px] w-80 p-2 rounded-full outline-none border border-gray-200'/>
                    <input type='text' name='email' value={formData.email} onChange={handleInputChange} placeholder='email' className='flex text-[14px] px-3 w-80 p-2 rounded-full outline-none border border-gray-200'/>
                    <input type='password' name='password' value={formData.password} onChange={handleInputChange} placeholder='Password' className='flex px-3 text-[14px] w-80 p-2 rounded-full outline-none border border-gray-200'/>
                    <input type='password' name='confirm_password' value={formData.confirm_password} onChange={handleInputChange} placeholder='Confirm password' className='flex px-3 text-[14px] w-80 p-2 rounded-full outline-none border border-gray-200'/>
                    <button className='flex w-80 items-center justify-center text-gray-700 cursor-pointer text-[12px] bg-linear-to-r rounded-full p-2 from-[#00d471] to-[#23dfee]'>Create Account</button>
                    <p className='flex w-full items-center justify-center'>Or sign up with</p>
                    <section className='w-full gap-3 cursor-pointer items-center justify-center flex'>
                        <Image 
                          src='/google.png'
                          alt='home pic'
                          width={20}
                          height={20}
                          className='w-5'
                         />
                        <span>Google</span> 
                    </section>
                </form>

            </section>
        </div>
    </div>
  )
}

export default SignUp