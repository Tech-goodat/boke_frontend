import React from 'react'
import Image from 'next/image'
import { FaRegPlayCircle } from "react-icons/fa";
import Link from 'next/link';
import { SiFusionauth } from "react-icons/si";
import { MdPayments } from "react-icons/md";
import { GiOrganigram } from "react-icons/gi";
import { CiWallet } from "react-icons/ci";

const working=[
  {heading:'1. Easy Login',description:'Create your account using your registered identity. This allows us to securely link your billing information in one place.', icon:<SiFusionauth size={30}/>},
  {heading:'2. Centralized Bills',description:'Your payments are gathered into a single dashboard, so you can see what’s due, what’s paid, and what’s coming up.', icon:<GiOrganigram size={30}/>},
  {heading:'3. Efficient payment',description:'Settle your bills in seconds using M-Pesa or your card—fast, secure, and hassle-free.', icon:<MdPayments size={30}/>}
]

const features=[
  {icon:<CiWallet size={30}/>, title:'Two step payment', description:'With a few steps, you get to initiate your payments.'},
  {icon:<CiWallet size={20}/>, title:'Reminders', description:'Deadlines approaching? get reminded to take action.'},
  {icon:<CiWallet size={20}/>, title:'Secure', description:'Secure your data with the most advanced security protocol.'}
]
const Home = () => {
  return (
    <div className='flex flex-col w-full items-center mt-4'>
      <section className='flex flex-col lg:grid lg:grid-cols-2 items-center gap-4'>
        <div className='flex flex-col w-full items-center'>
          <h1 className='text-2xl lg:text-3xl  font-bold'>
            All Your Bills in One Place. Zero Stress. Secure, Smart, and Simple Billing for Everyone.
          </h1>
          <p className='flex mt-3 text-[12px]'>Say goodbye to scattered payments. PayFlow organizes all your bills in one secure dashboard, letting you track and pay everything effortlessly via M-Pesa or card.</p>
           <section className='flex gap-5 mt-6 w-full items-center'>
                <Link href='/login' className='w-40 rounded-sm items-center justify-center flex cursor-pointer p-2 text-[13px] bg-linear-to-r from-[#009f0b] to-[#50da00]'>Get Started</Link>
                <Link href='/demo' className='w-40 rounded-sm cursor-pointer p-2 text-[13px]  border border-amber-100 items-center flex gap-3 justify-center bg-gray-900'><FaRegPlayCircle size={17}/>Request Demo</Link>
             </section>
            
          <Image
            src='/landing.png'
            alt='Logo'
            width={400}
            height={400}
            className='flex lg:hidden'
             />
             
            
        </div>
        
        <div className='hidden items-center justify-center lg:flex'>
          <Image
            src='/landing.png'
            alt='Logo'
            width={400}
            height={500}
            className=''
             />
        </div>
      </section>

    <section className='lg:hidden flex flex-col mt-1 w-full items-center justify-center gap-5'>
      <div>
         <h1 className='flex font-bold text-[30px]'>How It Works</h1>
      </div>
    <section className='flex lg:hidden w-full items-center justify-between gap-5'>

      {working.map((work)=>(
        <div key={work.heading} className=' flex flex-col items-center justify-center'>
          <div className='bg-linear-to-r w-10 h-10 flex items-center justify-center from-[#009f0b] to-[#50da00] rounded-md p-3'>
            {work.icon}
          </div>
          <h1 className=' mt-2 text-[12px] font-bold'>{work.heading}</h1>
          <p className='mt-1 text-[8px] text-center'>{work.description}</p>
        
      </div>
      ))}
      
    </section>
    </section>
    <section className='hidden lg:flex flex-col mt-1 w-full items-center justify-center gap-5'>
      <div>
         <h1 className='flex font-bold text-[35px]'>How It Works</h1>
      </div>
     <section className='flex mt-5 w-full items-center justify-center gap-20'>
      {working.map((work)=>(
        <div key={work.heading} className='w-60 flex flex-col items-center justify-center'>
          <div className='bg-linear-to-r items-center justify-center flex w-10 h-10 from-[#1affb6] to-[#50da00] rounded-md p-3'>
            {work.icon}
          </div>
          <h1 className=' mt-2 font-bold'>{work.heading}</h1>
          <p className='mt-2 text-center text-[12px]'>{work.description}</p>
        
      </div>
      ))}
      
    </section>
    </section>
     <section className='flex flex-col mt-10 w-full items-center justify-center gap-5'>
      <div>
         <h1 className='flex font-bold text-[35px]'>Key Features</h1>
      </div>
     <section className='flex flex-col md:flex-row gap-4  mt-5 w-full items-center justify-between lg:gap-0'>
      {features.map((feature)=>(
        <div key={feature.title} className='w-full md:w-60 bg-gray-900  flex flex-col items-center border border-amber-100 rounded-lg p-2'>
          <div className='flex w-full items-center'>
          <div className='bg-linear-to-r items-center text-gray-900 justify-center flex w-10 h-10 from-[#1affb6] to-[#ffde67] rounded-full p-3'>
            {feature.icon}
          </div>
          </div>
          <h1 className=' mt-2 flex w-full font-bold'>{feature.title}</h1>
          <p className='mt-2 w-full flex text-[12px]'>{feature.description}</p>
        
      </div>
      ))}
      
    </section>
    </section>
    </div>
  )
}

export default Home