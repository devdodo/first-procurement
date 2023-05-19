import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AddButton = ({btnText, btnIcon, btnColor}) => {
    
    const storedElements = localStorage.getItem('logindata')

    const role = JSON.parse(storedElements).role

  return (
    <div>
          <div> 
            <Link to={"/newrequest"}  className={`p-4 ${role === "ADMIN" ?"bg-secondary": btnColor} border-rounded text-white w-48 mb-8 flex justify-center`}>
                {btnIcon?<FaPlusCircle className='mt-1 mr-3' />:""}
                {btnText}
            </Link>
          </div>
    </div>
  )
}

export default AddButton