"use client"
import React,{useEffect, useState} from 'react'
// import Task from './[id]/page';
import axios from 'axios';
import ViewModal from '../components/ViewModal';


type  area={
  setModal:any,
}
const T =({setModal}:area)=>{

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
  const TASK = {
    title,
    description,
    date,
    completed,
    important
  }
  try {
    const data = await axios.post('/api/task', {...TASK});
    console.log(data);
    if(data.status === 201){
      setTitle('')
    setDescription('')
    setDate('')
    setCompleted(false)
    setImportant(false)
    setModal(false);
    }
  } catch (error) {
    console.log(error)
  }
}

  return(
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
        <button type="submit" className='p-2 w-1/2 rounded-md font-bold uppercase transition-all text-white bg-red-600 mt-4 ms-auto hover:bg-red-500'>create task</button>
      </form>
    </>
  )
}


const Tasks = () => {
  const [modal, setModal] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [viewElement, setViewElement] = useState()

  const [task, setTasks] = useState([]);


  const handleShowTask = (item:any)=>{
    setShowTask(true);
    setViewElement(item)
    console.log(item)
  }


  const getTasks =async()=>{
    try {
     const data = await axios.get("/api/task");
     console.log(data)
     if(data.status === 200){
       setTasks(data.data.tasks);
      }
    } catch (error) {
       console.log(error)
    }
   }

  const deleteTask = async(id:any)=>{
    try{
      const data = await axios.delete(`/api/task?id=${id}`);
      if(data.status === 200){
                console.log("bien supprimer");
                await getTasks();
              }
    }catch(error){ console.log(error)
  }
}

  useEffect(() => {
     getTasks();
  }, []);
  const showModal =()=>{
    setModal(!modal);
    
  }


  return (
    <div className='container relative rounded-md bg-slate-50 p-4'>
      <div className="head flex flex-wrap mb-5 justify-between">
        <div className="day">
          <h2 className="font-bold capitalize">my day</h2>
          <span>December 2020</span>
        </div>
        <button onClick={showModal} className="rounded-md bg-blue-400 w-fit px-2 text-white">+ New task</button>
      </div>
      <hr className='mb-5'/>

      <div className="filtre flex md:gap-6 md:justify-center">
        <button className='capitalize hidden sm:block tracking-widest flex-1 bg-red-500 rounded-md p-2 font-bold text-white mb-5 '>my day</button>
        <button className='capitalize hidden sm:block tracking-widest flex-1 bg-red-500 rounded-md p-2 font-bold text-white mb-5 '>all</button>
        <button className='capitalize hidden sm:block tracking-widest flex-1 bg-red-500 rounded-md p-2 font-bold text-white mb-5 '>completed</button>
        <button className='capitalize hidden sm:block tracking-widest flex-1 bg-red-500 rounded-md p-2 font-bold text-white mb-5 '>important</button>
        <select name="" id="" className=' sm:hidden p-2 mb-4'>
          <option value="">my day</option>
          <option value="">all</option>
          <option value="">completed</option>
          <option value="">important</option>
        </select>
      </div>
      <div className="task__container overflow-y-scroll flex flex-wrap w-full gap-3 md:justify-center h-[calc(100vh-12rem)]">
       {task?.map((item:any)=>(
        <>
             <div key={item._id} className="card p-4 border-2 rounded-xl justify-between flex flex-col overflow-hidden text-white shadow md:max-w-[29%] w-[100%] h-[12rem] bg-red-500">
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
                 <button onClick={()=>deleteTask(item._id)} type='button'>d</button>
               </div>
          </div>
          
        </div>
        </>
       ))}
 

        <button className="card p-4 border-2 rounded-xl block overflow-hidden shadow-md sm:max-w-[20%] w-[100%] h-[12rem] bg-gray-200">
          <span className="text-xl font-bold">add new task</span>
        </button>
        {modal && <T setModal={setModal}/>}
        {showTask && <ViewModal showTask={setShowTask} id={viewElement._id} title={viewElement?.title} content={viewElement.description} />}
      </div>
    </div>
  )
}


export default Tasks