import React from 'react'
// import { FaGoogle } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';

const Login = () => {
  return (
    <div className='container grid place-items-center '>
        <form action="" className='form min-w-fit w-1/3  shadow-lg rounded-lg p-5 border-2 border-red-500'>
           <h2 className='text-center uppercase p-2 font-bold'>Login</h2>
           <hr />
          <div className="p-2 gap-5 flex flex-col">

           <div className="input-group flex flex-col">
            <label htmlFor="email">email*</label>
            <input type="email" name='email' placeholder='email' className='input-control p-2 rounded-md border-b-2 border-green-500' />
           </div>
           <div className="input-group flex flex-col">
            <label htmlFor="password">password*</label>
            <input type="password" name='password' placeholder='password' className='input-control p-2 rounded-md border-b-2 border-green-500' />
           </div>
           
          </div>
          <button type="submit" className='p-2 capitalize font-bold bg-green-300 rounded-md w-32 mx-auto block mt-5'>login</button>
            <em>*: is important</em>
            <br />
            <Link href={"/auth/register"} className='underline'>your are not account? <em>register</em></Link>
        </form>
        <div className="box relative -top-10">
            <div className="separator flex gap-2 justify-center">
                <span className='w-[100px] h-[2px] bg-red-500' />
                <em className='relative -top-3'>OR</em>
                <span className='w-[100px] h-[2px] bg-red-500 ' />
            </div>
            <span className='mt-2 text-2xl w-fit'> <FcGoogle className="mx-auto block  cursor-pointer"/></span>
        </div>
    </div>
  )
}

export default Login