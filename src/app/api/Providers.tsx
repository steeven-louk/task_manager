"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// import { SessionProvider } from "next-auth/react"


export const AuthProvider = ({children}:any) => {
  const router =  useRouter();
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        const id = JSON.parse(localStorage.getItem("id"));
        if(!token && !id){
            return router.replace("/auth/login")
        }
        return router.replace("/");
    }, [router])
    return {children}
}

// export const AuthProvider =({children}:any) =>{
//     return <SessionProvider>{children}</SessionProvider>
// }