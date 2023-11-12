import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="head w-full ">
            <div className="date justify-between flex align-baseline">
                <span className='font-extrabold'>Today, 24 July</span>
                <div className="user inline-flex gap-3">
                    <span className='border p-3'>img</span>
                    <span>name</span>
                </div>
            </div>
            <div className="thumbnail rounded-md bg-red-300 p-4">
                <h2>Welcome back to your</h2>
                <h1 className='text-4xl font-bold mt-3'>Daily task manager</h1>
            </div>
        </div>
    </header>
  )
}

export default Header