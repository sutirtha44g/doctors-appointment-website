import '../styles/Home.css'

import SpclCard from '../components/SpclCard'

function Home(){
    const specialities=[
        {
            name:"Dentist",
            image:"https://img.freepik.com/premium-vector/dental-clinic-logo-vector_1277164-2256.jpg"
        },
        {
            name:"Cardiologist",
            image:"https://thumbs.dreamstime.com/b/cardiology-concept-vector-simple-icon-logo-isolated-stereoscope-shape-heart-sign-white-182901419.jpg"
        },
        {
            name:"Neurologist",
            image:"https://thumbs.dreamstime.com/b/head-health-logo-template-vector-illustrator-head-intelligence-logo-designs-concept-vector-head-tech-colorful-mind-nature-head-147253598.jpg"
        },
        {
            name:"Pediatrician",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6m9SqsfiPzBXj5SyQwyxT7bTzyKWWM2UlA&s"
        },
        {
            name:"Dermatologist",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8T0SOKRNNjf7z_o0bRSRwHkxo3UxSEHM_Q&s"
        },
        {
            name:"Gynaecologist",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-Q-ADOyZAZLO4VCBG4CfCOhGh175V9ezYA&s"
        }    
    ]


    return(
        <div className="home">
            <div className="hero">
                <div className='hero-left'>

                    <h1>Doctor Appointment <br />
                    With Trusted Doctors
                    </h1>
                    <p>
                        Simply browse through our list of trusted doctors,
            schedule your appointment hassle-free.
                    </p>
                    <a href='#speciality'>
                        <button>Book Appointment
                        </button>
                    </a>
                </div>

                <div className='hero-right'>
                    <img src="https://pngimg.com/uploads/doctor/doctor_PNG16021.png" 
                    alt="doctor"/>
                </div>

            </div>

            <div className='speciality-section' id='speciality'>
                <h2>Find By Speciality</h2>

                <div className='speciality-container'>
                    {specialities.map((item,index)=>(
                        <SpclCard 
                        key={index}
                        name={item.name}
                        image={item.image}
                        />
                    ))}
                </div>
                
            </div>
            
        </div>
    )
}
export default Home