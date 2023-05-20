import React from 'react'
import AddButton from './AddButton'

const FilterForm = () => {
  return (
    <div className="mb-12">
        <div className="section-title mb-3">
            <p className='font-semibold' style={{color: '#5B5B5B'}}>Filter Table</p>
        </div>
        <div className="section-table border border-1 border-rounded p-4">
            <form action="">
                <div className="form-group mb-4">
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className='font-semibold mb-2' style={{color: '#5B5B5B'}}>Branch Name</label>
                        <input type="text" name="itemNumber" id=""  className='input-width p-4 border border-rounded bg-white' placeholder='Enter Branch Name...' />
                    </div>
                </div>
                <div className="form-group mb-4 mt-3 flex">
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className='font-semibold mb-2' style={{color: '#5B5B5B'}}>Sol ID</label>
                        <input type="text" name="itemNumber" id=""  className='input-width-half p-4 border border-rounded bg-white' placeholder='Enter Sol ID...' />
                    </div>
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className='font-semibold mb-2' style={{color: '#5B5B5B'}}>State</label>
                        <input type="text" name="itemNumber" id=""  className='input-width-half p-4 border border-rounded bg-white' placeholder='Enter State...' />
                    </div>
                </div>
                <div className="form-group mb-4">
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className='font-semibold mb-2' style={{color: '#5B5B5B'}}>Status</label>
                        <select className='input-width p-4 border border-rounded bg-white'>
                            <option>Select status...</option>
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Delivered</option>
                            <option>Rejected</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FilterForm