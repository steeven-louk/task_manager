"use client"
import {useState} from 'react';
import LoginComponent from '../components/auth/Login';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import RegisterComponent from '../components/auth/Register';
 
const Auth = () => {
  const [authType, setAuthType] = useState("login")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [error, setError] = useState("")


  const router = useRouter()

 const handleSubmit =async (e:any)=>{
    e.preventDefault();

  if(authType === "login"){
    
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
  }else if(authType === "register"){
    // 
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
 }
 const toggleForm =()=>{
  authType === "login" ? setAuthType("register") : setAuthType("login");
 }
  return (
    <div className=' container grid place-items-center '>
    <form onSubmit={handleSubmit} className='form min-w-fit w-1/3  shadow-lg rounded-lg p-5 border-2 border-red-500'>
       <h2 className='text-center uppercase p-2 font-bold'>{authType}</h2>
       <hr />
      <div className="p-2 gap-5 flex flex-col">
        {authType === "login" ? 
       <LoginComponent email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
         :
       <RegisterComponent username={username} cPassword={cPassword} email={email} password={password} setEmail={setEmail} setUsername={setUsername} setPassword={setPassword} setCPassword={setCPassword} />
      }
      </div>
      <button type="submit" className='p-2 capitalize font-bold bg-green-300 rounded-md w-32 mx-auto block mt-5'>{authType}</button>
        <em>*: is important</em>
        <br />
        <span onClick={toggleForm} className='underline'>your are not account? <em>{authType === "login"? "register" : "login" } </em></span>
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

export default Auth