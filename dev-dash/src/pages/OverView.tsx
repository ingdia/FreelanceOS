import React from 'react'

function OverView() { 
  return (
    <div className='bg-gray-200 dark:bg-gray-600 min-h-screen pt-4 px-20 font-serif'>
      <div className='flex flex-col justify-between md:flex-row'>
        <h1 className='text-2xl text-purple-600 dark:text-purple-300'>Hello Manage your Project</h1>
        <button className='bg-purple-600 p-2 px-4 text-white rounded-full'>Add a project</button>
      </div>
      <div>
        {/* left filter */}
        <div className='flex flex-col md:flex-row space-x-4 pt-4'>
          <select className='bg-white p-2 px-4 rounded-full'>
            <option value="Newest">Newest</option>
            <option value="Newest">Oldest</option>
          </select>
          <select className='bg-white p-2 px-4 rounded-full'>
          <option value="Highest Budget">Highest Budget</option>
          <option value="Highest Budget">Lowest Budget</option>
          </select>
          <div className="bg-white p-2 px-4 rounded-full">Closest Deadline</div>
        </div>
        {/* right side  */}
        <div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default OverView
