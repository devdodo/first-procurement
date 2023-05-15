import React from 'react'
import { Link } from 'react-router-dom'

const View = () => {
  return (
    <div>
        <Link to={"/trackrequestitem"}>
            <button className='text-white bg-secondary py-1 px-6 rounded'>View</button>
        </Link>
    </div>
  )
}

export default View