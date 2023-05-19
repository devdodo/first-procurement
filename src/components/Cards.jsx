import React from 'react'

const Cards = () => {
    const storedElements = localStorage.getItem('logindata')

    const role = JSON.parse(storedElements).role

  return (
    <div>
        <div className={`card-box flex ${role === "ADMIN"?"justify-between":""} mb-8`}>
            <div className="card-element p-5 bg-primary text-white w-card border-rounded mr-9">
                <div className="card-number">
                    <p className='text-5xl'>4</p>
                </div>
                <div className="card-text">
                    <p className='text-lg'><span className='font-semibold'>Sent</span> Request</p>
                </div>
            </div>
            <div className="card-element p-5 bg-primary text-white w-card border-rounded mr-9">
                <div className="card-number">
                    <p className='text-5xl'>4</p>
                </div>
                <div className="card-text">
                    <p className='text-lg'><span className='font-semibold'>Approved</span> Request</p>
                </div>
            </div>
            <div className="card-element p-5 bg-primary text-white w-card border-rounded mr-9">
                <div className="card-number">
                    <p className='text-5xl'>4</p>
                </div>
                <div className="card-text">
                    <p className='text-lg'><span className='font-semibold'>Pending</span> Request</p>
                </div>
            </div>
            <div className="card-element p-5 bg-secondary text-white w-card border-rounded">
                <div className="card-number">
                    <p className='text-5xl'>4</p>
                </div>
                <div className="card-text">
                    <p className='text-lg'><span className='font-semibold'>Rejected</span> Request</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards