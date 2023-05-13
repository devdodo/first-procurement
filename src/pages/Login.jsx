import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from '../slice/LoginSlice'
import { Link } from 'react-router-dom'
import FBNLogo from '../assets/fbn-logo-asset.png'


const Login = () => {
    const count = useSelector((state) => state.login.data)
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin =  () => {
        count ? dispatch(setLogin(false)) : dispatch(setLogin(true)) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  
    return (
      <div>
        <div>
          <div className="login-page flex">
            <div className="login-container w-1/2 h-screen flex justify-center items-center">
                <div>
                    <img src={FBNLogo} alt="First Bank Logo" className='w-96' />
                </div>
            </div>
            <div className="login-container w-1/2 bg-primary h-screen flex justify-center items-center">
                <div className="login-elements">
                    <h1 className='text-white text-2xl text-center mb-6'>User Login</h1>
                    <div className="form-elements">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-4">
                                <input type="text" className='bg-white h-12 w-96 rounded-md pl-5' placeholder='Email Address...' />
                            </div>
                            <div className="form-group mb-4">
                                <input type="password" className='bg-white h-12 w-96 rounded-md pl-5' placeholder='Password...' />
                            </div>
                            <div className="form-group mb-4">
                                <button className='bg-secondary text-white h-12 w-96 rounded-md pl-5 font-semibold'>Login</button>
                            </div>
                            <div className="form-group mb-4 text-center font-semibold">
                                <p className='text-white'>Can't sign in? <Link to="/" className="text-secondary">Contact Admin</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login

