import React from 'react'


type PROPS ={
    email: string ,
    password: string,
    setEmail: (arg0: string) => void,
    setPassword: (arg0: string) => void
}
const LoginComponent:React.FC<PROPS> = ({email, password, setEmail, setPassword}:PROPS) => {
  return (
    <>
            <div className="input-group flex flex-col">
            <label htmlFor="email">email*</label>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} name='email' placeholder='email' className='input-control p-2 rounded-md border-b-2 border-green-500' />
           </div>
           <div className="input-group flex flex-col">
            <label htmlFor="password">password*</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name='password' placeholder='password' className='input-control p-2 rounded-md border-b-2 border-green-500' />
           </div>
    </>
  )
}

export default LoginComponent