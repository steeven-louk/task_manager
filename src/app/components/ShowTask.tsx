import React from 'react'

const Task = () => {
  return (
    <div className='bg-red-500 z-30 w-full h-full bg-opacity-50 rounded-md  p-3 absolute right-0 top-0 left-0   text-white'>
      <div className="card-edit mx-5  ">
      <form className="modal my-auto mx-auto flex flex-col p-2 md:p-3 bg-gray-500 rounded-md max-w-[20rem] w-full h-fit absolute top-0 bottom-0 left-0 right-0 justify-center">
        <div className="modal-head mb-2">
          <button type='button'  className='block ms-auto px-2 rounded-md bg-red-500 w-fit text-white font-bold'>X</button>
        </div>
        <hr />
        <div className="body bg-white h-fit p-2 rounded-md mt-2 text-black">
          <h1 className='font-bold capitalize mb-2'>dffffffffff</h1>
          <hr />
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, saepe laudantium, quaerat iste veritatis magnam voluptatum voluptas tempora minus odio quae veniam harum, animi molestias consectetur quas voluptatibus similique totam!
          </p>
        </div>

      <span className="date">25/12/10</span>
      <div className="form-group flex justify-between w-1/2 mt-3">
        <label htmlFor="completed">toggle completed</label>
        <input type='checkbox' name="completed" className='p-2' ></input>
      </div>
      <div className="form-group flex justify-between w-1/2">
        <label htmlFor="important">toggle important</label>
        <input type='checkbox' name="important" className='p-2' ></input>
      </div>
        {/* <button type="submit" className='p-2 w-1/2 rounded-md font-bold uppercase transition-all text-white bg-red-600 mt-4 ms-auto hover:bg-red-500'>create task</button> */}
      </form>
      </div>
    </div>
  )
}

export default Task