import "../styles/Footer.css"
import {Link} from "react-router-dom"

function Footer(){
    return(
        <footer className= "footer">
            <div className="footer-top">
                <div className="footer-left">
                    <h2>Medibook</h2>
                    <p>MediBook is a trusted doctor appointment
                        booking platform that helps users
                        easily connect with healthcare professionals.
                    </p>
                </div>

                <div className="footer-center">
                    <h3>Company</h3>
                    <ul>
                        <li>< Link to="/"onClick={()=>window.scrollTo(0,0)}>HOME</Link></li>
                        <li> <Link to="/about"onClick={()=>window.scrollTo(0,0)}>ABOUT</Link></li>
                        <li> <Link to="/contact"onClick={()=>window.scrollTo(0,0)}>CONTACT</Link></li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                </div>

                <div className="footer-right">
                    <h3>Get In Touch</h3>
                    <p>+91 987543210</p>
                    <p>medibook@gmail.com</p>
                </div>
            </div>

            <hr/>
            <p className="copyright">
                Copyright 2026 @ Medibook - All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer