import '../styles/Contact.css'

function Contact(){
    return(
        <div className='contact'>
            <h1 className='contact-title'>
                CONTACT US
            </h1>
            <div className="contact-line"></div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <img src="https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg" alt=""/>

                </div>
                <div className='contact-right'>
                    <h3>OUR OFFICE</h3>

                    <p> 00000 Willms Station
                        Suite 000 <br /> Washington <br /> USA</p>
                    <p>
                        Tel: (000) 000-0000<br />
                        Email: medibook@gmail.com
                    </p>
                    <h2>
                        CAREERS AT MEDIBOOK
                    </h2>
                    <p>Learn more about our teams and job openings.</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact

