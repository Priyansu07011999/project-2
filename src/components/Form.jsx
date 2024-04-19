import React, { useContext } from 'react'
import { APIContext } from './API'

export default function Form() {
  const {
    isFormOpen,
    name,
    mobile,
    address,
    setName,
    setMobile,
    setAddress,
    setIsFormOpen,
    addStudent
  } = useContext(APIContext)

  const add = (e) => {
    e.preventDefault()
    addStudent()
  }
  const closingForm = () => {
    setIsFormOpen(false)
  }

  return (
    <div>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        ADD Student
      </button>
      {isFormOpen && (
        <form onSubmit={add} className="mt-4">
          <label className="block mb-2">Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="border border-gray-400 rounded-md py-2 px-4 mb-2 w-full"
            placeholder='Student Name'
            required
          /> <br/>
          <label className="block mb-2">Mobile No:</label>
          <input 
            type="text" 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
            className="border border-gray-400 rounded-md py-2 px-4 mb-2 w-full"
            required
            placeholder='Mobile no'
          /> <br/>
          <label className="block mb-2">Address:</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            className="border border-gray-400 rounded-md py-2 px-4 mb-2 w-full"
            required
            placeholder='City'
          /> <br/>
          <button 
            type="submit" 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
          <button 
            onClick={closingForm} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 ml-2 rounded"
          >
            Close
          </button>

        </form>
      )}
    </div>
  )
}
