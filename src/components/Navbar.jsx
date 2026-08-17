import '../styles/Navbar.css'
import {Link, useNavigate} from "react-router-dom"
import {useState,useEffect,useRef} from "react"

function Navbar({currentUser,setCurrentUser}){
    const[showMenu,setShowMenu]=useState(false)
    const menuRef=useRef()
    const navigate=useNavigate()
    useEffect(()=>{
        function handleClickOutside(event){
            if(
                menuRef.current && !menuRef.current.contains(event.target)

            ){
                setShowMenu(false)
            }
        }
        document.addEventListener(
            "mousedown",handleClickOutside
        )
        return()=>{
            document.removeEventListener(
                "mousedown",handleClickOutside
            )
        }
    },[])

    function handleLogout(){
        localStorage.removeItem("currentUser")
        setCurrentUser(null)
        navigate("/signup")
    }
    return(
        <nav className="navbar">
            <h2 className="logo">MediBook</h2>
            <ul className="nav-link">
                <li> 
                    <Link to="/">HOME</Link>
                </li>
                <li> 
                    <Link to="/doctors">DOCTORS</Link>
                </li>
                <li> 
                    <Link to="/about">ABOUT</Link>
                </li>
                <li> 
                    <Link to="/contact">CONTACT</Link>
                </li>
                
            </ul>

            {
                currentUser?(
                    <div className='profile-section' ref={menuRef}>
                        <img src={currentUser?.image || "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg"} alt=" " 
                        onClick={()=>setShowMenu(!showMenu)}/>
                        {
                            showMenu &&(
                                <div className="dropdown-menu">
                                    <Link to="/profile">
                                        <p>My Profile</p>
                                    </Link>
                                    <Link to="/myappointments">
                                        <p>My Appointment</p>
                                    </Link>
                                    <p onClick={handleLogout}>Logout </p>
                                </div>
                            )
                        }
                    </div>
                ):(
                    <button className='login-btn'>
                        <Link to="/signup">
                            Create Account
                        </Link>
                    </button>
                )
            }
            
        </nav>
    )
}
export default Navbar