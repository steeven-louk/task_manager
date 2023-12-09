"use client"
import React,{useState} from 'react'
// import { FaGoogle } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import axios from 'axios';
import {useRouter} from "next/navigation"
import { toast } from 'react-toastify';


const Login = () => {

  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()

 const handleSubmit =async (e:any)=>{
    e.preventDefault();

  
    if(password.length < 5){
      setError("le mot de passe doit etre superieur à 5");
      return;
    }

    if(!email || !password){
      setError("tout les champs sont requis");
      return;
    }
    try {
      const data = await axios.post('/api/auth/login',{
        email,
        password
      })
      if(data.status === 200){
        
        console.log('login',data);
        localStorage.setItem('id', JSON.stringify(data?.data.data.id))
        localStorage.setItem('username', JSON.stringify(data?.data.data.username))
        localStorage.setItem('token', JSON.stringify(data?.data.token))
        setEmail("");
        setPassword("")
        toast.success(`Bienvenu ${data?.data.data.username}`);
        router.push('/');

        
      }
      if(data.status === 400){
        console.log(data?.data.response?.data.message);
        setError(data.data.response.data.message)
        return;
      }

    } catch (error) {
      console.log(error)
    }
  } 


  return (
    <div className=' container grid place-items-center '>
        <form onSubmit={handleSubmit} className='form min-w-fit w-1/3  shadow-lg rounded-lg p-5 border-2 border-red-500'>
           <h2 className='text-center uppercase p-2 font-bold'>Login</h2>
           <hr />
          <div className="p-2 gap-5 flex flex-col">

           <div className="input-group flex flex-col">
            <label htmlFor="email">email*</label>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} name='email' placeholder='email' className='input-control p-2 rounded-md border-b-2 border-green-500' />
           </div>
           <div className="input-group flex flex-col">
            <label htmlFor="password">password*</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name='password' placeholder='password' className='input-control p-2 rounded-md border-b-2 border-green-500' />
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