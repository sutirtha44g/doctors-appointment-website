import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Appointment from './pages/Appointment'
import Signup from './pages/Signup'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'

import MyProfile from'./pages/MyProfile'

import { useState,useEffect } from 'react'


function App(){
  const[currentUser,setCurrentUser]=useState(null)
  useEffect(()=>{
    const savedUser=JSON.parse(localStorage.getItem("currentUser"))
    if(savedUser){
      setCurrentUser(savedUser)
    }
  },[])
  return(
    <BrowserRouter>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/appointment/:id' element={<Appointment/>}/>
        <Route path='/signup' element={<Signup setCurrentUser={setCurrentUser}/>}/>
        <Route path='/login' element={<Login setCurrentUser={setCurrentUser}/>}/>
        <Route path='/profile' element={<MyProfile/>}/>
        <Route path='/myappointments' element={<MyAppointments/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}


export default App