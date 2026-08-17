/*import '../Login.css'
import {useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
function Register(){
    const navigate=useNavigate()
    const [formData, setFormData]=useState({
        name="",
        email="",
        password=""     
    })

    function handleChange(e){
        setFormData({
            ...formData,
        [e.target.name]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        localStorage.setItem(
            "user",
            JSON.stringify(formData)
        )
        alert("Account Created Succesfully")
        navigate("/")
        window.location.reload()
    }

    return(
        <div className='login'>
            <div className='login-container'>
                <h1>Create Account</h1>
                <p>Please sign up to continue</p>

                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label>Full Name</label>
                        <input type="text" name="name" placeholder='Enter you name' onChange={handleChange} required/>
                        
                    </div>
                    <div className='input-group'>
                        <label>Email</label>
                         <input type="email" email="email" placeholder='Enter you email' onChange={handleChange} required/>
                    </div>

                    <div className=''
                    
                </form>
            </div>


        </div>
    )
}
*/