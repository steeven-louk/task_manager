import React, { useState } from 'react'


type props ={
    title: string,
    content: string
}
const ViewModal = ({title, content}:props) => {
    const [tasktitle, setTitle] = useState(title);
    const [taskcontent, setContent] = useState(content)

    return (
      <>
          <form className="modal my-auto mx-auto flex flex-col p-4 bg-gray-500 rounded-md w-1/2 h-[350px] absolute top-0 bottom-0 left-0 right-0 justify-center">
        <div className="modal-head mb-3">
          <button  className='block ms-auto p-2 rounded-md bg-red-500 w-fit text-white font-bold'>X</button>
        </div>
      <input type="text" value={tasktitle} placeholder='titre' className='p-2 mb-2 rounded-md  border border-red-500' />
        <textarea name="" value={taskcontent} disabled placeholder='content' className='p-2 rounded-md border border-red-500' id="" ></textarea>
        <button className='p-2 w-1/2 rounded-md font-bold uppercase transition-all text-white bg-red-600 mt-4 mx-auto hover:bg-red-500'>add task</button>
      </form>
      </>
  )
}

export default ViewModal