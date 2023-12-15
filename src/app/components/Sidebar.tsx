"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { MdDashboard } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
 
import { BiLogOut } from "react-icons/bi";

import { IoMdPerson } from "react-icons/io";
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
 import { toast } from 'react-toastify';



 
export const Sidebar = () => {
 
    const username = JSON.parse(localStorage.getItem('username') || '{}')
    const pathName = usePathname();
    const router = useRouter();

    const logout =()=>{
        const sure = confirm("are you sure");
        if(sure){
            localStorage.removeItem("username")
            localStorage.removeItem("id")
            localStorage.removeItem("token")
            toast.success('🦄 Wow so easy!')
           
        return;
    }
}

    return (
        <div className='sidebar rounded-md relative bg-red-800 text-white flex flex-col  h-[calc(100vh-.5rem)] w-[3rem] md:w-[11em]'>
            <div className='font-bold mx-auto relative top-2 flex'>
                <Image src={"/assets/logo.png"} alt='logo' width={100} className=' rounded-full object-cover' height={100}/>
           </div>
           <div className="list-link flex h-full">
            <nav className="link flex flex-col my-auto w-full">
               <ul className='capitalize transition'>
                    <li className={`nav-item ps-3 ${pathName === "/" ? "border-r-4 bg-slate-500" : ""} md:hover:border-r-4 text-xl leading-10 md:hover:bg-slate-500 border-green-500 `}><Link href="/" className="nav-link flex gap-2"><MdDashboard className=" top-[10px] relative text-2xl "/><span className=" hidden md:block">dashboard</span></Link></li>
                     <li className={`nav-item ps-3 ${pathName === "/tasks" ? "border-r-4 bg-slate-500" : ""} md:hover:border-r-4 text-xl leading-10 md:hover:bg-slate-500 border-green-500`}><Link href="/tasks" className="nav-link flex gap-2"><GoTasklist className="top-[10px] relative text-2xl"/><span className="hidden md:block">my tasks</span></Link></li>
                    <li className={`nav-item ps-3 ${pathName === "/projet" ? "border-r-4 bg-slate-500" : ""} md:hover:border-r-4 text-xl leading-10 md:hover:bg-slate-500 border-green-500 `}><Link href="/projet" className="nav-link gap-2 flex"><AiOutlineFundProjectionScreen className="top-[10px] relative text-2xl"/><span className="hidden md:block">projets</span></Link></li>
                    <li className="nav-item ps-3 mt-2 md:hover:border-r-4 text-xl leading-10 md:hover:bg-slate-500 border-green-500 "><a href="#" className="nav-link gap-2 flex"><FaCalendarAlt className="top-[10px] relative text-2xl"/><span className="hidden md:block">calendar</span></a></li>
                     
                </ul>
            </nav>
           </div>
           <div className="sidebar-user ">
           <div onClick={logout} className="btn-group flex gap-2 capitalize p-1 cursor-pointer bg-[#24D26D]">
           <BiLogOut className="top-[3px] text-xl relative"/>
            <button type='button' > <span className='hidden md:block'>logout</span> </button>
           </div>
           <div className="user-container mb-5 flex gap-2 bg-red-500 p-2">
            <span className="top-[3px] relative text-xl md:m-none"><IoMdPerson/></span>
            <span className="hidden md:block">{username && username}</span>
           </div>
           </div>
        </div>
    )
}
