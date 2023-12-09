import React from 'react'

type PROPS ={
    username: string,
    email: string ,
    password: string,
    cPassword: string,
    setEmail: (arg0: string) => void,
    setPassword: (arg0: string) => void,
    setCPassword: (arg0: string) => void,
    setUsername: (arg0: string)=> void,
}
const RegisterComponent = ({username,setUsername,email, password, cPassword, setCPassword, setEmail, setPassword}:PROPS) => {
  return (
    <>
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
    </>
  )
}

export default RegisterComponent