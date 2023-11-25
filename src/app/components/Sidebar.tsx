import Link from 'next/link'
import React from 'react'

interface Props {
    
}

export const Sidebar = (props: Props) => {
    return (
        <div className='sidebar rounded-md  bg-red-800 text-white flex flex-col h-[calc(100vh-.5rem)] w-[3rem] md:w-40'>
           <div className="logo flex">
            <span className='font-bold mx-auto flex'>logo</span>
           </div>
           <div className="list-link flex h-full">
            <nav className="link flex flex-col my-auto w-full">
               <ul className='capitalize transition'>
                    <li className="nav-item ps-3 hover:border-r-2 text-xl leading-10 hover:bg-slate-500 border-green-500"><Link href="/" className="nav-link hidden md:block">dashboard</Link></li>
                    <li className="nav-item ps-3 hover:border-r-2 text-xl leading-10 hover:bg-slate-500 border-green-500"><Link href="/tasks" className="nav-link hidden md:block">my tasks</Link></li>
                    <li className="nav-item ps-3 hover:border-r-2 text-xl leading-10 hover:bg-slate-500 border-green-500"><a href="#" className="nav-link hidden md:block">projets</a></li>
                    <li className="nav-item ps-3 hover:border-r-2 text-xl leading-10 hover:bg-slate-500 border-green-500"><a href="#" className="nav-link hidden md:block">calendar</a></li>
                    <li className="nav-item hidden px-3 md:flex justify-between mt-5">
                        <span className="nav-link">mode</span>
                        <span className=''>n</span>
                    </li>
                </ul>
            </nav>
           </div>
           <div className="user mb-5 hidden md:block bg-red-500 p-2">
            <span>username</span>
           </div>
        </div>
    )
}
