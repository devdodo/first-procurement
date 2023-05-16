import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import AddButton from './AddButton'

const AddItems = () => {

    const AddItem = () => {
        return(
            <div className='p-4 bg-secondary border-rounded text-white mb-8 flex'>
                <FaPlusCircle className='mt-1 mr-3' />
                Add Item
            </div>
        )
    }
  return (
    <div>
        <div className="section-title mb-3">
            <p className='font-semibold' style={{color: '#5B5B5B'}}>Request Form</p>
        </div>
        <div className="section-table border border-1 border-rounded p-4">
            <form action="">
                <div className="form-group flex">
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className="font-semibold mb-2" style={{color: '#5B5B5B'}}>Item(s)</label>
                        <select className='input-width p-4 border border-rounded bg-white'>
                            <option>Laptop</option>
                            <option>Laptop</option>
                            <option>Laptop</option>
                            <option>Laptop</option>
                        </select>
                    </div>
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className="font-semibold mb-2" style={{color: '#5B5B5B'}}>Quantity</label>
                        <input type="number" name="itemNumber" id=""  className='w-28 p-4 border border-rounded bg-white'/>
                    </div>
                    <div className="form-item">
                        <br className='mb-2'/>
                        <AddItem />
                    </div>
                </div>
                <div className="form-group mb-3">
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className="font-semibold mb-2" style={{color: '#5B5B5B'}}>Comment</label>
                        <textarea name="" id="" cols="40" rows="5" className='w-textarea p-4 border border-rounded bg-white'></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <AddButton btnText={"Send Request"}  btnIcon={true}/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddItems