import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../slice/LoginSlice'
import { Link } from 'react-router-dom'
import FBNLogo from '../assets/fbn-logo-asset.png'


const Login = () => {
    // const count = useSelector((state) => state.login.data)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
    const [emailError, setEmailError] = useState(false)
    const [passError, setPassError] = useState(false)

    // const handleLogin =  (userData) => {
         
    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(formData.email === "") {
            setEmailError(true)
        }else{
            setEmailError(false)
        }

        if(formData.password === "") {
            setPassError(true)
        }else{
            setPassError(false)
        }

        const possibleUsers = ["admin@gmail.com", "hbs@gmail.com", "proc@gmail.com"]

        let userData;

        if(formData.email === possibleUsers[0]){
            userData = {
                email: formData.email,
                name: "James Friedman",
                role: "ADMIN",
                staffId: "SN12345678"
            }
        }else if(formData.email === possibleUsers[1]){
            userData = {
                email: formData.email,
                name: "James Friedman",
                role: "HBS",
                staffId: "SN12345678"
            }
        }else if(formData.email === possibleUsers[2]){
            userData = {
                email: formData.email,
                name: "James Friedman",
                role: "PROC",
                staffId: "SN12345678"
            }
        }

        localStorage.setItem('logindata', JSON.stringify(userData));
        
        dispatch(setLogin(userData))

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
                                <input type="email" name="email" value={formData.email} className={`bg-white h-12 w-96 rounded-md pl-5 ${emailError && "border-2 border-red-500"}`} placeholder='Email Address...' onChange={handleChange} />
                                {emailError && <p className='mt-3 text-red-500'>Field is required</p>}
                            </div>
                            <div className="form-group mb-4">
                                <input type="password" name="password" value={formData.password} className={`bg-white h-12 w-96 rounded-md pl-5 ${ passError && "border-2 border-red-500"}`} placeholder='Password...' onChange={handleChange} />
                                {passError && <p className='mt-3 text-red-500'>Field is required</p>}
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

