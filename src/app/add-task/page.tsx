import React from 'react'

const AddTask = () => {
  return (
    <div className='w-full h-full flex justify-center my-auto '>
      <form className=" w-1/2 h-1/2 p-5 bg-green-500 rounded-md ">
      <div className="card flex flex-col">
            <input type="text" placeholder='title' className='p-3 form-control mb-5 rounded-md border-2 border-red-500' />
            <input type="text" placeholder='description' className='p-3 mb-5 rounded-md border-2 border-red-500' />
            <input type="date" placeholder='date' className='p-3 mb-5 rounded-md border-2 border-red-500' />
            <input type="date" placeholder='deadzone' className='p-3 mb-5 rounded-md border-2 border-red-500' />
            <div className="form-group inline-flex gap-3 my-5">
            <input type="checkbox" name='completed' className='w-[1.5rem]' placeholder='completed' />
            <label htmlFor="completed">completed</label>
            </div>
            <div className="form-group  inline-flex gap-3">
            <input type="checkbox" name='important' placeholder='important'  className='w-[1.5rem]' />
            <label htmlFor="important">important</label>
            </div>
        </div>

        <button className='p-3 block mx-auto rounded-md bg-red-500 mt-8 w-1/2'>add task</button>
      </form>
    </div>
  )
}

export default AddTask