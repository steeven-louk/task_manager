"use client"
import Link from "next/link";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import ViewModal from "./components/ViewModal";
import { getTasks } from "./services/function";
import ComingSoon from "./components/ComingSoon";
import EmptyComponent from "./components/Empty";



export default function Home(){
  
  const [task, setTasks] = useState([]);
  const [toggleModal, setToggleModal] = useState(false)
  const [viewElement, setViewElement] = useState()


  const handleShowTask = (item:any)=>{
    setToggleModal(true);
    setViewElement(item)
  }

useEffect(() => {
  const getRecentlyTasks =async()=>{
    await getTasks().then((task)=>{
      setTasks(task)
     });
  }
  getRecentlyTasks();
}, []);

  return (
    <main className="container p-3 rounded-md w-full">
      <Header/>
      <div className="flex flex-col-reverse overflow-y-scroll h-[calc(100vh-20rem)] md:overflow-y-hidden md:flex-row gap-4 mt-5">
        <div className="recent-projet flex-1">
          <div className="head flex w-full mb-5 justify-between">
            <h2 className="font-bold">Recent projets</h2>
            <span className=" text-gray-300">view all</span>
          </div>

          <div className="projet ">
            <div className="relative top-16">
            <ComingSoon/>
            </div>
        </div>
        </div>
        <div className="recent-task flex-1">
        <div className="head flex w-full mb-5 justify-between">
            <h2 className="font-bold">Recent tasks</h2>
            <span className="text-gray-300">
              <Link href={"/tasks"}>view all</Link>
            </span>
          </div>

          <div className="task_container flex flex-col gap-4">
            {task?.length !== 0?
            
           ( task?.slice(0,5).map((task:any)=>

              <>
                 <div className="task shadow p-2 cursor-pointer" key={task?._id}  onClick={()=>handleShowTask(task)} >
                   <div className="head flex justify-between">
                     <h2 className="font-bold">{task?.title}</h2>
                     <span>view</span>
                 </div>
                   
                 </div>
   
   
   </>
 
   
   ))
   :
   <>
   <EmptyComponent/>
    </>
          }
 {/* @ts-ignore:next-line */}
{toggleModal && <ViewModal showTask={setToggleModal} id={viewElement?._id} title={viewElement?.title} content={viewElement.description} />}
             
          
          </div>
        </div>
      </div>
    </main>
  )
}
