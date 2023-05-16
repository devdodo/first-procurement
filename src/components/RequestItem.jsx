import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import AddButton from './AddButton'

const RequestItem = () => {

  return (
    <div>
        <div className="section-title mb-3">
            <p className='font-semibold' style={{color: '#5B5B5B'}}>Request Form</p>
        </div>
        <div className="section-table border border-1 border-rounded px-4">
            <div className="section-elements border-b p-5">
                <div className="section-items">
                    <div className="section-item flex">
                        <div className="item-label w-36">
                            <p className="font-semibold" style={{color: '#5B5B5B'}}>Item(s):</p>
                        </div>
                        <div className="item-detail" style={{color: '#5B5B5B'}}>
                            <p className='mb-2'>* Laptop x2</p>
                            <p className='mb-2'>* ATM cards x2,000</p>
                            <p className='mb-2'>* A4 Papers (Cartons) x5</p>
                            <p className='mb-2'>* Office Chairs x2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-elements border-b p-5">
                <div className="section-items">
                    <div className="section-item flex">
                        <div className="item-label w-36">
                            <p className="font-semibold" style={{color: '#5B5B5B'}}>Approver:</p>
                        </div>
                        <div className="item-detail" style={{color: '#5B5B5B'}}>
                            <p className='mb-2'>Atolagbe Emmanuel</p>
                        </div>
                    </div>
                    <div className="section-item flex">
                        <div className="item-label w-36">
                            <p className="font-semibold" style={{color: '#5B5B5B'}}>Comments:</p>
                        </div>
                        <div className="item-detail" style={{color: '#5B5B5B'}}>
                            <p className='mb-2'>Package confirmed by Head of Branch Services</p>
                        </div>
                    </div>
                    <div className="section-item flex">
                        <div className="item-label w-36">
                            <p className="font-semibold" style={{color: '#5B5B5B'}}>Status:</p>
                        </div>
                        <div className="item-detail" style={{color: '#5B5B5B'}}>
                            <p className='mb-2'>Pending</p>
                        </div>
                    </div>
                    <div className="section-item flex">
                        <div className="item-label w-36">
                            <p className="font-semibold" style={{color: '#5B5B5B'}}>Date:</p>
                        </div>
                        <div className="item-detail" style={{color: '#5B5B5B'}}>
                            <p className='mb-2'>02-06-2023</p>
                        </div>
                    </div>
                    <div className="section-item flex">
                        <div className="item-label w-36">
                            <p className="font-semibold" style={{color: '#5B5B5B'}}>Progress:</p>
                        </div>
                        <div className="item-detail" style={{color: '#5B5B5B'}}>
                            <p className='mb-2'>* Laptop x2</p>
                            <p className='mb-2'>* ATM cards x2,000</p>
                            <p className='mb-2'>* A4 Papers (Cartons) x5</p>
                            <p className='mb-2'>* Office Chairs x2</p>
                        </div>
                    </div>
                </div>
            </div>
            <form action="" class="px-5">
                <div className="form-group mt-3 mb-2">
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className='font-semibold mb-2' style={{color: '#5B5B5B'}}>Remarks:</label>
                        <textarea name="" id="" cols="40" rows="5" className='w-textarea p-4 border border-rounded bg-white'></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <AddButton btnText={"Acknowledge Receipt"}/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RequestItem