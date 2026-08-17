import '../styles/Login.css'
import {Link} from "react-router-dom"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login({setCurrentUser}){
    const navigate = useNavigate()
    const [loginData, setLoginData]=useState({

        
        email:"",
        password:""
    })

    function handleChange(e){
        setLoginData({

            ...loginData,
            [e.target.name]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const users=JSON.parse(localStorage.getItem("users")) || []
        const matchedUser=users.find(
            (user)=>user.email===loginData.email && user.password===loginData.password
        )
        if(matchedUser){
            localStorage.setItem("currentUser",JSON.stringify(matchedUser))
            setCurrentUser(matchedUser)
            alert("Login Successfull!")
            navigate("/")
           
        }
        else{
            alert("Invali email or password")

        }
        

    }
    return(
        <div className='login'>
            <div className='login-container'>
                <h1>Login</h1>
                <p>Please Login to book appointment</p>

                <form className='login-form' onSubmit={handleSubmit}>
                    
                    <div className='input-group'>
                        <label>
                            Email
                        </label>

                        <input
                            type='email'
                            name='email'

                            placeholder="Enter your email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input-group'>
                        <label>
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button type='submit'>
                        Login
                    </button>

                </form>

                <p className='bottom-text'>
                    Don't have an account?
                    <Link to="/signup" >
                    <span>
                        Create Account 
                    </span>
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default Login