//@ts-nocheck
 "use client"

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Login from '../auth/login/page';


const UserMiddleware = ({children}:any) => {
    const router =  useRouter();
    const [isLogin, setIsLogin] = useState(false);
    // let token;
    const token = useRef(JSON.parse(localStorage.getItem("token")));
    useEffect(() => {
        //  ref = JSON.parse(localStorage.getItem("token"));
        const id = JSON.parse(localStorage.getItem("id"));
        if(!token.current || token.current === "" && !id){
            // return router.replace("/auth/login")
            return setIsLogin(false)
        }
        setIsLogin(true)
        return router.push("/");
    }, [router, token])
    console.log(token.current)
   return (
 <>
     {/* {!token.current ? <Login/> : */}
{token.current ?  children : <Login/>}
  {/* {children} */}
{/* } */}
 </>
  )
}

export default UserMiddleware

