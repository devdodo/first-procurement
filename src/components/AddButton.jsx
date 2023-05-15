import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AddButton = () => {
  return (
    <div className='p-4 bg-secondary border-rounded text-white w-48 mb-8'>
        <Link to={"/"} className='flex'>
            <FaPlusCircle className='mt-1 mr-3' />
            Add New Request
        </Link>
    </div>
  )
}

export default AddButton