'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const LogIn = () => {
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
                    <p className='text-[12px]'> Already have an account? <Link className='underline text-green-700' href='/auth/signup'>Sign up</Link></p>
                </header>

                <form className='flex mt-5 gap-5 flex-col w-full items-center justify-center'>
                    <input type='text' name='email' value={formData.email} onChange={handleInputChange} placeholder='email' className='flex text-[14px] w-80 px-3 p-2 rounded-full outline-none border border-gray-200'/>
                    <input type='password' name='password' value={formData.password} onChange={handleInputChange} placeholder='Password' className='flex px-3 text-[14px] w-80 p-2 rounded-full outline-none border border-gray-200'/>
                    <button className='flex w-80 items-center justify-center text-gray-700 cursor-pointer text-[12px] bg-linear-to-r rounded-full p-2 from-[#00d471] to-[#23dfee]'>Sign In</button>
                    <p className='flex w-full items-center justify-center'>Or sign in with</p>
                                        <section className='w-full gap-3 cursor-pointer items-center justify-center flex'>
                                            <Image 
                                              src='/google.png'
                                              alt='home pic'
                                              width={20}
                                              height={20}
                                              className='w-5 lg:w-130'
                                             />
                                            <span>Google</span> 
                                        </section>
                </form>

            </section>
        </div>
    </div>
  )
}

export default LogIn