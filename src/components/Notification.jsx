import React from 'react'
import { FaBell } from 'react-icons/fa'

const Notification = () => {
    const items = [
        {
            text: "Request Approved",
            bgColor: "bg-green-200",
            textColor: "text-green-600"
        },
        {
            text: "Request Sent",
            bgColor: "",
            textColor: "text-gray-600"
        },
    ]
  return (
    <div>
        <div className="section-title mb-3">
            <p className='font-semibold' style={{color: '#5B5B5B'}}>Notifications</p>
        </div>
        {items.map((item, index) => (
            <div key={index} className={`border border-1 border-rounded p-4 flex items-center mb-3 ${item.bgColor}`}>
                <div className="icon-div pr-4">
                    <FaBell className={`text-2xl ${item.textColor}`} />
                </div>
                <div className="text-div">
                    <h1 className={`text-xl ${item.textColor}`}>{item.text}</h1>
                    <p className='text-sm text-gray-400'>Monday, June 16, 2023</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Notification