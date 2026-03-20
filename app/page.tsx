import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Home = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center p-6'>
      <div className='flex flex-col w-full items-center lg:grid lg:grid-cols-2'>
        <section className='flex w-full items-center justify-center flex-col'>
          <section className='flex w-full flex-col items-center'>
          <h1 className='flex text-3xl lg:text-4xl'>Modern, Payment Management</h1>
          <h3 className='text-xl clear-start flex'>Spare the hustle for another day !</h3>
          </section>
          <section className='flex w-full items-center justify-center mt-5'>
            <Link href='/auth/signup' className='flex items-center justify-center text-gray-700 cursor-pointer text-[12px] bg-linear-to-r rounded-full p-2 w-50 from-[#00d471] to-[#23dfee] '>Create Account</Link>          
          </section>
        </section>
        <section className='flex w-full items-center justify-center'>
          <Image 
          src='/HomePic.png'
          alt='home pic'
          width={200}
          height={200}
          className='w-80 lg:w-130'
         />
        </section>
      </div>
    </div>
  )
}

export default Home