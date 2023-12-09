"use client"
import React, {useState} from 'react'
import { addTask } from '../services/function';

type props={
    setModal:any,
  }
const Task:React.FC<props> = ({setModal}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false)
    const [important, setImportant] = useState(false)
  
  
  const handleChange =(name:string)=>(e:any) =>{
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
  
        case "description":
          setDescription(e.target.value);
          break;
  
          case "date":
            setDate(e.target.value);
            break;
  
            case "completed":
              setCompleted(e.target.checked);
              break;
              case "important":
                setImportant(e.target.checked);
                break;
             
    
      default:
        break;
    }
  }
  
  const handleSubmit =async(e:any)=>{
    e.preventDefault();

    await addTask(title,description,date,completed,important)
          .then((task)=>{
            if(task){
              setTitle('')
              setDescription('')
              setDate('')
              setCompleted(false)
              setImportant(false)
              setModal(false);
            }
          });
  
  }


  return (
    <>
    <form onSubmit={handleSubmit} className="modal my-auto mx-auto flex flex-col p-3 bg-gray-500 rounded-md max-w-[20rem] w-full h-fit absolute top-0 bottom-0 left-0 right-0 justify-center">
      <div className="modal-head mb-2">
        <button type='button' onClick={()=>setModal(false)} className='block ms-auto px-2 rounded-md bg-red-500 w-fit text-white font-bold'>X</button>
      </div>
      <hr />
    <div className="form-group flex flex-col ">
      <label htmlFor="title">Title</label>
      <input type="text" name='title' value={title} onChange={handleChange("title")} placeholder='titre' className='p-2 mb-2 rounded-md  border border-red-500' />
    </div>
    <div className="form-group flex flex-col my-5">
      <label htmlFor="description">Description</label>
      <textarea name="description" value={description} onChange={handleChange("description")} placeholder='description'  className='p-2 rounded-md border border-red-500'></textarea>
    </div>
    <div className="form-group flex flex-col">
      <label htmlFor="date">Date</label>
      <input type='date' name="date" value={date} onChange={handleChange("date")} className='p-2 rounded-md border border-red-500'/>
    </div>

    <div className="form-group flex justify-between w-1/2 mt-3">
      <label htmlFor="completed">toggle completed</label>
      <input type='checkbox' name="completed" checked={completed} onChange={handleChange("completed")} className='p-2' ></input>
    </div>
    <div className="form-group flex justify-between w-1/2">
      <label htmlFor="important">toggle important</label>
      <input type='checkbox' name="important" checked={important} onChange={handleChange("important")} className='p-2' ></input>
    </div>
      <button type="submit" className='p-2 w-1/2 rounded-md font-bold uppercase transition-all text-white  mt-4 ms-auto hover:bg-gren-300'>create task</button>
    </form>
  </>
  )
}

export default Task