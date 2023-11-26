"use client"
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import React,{useState} from 'react';
import axios from "axios";
import {useRouter} from "next/navigation"

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()

  const handleSubmit =async (e:any)=>{
    e.preventDefault();

    if(password !== cPassword){
      setError("le mot de passe ne concorde pas");
      return ;
    }

    if(password.length < 5){
      setError("le mot de passe doit etre superieur à 5");
      return;
    }

    if(!username || !email || !password){
      setError("tout les champs sont requis");
      return;
    }
    try {
      const data = await axios.post('/api/auth/register',{
        username,
        email,
        password
      })
      if(data.status === 201){
        console.log(data);
        setUsername("");
        setEmail("");
        setPassword("")
        setCPassword("");
        router.push("/auth/login");
        
      }
      if(data.status === 400){
        console.log(data.data.message);
        setError(data.data.message)
        return;
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='container grid place-items-center '>
        <form onSubmit={handleSubmit} className='form min-w-fit w-1/3  shadow-lg rounded-lg p-5 border-2 border-red-500'>
           <h2 className='text-center uppercase p-2 font-bold'>register</h2>
           <hr />
          <div className="p-2 gap-5 flex flex-col">
          <div className="input-group flex flex-col">
            <label htmlFor="username">username*</label>
            <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} name='username' placeholder='username' className='input-control p-2 rounded-md border-b-2 border-green-500' />
           </div>
           <div className="input-group flex flex-col">
            <label htmlFor="email">email*</label>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} name='email' placeholder='email' className='input-control p-2 rounded-md border-b-2 border-green-500' />
           </div>
           <div className="input-group flex flex-col">
            <label htmlFor="password">password*</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name='password' placeholder='password' className='input-control p-2 rounded-md border-b-2 border-green-500' />
           </div>
           <div className="input-group flex flex-col">
            <label htmlFor="cpassword">confirm password*</label>
            <input type="password" value={cPassword} onChange={(e)=> setCPassword(e.target.value)} name='cPassword' placeholder='confirm password' className='input-control p-2 rounded-md border-b-2 border-green-500' />
           </div>
          </div>
          <button type="submit" className='p-2 capitalize font-bold bg-green-300 rounded-md w-32 mx-auto block mt-5'>register</button>
            <em>*: is important</em>
            <br />
            <Link href={"/auth/login"} className='underline'>your are account? <em>login</em></Link>
            {error && <span className="p-2 text-red-500">{error}</span>}

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

export default Register