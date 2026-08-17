import '../styles/Appointment.css'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
function Appointment(){
    const {id}=useParams()
    const navigate=useNavigate()
    const doctor=JSON.parse(
        localStorage.getItem("selectedDoctor")
    ) || {}
    
    const[selectedDate,setSelectedDate]=useState("")
    const[selectedTime,setSelectedTime]=useState("")
    
    const days=[]    
    for (let i=0;i<5;i++){
        const currDate=new Date()
        currDate.setDate(currDate.getDate()+i)
        const dayData={ day:currDate.toLocaleDateString("en-US",{weekday:"short"}),
        dateNumber:currDate.getDate(),
        fullDate:currDate.toLocaleDateString('en-GB')
        }
        days.push(dayData)
       
    }

    function handleBooking(){
        const currentUser=JSON.parse(localStorage.getItem("currentUser"))
        if (!currentUser){
            alert("Please create an account first")
            navigate('/signup')
            return
        }
        if(!selectedDate || !selectedTime){
            alert("Please select date and time")
            return
        }
        const appointments=JSON.parse(localStorage.getItem("appointments")) || []
        const booking={ id:Date.now(),...doctor,date:selectedDate, time:selectedTime}
        appointments.push(booking)
        localStorage.setItem("appointments",JSON.stringify(appointments))
        alert("Appointment booked")
        navigate("/myappointments")
        
        
    }
    return(
        <div className='appointment'>
            <div className='appointment-top'>
                <div className='appointment-left'>
                    <img src={doctor.image} alt="appointment"/>

                </div>
                <div className='appointment-right'>
                    <h1>{doctor.name} </h1>
                    <p className='special'>{doctor.speciality}</p>
                    <p className='experience'>{doctor.experience}</p>
                    <h3>About</h3>
                    <p className='about-doctor'>{doctor.about}</p>
                    <p className='fees'>Appointment Fee: {doctor.fees}</p>
                </div>
            </div>
            <div className='booking-section'>
                <h2>Booking slots</h2>

                <div className='days-container'>
                    {days.map((item,index)=>(

                        <div className= {selectedDate===item.fullDate?"day-card active-day":"day-card"} key={index} onClick={()=>setSelectedDate (item.fullDate)}>

                            <p>{item.day.toUpperCase()}</p>
                            <span>{item.dateNumber}</span>
                        </div>
                    ))}                         
                </div>

                <div className='time-container'>
                    <button className={selectedTime==="10:00 AM" ? "active-time":""} onClick={() => setSelectedTime("10:00 AM")}>
                    10:00 AM
                    </button>

                    <button className={selectedTime==="11:00 AM" ? "active-time":""} onClick={() => setSelectedTime("11:00 AM")}>
                    11:00 AM
                    </button>

                    <button className={selectedTime==="12:00 PM" ? "active-time":""} onClick={() => setSelectedTime("12:00 PM")}>
                    12:00 PM
                    </button>

                    <button className={selectedTime==="02:00 PM" ? "active-time":""} onClick={() => setSelectedTime("02:00 PM")}>
                    2:00 PM
                    </button>

                    <button className={selectedTime==="04:00 PM" ? "active-time":""} onClick={() => setSelectedTime("04:00 PM")}>
                    4:00 PM
                    </button>
                </div>

                <button className='book-btn' onClick={handleBooking}>Book an appointment</button>
            </div>
        </div>
    )
}
export default Appointment