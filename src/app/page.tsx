"use client"
import Link from "next/link";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import ViewModal from "./components/ViewModal";


// type props ={
//   _id: number,
//   title: string,
//   content: string,
//   task: [],
//   // task: any,
// }
export default function Home(){
  
  const [task, setTasks] = useState([]);
  const [toggleModal, setToggleModal] = useState(false)

  const showViewModal =()=>{
    setToggleModal(!toggleModal);
  }

useEffect(() => {
  const getRecentlyTasks =async()=>{
    try {
     const data = await axios.get("/api/task");
     if(data.status === 200){
       setTasks(data.data.tasks);
      }
    } catch (error) {
       console.log(error)
    }
   }

   getRecentlyTasks();
}, [])

  return (
    <main className="container p-3 rounded-md w-full">
      <Header/>
      <div className="flex gap-4 mt-5">
        <div className="recent-projet flex-1">
          <div className="head flex w-full mb-5 justify-between">
            <h2 className="font-bold">Recent projets</h2>
            <span className=" text-gray-300">view all</span>
          </div>

          <div className="projet flex gap-3 ">
            <div className="projet-1 bg-pink-400 p-4 rounded-md w-fit">
                <h2 className="font-bold">Coinc calc</h2>
                <span>category</span>
            </div>

            <div className="projet-1 bg-pink-400 p-4 rounded-md w-fit">
                <h2 className="font-bold">Coinc calc</h2>
                <span>category</span>
            </div>

            <div className="projet-1 bg-pink-400 p-4 rounded-md w-1/2">
                <h2 className="font-bold">Coinc calc</h2>
                <span>category</span>
            </div>

            <div className="projet-1 bg-pink-400 p-4 rounded-md w-1/2">
                <h2 className="font-bold">Coinc calc</h2>
                <span>category</span>
            </div>

            <button className="projet-1 bg-gray-400 hover:bg-gray-300 transition-all p-4 rounded-md w-1/2">
                add project
            </button>
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
            {task?.slice(0,5).map((task:any)=>(

           <>
              <div className="task shadow p-2" key={task._id} onClick={showViewModal}>
                <div className="head flex justify-between">
                  <h2 className="font-bold">{task.title}</h2>
                  <span>view</span>
                </div>
                <div className="desc">
                  {task.content}
                </div>
              </div>


</>

            ))}
             
            {/* <ViewModal title={title} content={content} /> */}


              {/* <div className="task shadow p-2">
                <div className="head flex justify-between">
                  <h2 className="font-bold">titlle</h2>
                  <span>view</span>
                </div>
                <div className="desc">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </div>

              <div className="task shadow p-2">
                <div className="head flex justify-between">
                  <h2 className="font-bold">titlle</h2>
                  <span>view</span>
                </div>
                <div className="desc">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </div>

              <div className="task shadow p-2">
                <div className="head flex justify-between">
                  <h2 className="font-bold">titlle</h2>
                  <span>view</span>
                </div>
                <div className="desc">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </dsetModal(false)iv> */}
          </div>
        </div>
      </div>
    </main>
  )
}
