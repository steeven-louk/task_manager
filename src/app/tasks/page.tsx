"use client"
import React,{useState} from 'react'
import Task from './[id]/page';

const T =({setModal})=>{
  return(
    <>
      <form className="modal my-auto mx-auto flex flex-col p-4 bg-gray-500 rounded-md w-1/2 h-[350px] absolute top-0 bottom-0 left-0 right-0 justify-center">
        <div className="modal-head mb-3">
          <button onClick={()=>setModal(false)} className='block ms-auto p-2 rounded-md bg-red-500 w-fit text-white font-bold'>X</button>
        </div>
      <input type="text" placeholder='titre' className='p-2 mb-2 rounded-md  border border-red-500' />
        <textarea name="" placeholder='content' className='p-2 rounded-md border border-red-500' id="" cols="30" rows="10"></textarea>
        <button className='p-2 w-1/2 rounded-md font-bold uppercase transition-all text-white bg-red-600 mt-4 mx-auto hover:bg-red-500'>add task</button>
      </form>
    </>
  )
}

const Tasks = () => {
  const [modal, setModal] = useState(false)
  const showModal =()=>{
    setModal(!modal);
  }

  modal? <Task /> : ''

  return (
    <div className='container relative rounded-md bg-slate-50 p-5'>
      <div className="head flex mb-10 justify-between">
        <div className="day">
          <h2 className="font-bold capitalize">my day</h2>
          <span>December 2020</span>
        </div>
        <button onClick={showModal} className="rounded-md bg-blue-400 w-[7rem] text-white">+ New task</button>
      </div>
      <hr className='mb-5'/>

      <div className="filtre flex gap-6 justify-center">
        <button className='capitalize tracking-widest flex-1 bg-red-500 rounded-md p-2 font-bold text-white mb-5 '>my day</button>
        <button className='capitalize tracking-widest flex-1 bg-red-500 rounded-md p-2 font-bold text-white mb-5 '>all</button>
        <button className='capitalize tracking-widest flex-1 bg-red-500 rounded-md p-2 font-bold text-white mb-5 '>completed</button>
        <button className='capitalize tracking-widest flex-1 bg-red-500 rounded-md p-2 font-bold text-white mb-5 '>important</button>
        <button className='capitalize tracking-widest flex-1 bg-red-500 rounded-md p-2 font-bold text-white mb-5 '>Personal</button>
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

        <div className="task flex cursor-pointer" >
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
        {modal && <T setModal={setModal}/>}
      </div>
    </div>
  )
}

export default Tasks