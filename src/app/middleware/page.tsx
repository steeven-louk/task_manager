 "use client"

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
 import Auth from '../auth/pages';


const UserMiddleware = ({children}:any) => {
    const router =  useRouter();
    const [isLogin, setIsLogin] = useState(false);
     const token = useRef(JSON.parse(localStorage.getItem("token") || '{}'));
    useEffect(() => {
        //  ref = JSON.parse(localStorage.getItem("token"));
        const id = JSON.parse(localStorage.getItem("id") || '{}');
        if(!token.current || token.current === "" && !id){
          return setIsLogin(false)
            // return router.replace("/auth/login")
        }
         setIsLogin(true)
      return router.replace("/");
    }, [router, token, isLogin])
    return (
 <>
     {/* {!token.current ? <Login/> : */}
{isLogin === true ?  children : <Auth/>}
  {/* {children} */}
{/* } */}
 </>
  )
}

export default UserMiddleware

