"use client"
import React,{useEffect, useState} from 'react'
import Task from './[id]/page';
import axios from 'axios';


type  area={
  setModal:any,
}
const T =({setModal}:area)=>{


  return(
    <>
      <form className="modal my-auto mx-auto flex flex-col p-3 bg-gray-500 rounded-md max-w-[20rem] w-full h-fit absolute top-0 bottom-0 left-0 right-0 justify-center">
        <div className="modal-head mb-2">
          <button type='button' onClick={()=>setModal(false)} className='block ms-auto px-2 rounded-md bg-red-500 w-fit text-white font-bold'>X</button>
        </div>
        <hr />
      <div className="form-group flex flex-col ">
        <label htmlFor="title">Title</label>
        <input type="text" name='title' placeholder='titre' className='p-2 mb-2 rounded-md  border border-red-500' />
      </div>
      <div className="form-group flex flex-col my-5">
        <label htmlFor="description">Description</label>
        <textarea name="description" placeholder='content'  className='p-2 rounded-md border border-red-500'></textarea>
      </div>
      <div className="form-group flex flex-col">
        <label htmlFor="date">Date</label>
        <input type='date' name="date" className='p-2 rounded-md border border-red-500'/>
      </div>

      <div className="form-group flex justify-between w-1/2 mt-3">
        <label htmlFor="completed">toggle completed</label>
        <input type='checkbox' name="completed" className='p-2' ></input>
      </div>
      <div className="form-group flex justify-between w-1/2">
        <label htmlFor="important">toggle important</label>
        <input type='checkbox' name="important" className='p-2' ></input>
      </div>
        <button type="submit" className='p-2 w-1/2 rounded-md font-bold uppercase transition-all text-white bg-red-600 mt-4 ms-auto hover:bg-red-500'>create task</button>
      </form>
    </>
  )
}

const Tasks = () => {
  const [modal, setModal] = useState(false)

  const [task, setTasks] = useState([]);


  useEffect(() => {
    const getTasks =async()=>{
      try {
       const data = await axios.get("/api/task");
       if(data.status === 200){
         setTasks(data.data.tasks);
        }
      } catch (error) {
         console.log(error)
      }
     }
  
     getTasks();
  }, [])
  const showModal =()=>{
    setModal(!modal);
  }

  

  return (
    <div className='container relative rounded-md bg-slate-50 p-4'>
      <div className="head flex mb-5 justify-between">
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
        {/* <button className='capitalize tracking-widest flex-1 bg-red-500 rounded-md p-2 font-bold text-white mb-5 '>Personal</button> */}
      </div>
      <div className="task__container overflow-y-scroll flex flex-wrap w-full gap-3 justify-center h-[calc(100vh-12rem)]">
       {task?.map((item:any)=>(
        <>
             <div className="card p-4 border-2 rounded-xl justify-between flex flex-col overflow-hidden text-white shadow max-w-[20%] w-[100%] h-[12rem] bg-red-500">
          <div className="card-body cursor-pointer overflow-hidden">
          <h5 className="title text-sm font-bold mb-3">
                {item.title}
               </h5>
                <div className="card-text  overflow-hidden">
                <p className="content text-xs text-white text-ellipsis overflow-hidden ... ">
                  Magnam doloremque eos nisi esse nemo necessitatibus in consequuntur omnis.
               </p>
                </div>
          </div>
               <div className="card-footer mt-2 flex justify-between align-baseline">
                <span className="status p-1 w-32 text-sm text-center capitalize font-bold rounded-full text-white bg-green-500">incomplete</span>
               <div className="action inline-flex gap-3 my-auto">
                <span>e</span>
                <span>d</span>
               </div>
          </div>
          
        </div>
        </>
       ))}
 

        <button className="card p-4 border-2 rounded-xl block overflow-hidden shadow-md max-w-[20%] w-[100%] h-[12rem] bg-gray-200">
          <span className="text-xl font-bold">add new task</span>
        </button>
        {modal && <T setModal={setModal}/>}
      </div>
    </div>
  )
}

export default Tasks