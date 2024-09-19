import React from 'react'
// import '../App.css';

const Todo = () => {
  return (
<div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-100 p-6 rounded shadow w-full max-w-lg lg:w-1/4">
        <h1 className="text-3xl font-bold text-center mb-4">Todo App</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Add a todo"
            className="py-2 px-4 border rounded w-full focus:outline-none mr-2"
          />
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded">
            Add
          </button>
        </div>
      </div>
    </div>  )
}

export default Todo