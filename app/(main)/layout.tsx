'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, ReactNode } from 'react'
import MainNavBar from '../navigation/MainNavBar'


interface MainLayoutProps{
    children:ReactNode
}

export default function MainLayout({children}:MainLayoutProps){
    const router=useRouter()

    useEffect(()=>{
        const token=sessionStorage.getItem('authtoken')
        if(!token){
            router.push('/login')
        }
    },[router])

return(
    <div>
    <MainNavBar />
    {children}
    </div>
)
}