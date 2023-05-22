import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../slice/LoginSlice'
import { Link } from 'react-router-dom'
import FBNLogo from '../assets/fbn-logo-asset.png'
import FBNBg from '../assets/fbn-bg-big.png'


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
    const [invalidLogin, setInvalidLogin] = useState(false)

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

        if(formData.password !== "" && formData.email !== ""){
            // if(userLogin.some(user => user.email === formData.email && user.password === formData.password)){
                
            //     userLogin.some(user => {
            //         if(user.email === formData.email && user.password === formData.password){
                        
            //             let userData;
    
            //             userData = {
            //                 email: user.email,
            //                 name: user.name,
            //                 role: user.role,
            //                 staffId: user.staffId
            //             }

                
            //             localStorage.setItem('logindata', JSON.stringify(userData));
                        
            //             dispatch(setLogin(userData))

            //             console.log("user exist")

            //             navigate('/dashboard')
            //         }

            //     })
    
            // }else{
            //     setInvalidLogin(true);
            // }

            fetch(`http://localhost:8000/users?email=${formData.email}&password=${formData.password}`)
            .then(data => data.json())
            .then(res => {

                if(res.length !== 0){

                    let userData = res[0]
            
                    localStorage.setItem('logindata', JSON.stringify(userData));
                    
                    dispatch(setLogin(userData))

                    console.log("user exist")

                    navigate('/dashboard')

                }else{
                    setInvalidLogin(true);
                } 

            })
            .catch(error => console.error(error))

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
            <div className="login-container w-1/2 bg-primary h-screen ">
                <div className="login-elements h-screen flex flex-col justify-center items-center"  style={{backgroundImage: `url(${FBNBg})`, backgroundSize: 'cover', backgroundPosition: 'Center', overflow: "hidden"}}>
                    <h1 className='text-white text-2xl text-center mb-6'>Welcome to FirstProc</h1>
                    {invalidLogin? 
                        <div className="border border-red-500 bg-red-100 text-red-500 w-96 p-3 rounded-lg mb-4 text-center">
                            <p>Seems like the details that you entered are not correct, Kindly contact Admin.</p>
                        </div>
                    : ""}
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

