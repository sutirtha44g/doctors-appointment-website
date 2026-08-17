import '../styles/Signup.css'
import {Link} from "react-router-dom"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup({setCurrentUser}){
    const [formData, setFormData]=useState({

        name:"",
        email:"",
        password:""
    })
    const navigate=useNavigate()

    function handleChange(e){
        setFormData({

            ...formData,
            [e.target.name]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const users=JSON.parse(localStorage.getItem("users")) || []
        const userExists=users.find(
            (user)=>user.email===formData.email
        )
        if(userExists){
            alert("User already exists")
            return
        }
        users.push(formData)
        localStorage.setItem("users",JSON.stringify(users))
        localStorage.setItem("currentUser",JSON.stringify(formData))
        setCurrentUser (formData)
        
        navigate("/")
        alert("Account created successfully")

    }

    return(
        <div className='signup'>
            <div className='signup-container'>
                <h1>Create Account</h1>
                <p>Please sign up to book appointment</p>

                <form className='signup-form' onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label>
                            Full Name
                        </label>

                        <input
                            type='text'
                            name='name'
                            placeholder="Enter your name"
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                        create Account
                    </button>

                </form>

                <p className='bottom-text'>
                    Already have an account?
                    <Link to="/login">
                        <span>
                            Login Here
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default Signup