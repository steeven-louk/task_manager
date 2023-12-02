"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { MdDashboard } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
// import { FaSun } from "react-icons/fa";
// import { FaMoon } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import Image from 'next/image';



interface Props {
    username: string
}

export const Sidebar = () => {

    const username = JSON.parse(localStorage.getItem('username'))

    return (
        <div className='sidebar rounded-md  bg-red-800 text-white flex flex-col  h-[calc(100vh-.5rem)] w-[3rem] md:w-[11em]'>
            <div className='font-bold mx-auto relative top-2 flex'>
                <Image src={"/assets/logo.png"} alt='' width={100} className=' rounded-full object-cover' height={100}/>
           </div>
           <div className="list-link flex h-full">
            <nav className="link flex flex-col my-auto w-full">
               <ul className='capitalize transition'>
                    <li className="nav-item ps-3 md:hover:border-r-4 text-xl leading-10 md:hover:bg-slate-500 border-green-500 flex gap-2"><MdDashboard className=" top-[10px] relative text-2xl "/><Link href="/" className="nav-link hidden md:block">dashboard</Link></li>
                    <li className="nav-item ps-3 my-2 md:hover:border-r-4 text-xl leading-10 md:hover:bg-slate-500 border-green-500 flex gap-2"><GoTasklist className="top-[10px] relative text-2xl"/><Link href="/tasks" className="nav-link hidden md:block">my tasks</Link></li>
                    <li className="nav-item ps-3 md:hover:border-r-4 text-xl leading-10 md:hover:bg-slate-500 border-green-500 flex gap-2"><AiOutlineFundProjectionScreen className="top-[10px] relative text-2xl"/><a href="#" className="nav-link hidden md:block">projets</a></li>
                    <li className="nav-item ps-3 mt-2 md:hover:border-r-4 text-xl leading-10 md:hover:bg-slate-500 border-green-500 flex gap-2"><FaCalendarAlt className="top-[10px] relative text-2xl"/><a href="#" className="nav-link hidden md:block">calendar</a></li>
                    {/* <li className="nav-item hidden px-3 md:flex justify-between mt-5">
                        <span className="nav-link">mode</span>
                        <span className='top-[6px] relative'>
                           {mode === "sun" ? <FaMoon/> : <FaSun/>}
                        </span>
                    </li> */}
                </ul>
            </nav>
           </div>
           <button onClick={()=>signOut()}>logout </button>
           <div className="user mb-5 flex gap-2 bg-red-500 p-2">
            <span className="top-[3px] relative md:m-none"><IoMdPerson/></span>
            <span className="hidden md:block">{username && username}</span>
           </div>
        </div>
    )
}
