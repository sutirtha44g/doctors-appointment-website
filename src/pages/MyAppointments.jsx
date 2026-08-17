import "../styles/MyAppointments.css"
import Appointment from "./Appointment"
import { useState } from "react"

function MyAppointments(){
    const [openPayment,setOpenPayment]=useState(null)

    const appointments=JSON.parse(
        localStorage.getItem('appointments')
    ) || []

    function handleDelete(id){
        const updatedAppointments=appointments.filter(item=>item.id!==id)
        localStorage.setItem('appointments',JSON.stringify(updatedAppointments))
        window.location.reload()
    }
    function handleCancel(id){
        const updatedAppointments=appointments.map(item=>item.id===id ?{...item,cancelled:true}:item)
        
        localStorage.setItem('appointments',JSON.stringify(updatedAppointments))
        window.location.reload()
    }
    function handlePayment(){
        alert("Payment demo")
    }
    return(
        <div className="appointments-page">
            <h1>My Appointments</h1>
            {appointments.length===0?(
                <p className="empty-text">No Appointments booked yet</p>
            ):(
            
                [...appointments].reverse().map((item,index)=>(
                    <div className="appointment-card" key={index}>
                        <img src={item.image} alt=''/>

                        <div className="appointment-info">

                            <h2>{item.name}</h2>
                            <p>{item.speciality}</p>
                            <p>
                                <strong>Date:</strong>
                                {item.date}
                            </p>
                            <p>
                                <strong>Time:</strong>
                                {item.time}
                            </p>
                        </div>
                        <div className="appointment-actions">
                            {
                                !item.cancelled && (
                                    <div className="payment-section">
                                <button className="payment-btn" onClick={()=>setOpenPayment(openPayment===index?null:index)}>Payment</button>
                                {
                                    openPayment===index && (
                                        <div className="payment-options">
                                            <p onClick={handlePayment}>Gpay</p>
                                            <p onClick={handlePayment}>PhonePe</p>
                                        </div>
                                    )
                                }
                            </div>

                                )
                            }
                            
                            
                            {item.cancelled?(<>
                            <button className="cancelled-btn"> Appointment Cancelled</button>
                            <button className="delete-btn" onClick={()=>handleDelete(item.id)}> Delete Appointment</button>
                            </>
                            ): (<button className="cancel-btn" onClick={()=>handleCancel(item.id)}>Cancel Appointment</button>)}

                        </div>
                    </div>
                ))
                
            )}
        </div>

    )
}
export default MyAppointments