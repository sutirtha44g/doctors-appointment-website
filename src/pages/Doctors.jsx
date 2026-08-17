import '../styles/Doctors.css'
import DoctorCard from '../components/DoctorCard'
import {useState,useEffect} from "react"
import { useParams } from 'react-router-dom'

function Doctors(){

    const [filter,setFilter]=useState("All")
    const {speciality}=useParams()

    useEffect(()=>{
        if(speciality){
            setFilter(speciality)

        }
        else{
            setFilter("All")
        }
    },[speciality])

    const doctors=[
        
        {
        id:1,
        name:"Dr. Richard James",
        speciality:"General Physician",
        image:"https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png",
        experience:"10 Years Experience",
        fees:"₹1000",
        about:"Dr. Richard James is an experienced General Physician."
        },

        {
        id:2,
        name:"Dr. Sarah Lee",
        speciality:"Gynaecologist",
        image:"https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc2.png",
        experience:"10 Years Experience",
        fees:"₹1000",
        about:"Dr. Richard James is an experienced General Physician."
        },

        {
        id:3,
        name:"Dr. Michael Brown",
        speciality:"Dermatologist",
        image:"https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc3.png",
        experience:"10 Years Experience",
        fees:"₹1000",
        about:"Dr. Richard James is an experienced General Physician."
        },

        {
        id:4,
        name:"Dr. Jennifer Davis",
        speciality:"Pediatrician",
        image:"https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc5.png",
        experience:"10 Years Experience",
        fees:"₹1000",
        about:"Dr. Richard James is an experienced General Physician."
        },
        {
        id:5,
        name:"Dr. Emily Davis",
        speciality:"Dentist",
        image:"https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc6.png",
        experience:"10 Years Experience",
        fees:"₹1000",
        about:"Dr. Richard James is an experienced General Physician."

        },
        {
        id:6,
        name:"Dr. Joe Kelly",
        speciality:"Cardiologist",
        image:"https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc11.png",
        experience:"10 Years Experience",
        fees:"₹1000",
        about:"Dr. Richard James is an experienced General Physician."
        },
        {
        id:7,
        name:"Dr. Amellia Hill",
        speciality:"Neurologist",
        image:"https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc13.png",
        experience:"10 Years Experience",
        fees:"₹1000",
        about:"Dr. Richard James is an experienced General Physician."
        }
        
        

    ]
        

    
    return(

        <div className="doctors">
            <h1>Browse through the Doctor's Specialist</h1>
            <div className="doctors-container">
                <div className="sidebar">
                    <p className={filter==="All" ? "active" : ""} onClick={()=>setFilter("All")}>All Doctors</p>
                    <p className={filter==="Gynaecologist" ? "active" : ""} onClick ={()=>setFilter("Gynaecologist")}>Gynaecologist</p>
                    <p className={filter==="Dermatologist" ? "active" : ""} onClick ={()=>setFilter("Dermatologist")}>Dermatologist</p>
                    <p className={filter==="Cardiologist" ? "active" : ""} onClick ={()=>setFilter("Cardiologist")}>Cardiologist</p>
                    <p className={filter==="Dentist" ? "active" : ""} onClick ={()=>setFilter("Dentist")}>Dentist</p>
                    <p className={filter==="Pediatrician" ? "active" : ""} onClick ={()=>setFilter("Pediatrician")}>Pediatrician</p>
                    <p className={filter==="Neurologist" ? "active" : ""} onClick ={()=>setFilter("Neurologist")}>Neurologist</p>
                </div>

                <div className="doctor-grid">
                    {doctors.filter((doctor)=> filter==="All" ? true : doctor.speciality===filter).map((doctor,index)=>(
                        <DoctorCard
                            key={doctor.id}
                            doctor={doctor}
                            id={doctor.id}
                            name={doctor.name}
                            speciality={doctor.speciality}
                            image={doctor.image}
                        />


                    ))}
                </div>
            </div>
        </div>
    )
}

export default Doctors