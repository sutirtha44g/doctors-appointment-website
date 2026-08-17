import '../styles/DoctorCard.css'
import {useNavigate} from "react-router-dom"

function DoctorCard(props){
    const navigate=useNavigate()
    return(
    <div
        className='doctor-link'
        onClick={() => {

            localStorage.setItem(
                "selectedDoctor",
                JSON.stringify(props.doctor)
            )

            navigate(`/appointment/${props.id}`)
        }}
    >
        <div className='doctor-card'>
            <img src={props.image} alt="doctor"/>

            <div className='doctor-info'>
                <p className='available'>
                    &bull; Available
                </p>

                <h3>{props.name}</h3>

                <p>{props.speciality}</p>
                <div className="arrow-btn">
                     →
                </div>
            </div>
        </div>
    </div>
)
}
export default DoctorCard