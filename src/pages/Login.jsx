import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from '../slice/LoginSlice'
import { Link } from 'react-router-dom'
import FBNLogo from '../assets/fbn-logo-asset.png'


const Login = () => {
    const count = useSelector((state) => state.login.data)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
    const [error, setError] = useState({
        errorEmail: false,
        errorPass: false
    })

    const handleLogin =  () => {
        count ? dispatch(setLogin(false)) : dispatch(setLogin(true)) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(formData.email === "") {
            setError({...error, errorEmail: true})
            console.log(error)
        }

        if(formData.password === "") {
            setError({...error, errorPass: true})
            console.log(error)
        }

        if(formData.password !== "" && formData.email !== ""){
            navigate('/dashboard')
        }
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
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
                                <input type="email" name="email" value={formData.email} className={`bg-white h-12 w-96 rounded-md pl-5 ${error.errorEmail ?"border-2 border-red-500":""}`} placeholder='Email Address...' onChange={handleChange} />
                                {error.errorEmail ? <p className='mt-3 text-red-500'>Field is required</p>: ""}
                            </div>
                            <div className="form-group mb-4">
                                <input type="password" name="password" value={formData.password} className={`bg-white h-12 w-96 rounded-md pl-5 ${ error.errorPass ? "border-2 border-red-500":""}`} placeholder='Password...' onChange={handleChange} />
                                {error.errorPass ? <p className='mt-3 text-red-500'>Field is required</p>: ""}
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

