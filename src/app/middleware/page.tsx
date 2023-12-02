
"use client"
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Login from '../auth/login/page';


const UserMiddleware = ({children}:any) => {
    const router =  useRouter();
    // let token;
    const token = useRef(localStorage.getItem("token"))
    useEffect(() => {
        //  ref = JSON.parse(localStorage.getItem("token"));
        const id = JSON.parse(localStorage.getItem("id"));
        if(!token.current && !id){
            return router.replace("/auth/login")
        }
        return router.push("/");
    }, [router])
    console.log(token.current)
   return (
 <>
     {/* {!token.current ? <Login/> : */}
  {children}
{/* } */}
 </>
  )
}

export default UserMiddleware

