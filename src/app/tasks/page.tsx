"use client"
import React,{useState} from 'react'
import Task from './[id]/page';

const Tasks = () => {
  const [modal, setModal] = useState(false)
  const showModal =()=>{
    setModal(!modal);
  }

  modal? <Task /> : ''

  return (
    <div className='container rounded-md bg-slate-50 p-5'>
      <div className="head flex mb-10 justify-between">
        <div className="day">
          <h2 className="font-bold capitalize">my day</h2>
          <span>December 2020</span>
        </div>
        <button className="rounded-md bg-blue-400 w-[7rem] text-white">+ New task</button>
      </div>

      <div className="task__container gap-6 flex flex-col">
        <div className="task flex">
          <div className="flex-1">
            <h2 className="font-bold">Promotion banner</h2>
            <div className="bottom">
            <span>catego</span> - <span className='capitalize text-md text-blue-500'>today</span>
            </div>
          </div>
          <span className='flex-1 text-end my-auto'>star</span>
        </div>

        <div className="task flex cursor-pointer" onClick={showModal}>
          <div className="flex-1">
            <h2 className="font-bold">Promotion banner</h2>
            <div className="bottom">
            <span>catego</span> - <span className='capitalize text-md text-blue-500'>today</span>
            </div>
          </div>
          <span className='flex-1 text-end my-auto'>star</span>
        </div>

        <div className="task flex">
          <div className="flex-1">
            <h2 className="font-bold">Promotion banner</h2>
            <div className="bottom">
            <span>catego</span> - <span className='capitalize text-md text-blue-500'>today</span>
            </div>
          </div>
          <span className='flex-1 text-end my-auto'>star</span>
        </div>

        <div className="task flex">
          <div className="flex-1">
            <h2 className="font-bold">Promotion banner</h2>
            <div className="bottom">
            <span>catego</span> - <span className='capitalize text-md text-blue-500'>today</span>
            </div>
          </div>
          <span className='flex-1 text-end my-auto'>star</span>
        </div>

        <div className="task flex">
          <div className="flex-1">
            <h2 className="font-bold">Promotion banner</h2>
            <div className="bottom">
            <span>catego</span> - <span className='capitalize text-md text-blue-500'>today</span>
            </div>
          </div>
          <span className='flex-1 text-end my-auto'>star</span>
        </div>

        <div className="task flex">
          <div className="flex-1">
            <h2 className="font-bold">Promotion banner</h2>
            <div className="bottom">
            <span>catego</span> - <span className='capitalize text-md text-blue-500'>today</span>
            </div>
          </div>
          <span className='flex-1 text-end my-auto'>star</span>
        </div>
      </div>
    </div>
  )
}

export default Tasks