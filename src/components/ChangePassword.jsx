import React, { useState } from 'react'

    const ChangePassword = () => {
    const [password, setPassword] = useState('')
    const [passwordData, setPasswordData] = useState({
        newPassword: '',
        confirmPassword: ''
    })
    const [isValid, setIsValid] = useState(false)

    const validatePassword = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/

        const regEx = passwordRegex.test(passwordData.newPassword);
        
        setIsValid(regEx)
        
        console.log(regEx)

        console.log(isValid, passwordData.newPassword)
    }

    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        validatePassword()

        console.log("submitting")

    }
    
  return (
    <div>
        <div className="section-title mb-3">
            <p className='font-semibold' style={{color: '#5B5B5B'}}>Change Password</p>
        </div>
        <div className="section-table border border-1 border-rounded p-4">
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className='font-semibold mb-2' style={{color: '#5B5B5B'}}>Password</label>
                        <input type="text" name="itemNumber" value={password}  className='input-width p-4 border border-rounded bg-white' placeholder='Enter Old Password...' onChange={handlePassChange}/>
                    </div>
                </div>
                <hr />
                <p className='font-semibold text-lg mt-4' style={{color: '#5B5B5B'}}>Password Requirements</p>
                <p className={`mt-2 ${isValid ? "" : "text-red-500"}`} style={{color: '#5B5B5B'}}>Password must be a combination of upper case, lower case and special characters and must include numbers (0 through 9).</p>
                <p className='mt-2 mb-8' style={{color: '#5B5B5B'}}>Reuse of any of your last 5 passwords is prohibited.</p>
                <div className="form-group mb-4 mt-3">
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className='font-semibold mb-2' style={{color: '#5B5B5B'}}>New Password</label>
                        <input type="text" name="newPassword" value={passwordData.newPassword}  className='input-width p-4 border border-rounded bg-white' placeholder='Enter New Password...' onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group mb-4">
                    <div className="form-item flex flex-col mr-4">
                        <label htmlFor="items" className='font-semibold mb-2' style={{color: '#5B5B5B'}}>Confirm Password</label>
                        <input type="text" name="confirmPassword" value={passwordData.confirmPassword} className='input-width p-4 border border-rounded bg-white' placeholder='Confirm New Password...' onChange={handleChange}/>
                    </div>
                </div>
                
                <div className="form-group">
                    <div>
                        <button>
                            <div className={`p-4 bg-secondary border-rounded text-white w-48 mb-8 flex justify-center`}> 
                                Change Password
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ChangePassword