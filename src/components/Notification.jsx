import React from 'react'
import { FaBell } from 'react-icons/fa'
import AddButton from './AddButton'

const Notification = () => {

  return (
    <div>
        <div className="section-title mb-3">
            <p className='font-semibold' style={{color: '#5B5B5B'}}>Notifications</p>
        </div>
        <div className="border border-1 border-rounded p-4 flex items-center">
            <div className="icon-div pr-4">
                <FaBell className='text-2xl' style={{color: '#5B5B5B'}}/>
            </div>
            <div className="text-div">
                <h1 className='text-xl' style={{color: '#5B5B5B'}}>Request Approved</h1>
                <p className='text-sm text-gray-400'>Monday, June 16, 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Notification