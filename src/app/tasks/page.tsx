//@ts-nocheck
"use client"
import React,{useEffect, useState} from 'react'
// import Task from './[id]/page';
import ViewModal from '../components/ViewModal';
import { FaTrash } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import Task from '../components/Task';
import EmptyComponent from '../components/Empty';
// import getTasks from '../services/function';
import { deleteTask, getTasks } from '../services/function';
import { useRouter } from 'next/navigation';



const Tasks = () => {
  const [modal, setModal] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [viewElement, setViewElement] = useState()

  const [task, setTasks] = useState([]);
  const [getFilter, setFilter] = useState("all");

  const router = useRouter();
 
  const handleShowTask = (item:any)=>{
    setShowTask(true);
    setViewElement(item)
  }


  const handleDeleteTask = async(id:any)=>{      
      await deleteTask(id);
     return router.refresh();

  }

  useEffect(() => {
    const handleGetTask =async()=>{
      await getTasks().then((task)=>{
        setTasks(task)
       });
    }
    handleGetTask();
  }, []);

  const showModal =()=>{
    setModal(!modal);
    
  }
  const filteredTask = task?.filter((task)=>{
   switch (getFilter) {
    case "important":
      return task.important;
      break;
      case "completed":
      return task.completed
      break;
   
    default:
      return task
      break;
   }
});



  return (
    <div className='container relative rounded-md  p-4'>
      <div className="head flex flex-wrap mb-5 justify-between">
        <div className="day">
          <h2 className="font-bold capitalize">my day</h2>
          <span>December 2020</span>
        </div>
        <button onClick={showModal} className="rounded-md w-fit px-2 text-white gap-2 flex items-center"><span><IoAddCircle/> </span>New task</button>
      </div>
      <hr className='mb-5'/>

      <div className="filtre flex md:gap-6 md:justify-center">
   
        <button onClick={()=>setFilter("my day")} className={`${getFilter === "my day" ? "bg-red-500" : " bg-transparent border-[2px] border-red-500"} p-2 capitalize hidden sm:block tracking-widest flex-1  rounded-md  font-bold text-white mb-5 `}>my day</button>
        <button onClick={()=>setFilter("all")} className={`${getFilter === "all" ? "bg-red-500" : " bg-transparent border-[2px] border-red-500"} p-2 capitalize hidden sm:block tracking-widest flex-1  rounded-md  font-bold text-white mb-5 `}>all</button>
        <button onClick={()=>setFilter("completed")} className={`${getFilter === "completed" ? "bg-red-500" : " bg-transparent border-[2px] border-red-500"} p-2 capitalize hidden sm:block tracking-widest flex-1  rounded-md  font-bold text-white mb-5 `}>completed</button>
        <button onClick={()=>setFilter("important")} className={`${getFilter === "important" ? "bg-red-500" : " bg-transparent border-[2px] border-red-500"} p-2 capitalize hidden sm:block tracking-widest flex-1  rounded-md  font-bold text-white mb-5 `}>important</button>
         
        <select name="" id="" className=' sm:hidden p-2 mb-4'>
          <option value="">my day</option>
          <option value="">all</option>
          <option value="">completed</option>
          <option value="">important</option>
        </select>
      </div>
      <div className="task__container  flex flex-wrap w-full gap-3 md:justify-start h-[calc(100vh-12rem)]">
       {filteredTask.length === 0 ? <>
        <EmptyComponent/>
        </>
        :
        filteredTask.map((item:any)=>(
          <>
               <div key={item._id} className="card p-4 border-2 rounded-xl justify-between flex flex-col overflow-hidden text-white shadow md:max-w-[18%] w-[100%] h-[12rem] ">
            <div onClick={()=>handleShowTask(item)} className="card-body cursor-pointer overflow-hidden">
            <h5 className="title text-sm font-bold mb-3">
                  {item.title}
                 </h5>
                  <div className="card-text  overflow-hidden">
                  <p className="content text-xs text-white text-ellipsis overflow-hidden ... ">
                    {item.description}
                  </p>
                  </div>
            </div>
                 <div className="card-footer mt-2 flex justify-between align-baseline">
                {item?.important &&  <span className="status border p-1 w-32 text-sm text-center capitalize font-bold rounded-full text-white bg-red-500 shadow-md">important</span> }
                 <div className="action inline-flex gap-3 my-auto">
                   <button onClick={()=>handleDeleteTask(item._id)} type='button'><FaTrash/></button>
                 </div>
            </div>
              </div>
          </>
         ))
        }

       {filteredTask.length > 0 &&
        <button className="card p-4 border-2 rounded-xl block overflow-hidden shadow-md sm:max-w-[20%] w-[100%] h-[12rem]">
          <span className="text-xl font-bold">add new task</span>
        </button>
}
        {modal && <Task setModal={setModal}/>}
        {showTask && <ViewModal showTask={setShowTask} id={viewElement._id} title={viewElement?.title} content={viewElement.description} />}
      </div>
    </div>
  )
}


export default Tasks