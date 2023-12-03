import axios from 'axios';
import React, { useState } from 'react'


type props ={
    id: string,
    title: string,
    content: string,
    showTask: any

}
const ViewModal = ({id, title, content, showTask}:props) => {
    const [taskTitle, setTitle] = useState(title);
    const [taskContent, setContent] = useState(content)
    // const [important, setImportant] = useState(false)
    // const [completed, setCompleted] = useState(false)

    const handleChange = (name:string)=>(e:any)=>{
      switch (name) {
        case "title":
          setTitle(e.target.value);
          break;
          case "description":
          setContent(e.target.value);
          break;

          // case "important":
          // setImportant(e.target.checked);
          // break;
          // case "completed":
          //   setCompleted(e.target.checked);
          //   break;
      
        default:
          break;
      }
    }

    


    const handleSubmit =async()=>{
      // e.preventDefault();
      try {
        const data = await axios.put('/api/task',{
          _id:id,
          title:taskTitle,
          description:taskContent
        })
        console.log("upsatee",data)
       } catch (error) {
        console.log(error)
       }
    }

    return (
          <form onSubmit={handleSubmit} className="modal max-w-[20rem] w-full h-fit shadow-emerald-500 shadow-md my-auto mx-auto flex flex-col p-2 bg-gray-500 rounded-md absolute top-0 bottom-0 left-0 right-0 justify-center">
        <div className="modal-head mb-3">
          <button onClick={()=>showTask(false)}  className='block ms-auto px-1 rounded-md bg-red-500 w-fit text-white font-bold'>X</button>
        </div>
      <input type="text" name="title" onChange={handleChange("title")} value={taskTitle} placeholder='titre' className='p-2 mb-2 rounded-md  border border-red-500' />
        <textarea name="description" onChange={handleChange("description")}  value={taskContent} placeholder='description' className='p-2 rounded-md border border-red-500' id="" ></textarea>
        <button type='submit' className='p-2 w-1/2 rounded-md font-bold uppercase transition-all text-white  mt-4 mx-auto hover:bg-green-300'>update task</button>
      </form>
  )
}

export default ViewModal