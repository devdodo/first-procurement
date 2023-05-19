import React from 'react'
import { FaPaperPlane, FaCheck, FaHourglassHalf, FaTimes } from 'react-icons/fa'

const Cards = () => {
    const storedElements = localStorage.getItem('logindata')

    const role = JSON.parse(storedElements).role

  return (
    <div>
        <div className={`card-box flex ${role === "ADMIN"?"justify-between":""} mb-8`}>
            <div className="card-element flex p-5 py-6 bg-primary text-white w-card border border-rounded mr-9">
                <div className="form-el mr-6">
                    <div className="icon-circle bg-white p-5 rounded-full">
                        <FaPaperPlane className='text-2xl text-primary'/>
                    </div>
                </div>
                <div className="form-el">
                    <div className="card-number text-white">
                        <p className='text-4xl font-bold'>4</p>
                    </div>
                    <div className="card-text text-white">
                        <p className='text-lg'><span className='font-semibold'>Sent</span> Request</p>
                    </div>
                </div>
            </div>
            <div className="card-element flex p-5 py-6 bg-primary w-card border border-rounded mr-9">
                <div className="form-el mr-6">
                    <div className="icon-circle bg-green-600 p-5 rounded-full">
                        <FaCheck className='text-2xl text-white'/>
                    </div>
                </div>
                <div className="form-el">
                    <div className="card-number text-white">
                        <p className='text-4xl font-bold'>4</p>
                    </div>
                    <div className="card-text text-white">
                        <p className='text-lg'><span className='font-semibold'>Approved</span> Request</p>
                    </div>
                </div>
            </div>
            <div className="card-element flex p-5 py-6 bg-primary w-card border border-rounded mr-9">
                <div className="form-el mr-6">
                    <div className="icon-circle bg-secondary p-5 rounded-full">
                        <FaHourglassHalf className='text-2xl text-white'/>
                    </div>
                </div>
                <div className="form-el">
                    <div className="card-number text-white">
                        <p className='text-4xl font-bold'>4</p>
                    </div>
                    <div className="card-text text-white">
                        <p className='text-lg'><span className='font-semibold'>Pending</span> Request</p>
                    </div>
                </div>
            </div>
            <div className="card-element flex p-5 py-6 bg-primary w-card border border-rounded mr-9">
                <div className="form-el mr-6">
                    <div className="icon-circle bg-red-600 p-5 rounded-full">
                        <FaTimes className='text-2xl text-white'/>
                    </div>
                </div>
                <div className="form-el">
                    <div className="card-number text-white">
                        <p className='text-4xl font-bold'>4</p>
                    </div>
                    <div className="card-text text-white">
                        <p className='text-lg'><span className='font-semibold'>Rejected</span> Request</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards