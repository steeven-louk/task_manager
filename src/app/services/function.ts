//@ts-nocheck
import axios from "axios";
 
const userId = JSON.parse(localStorage.getItem("id"));
// eslint-disable-next-line react-hooks/rules-of-hooks
 

export const getTasks =async()=>{
    
    try {
      if(!userId) return;
     const data = await axios.get(`/api/task?userId=${userId}`);
     console.log(data)
     if(data.status === 200){
       return data.data.tasks;
      }
      return;
    } catch (error) {
       console.log(error)
    }
}

export const addTask =async(title: string,description: string,date: any,completed: boolean,important: boolean)=>{
  if(!userId) return;

  const TASK = {
    title,
    description,
    date,
    completed,
    important,
    user: userId
  }
  try {
    const data = await axios.post('/api/task', {...TASK});
    console.log(data);
    if(data.status === 201){
      getTasks();
      return data
    }
    getTasks();

  } catch (error) {
    console.log(error);
  }
}

export const deleteTask = async(id:any)=>{
    try{
      const data = await axios.delete(`/api/task?id=${id}`);
      if(data.status === 200){
                console.log("bien supprimer");
              return getTasks();
              }
    }catch(error){ console.log(error)
  }
}

export const updateTask =async(id: string, taskTitle: string,taskContent: string)=>{
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


// eslint-disable-next-line import/no-anonymous-default-export
export default {getTasks, deleteTask, addTask, updateTask}