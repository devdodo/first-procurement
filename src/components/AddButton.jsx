import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AddButton = ({btnText}) => {
  return (
    <div>
        <Link to={"/newrequest"} className='p-4 bg-secondary border-rounded text-white w-48 mb-8 flex'>
            <FaPlusCircle className='mt-1 mr-3' />
            {btnText}
        </Link>
    </div>
  )
}

export default AddButton