import React from 'react'
import { Link } from 'react-router-dom'

const View = ({requestId}) => {
  return (
    <div>
        <Link to={`/trackrequestitem?id=${requestId}`}>
            <button className='text-white bg-secondary py-1 px-6 rounded'>View</button>
        </Link>
    </div>
  )
}

export default View