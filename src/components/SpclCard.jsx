import "../styles/SpclCard.css"
import {Link} from "react-router-dom"

function SpclCard(props){
    return(
        <Link to={`/doctors/${props.name}`}className="spcl">
            <div className="speciality-card">
                <img  
                src={props.image}
                alt="doctor"
                />
                <p>{props.name}</p>
            </div>
        </Link>
    )
        
    
}
export default SpclCard