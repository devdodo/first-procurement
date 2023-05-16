import React from 'react'
import AddButton from './AddButton'

const ChangePassword = () => {
  return (
    <div>
        <div className="section-title mb-3">
            <p className='font-semibold' style={{color: '#5B5B5B'}}>Request Form</p>
        </div>
        <div className="section-table border border-1 border-rounded p-4">
            <form action="">
                <div className="form-group mb-4">
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className='font-semibold mb-2' style={{color: '#5B5B5B'}}>Password</label>
                        <input type="text" name="itemNumber" id=""  className='input-width p-4 border border-rounded bg-white' placeholder='Enter Old Password...' />
                    </div>
                </div>
                <hr />
                <div className="form-group mb-4 mt-3">
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className='font-semibold mb-2' style={{color: '#5B5B5B'}}>New Password</label>
                        <input type="text" name="itemNumber" id=""  className='input-width p-4 border border-rounded bg-white' placeholder='Enter New Password...' />
                    </div>
                </div>
                <div className="form-group mb-4">
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className='font-semibold mb-2' style={{color: '#5B5B5B'}}>Confirm Password</label>
                        <input type="text" name="itemNumber" id=""  className='input-width p-4 border border-rounded bg-white' placeholder='Confirm New Password...'/>
                    </div>
                </div>
                
                
                <div className="form-group">
                    <AddButton btnText={"Change Password"} btnIcon={false} />
                </div>
            </form>
        </div>
    </div>
  )
}

export default ChangePassword