import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Contact.css'
function Contact() {
  return (
    <div>
         <div><Navbar /></div>
         <div className='contact-title-container'>
          <h1>Contact Me</h1>
        </div>
         <div className='contact-info-flex-container'>
        <div className='information'>
        <div className='email'>
        <h2>Email</h2>
        <span>Blife1119@gmail.com</span>
        </div>
        <div className='Phone'>
        <h2>Phone</h2>
        <span>919-771-6149</span>
        </div>
        <div className='Location'>
        <h2>Location</h2>
        <span>Raleigh, NC</span>
        </div>
        {/* End of information div */}
        </div>
        <div className='email-icon'>
          <img src='https://static-00.iconduck.com/assets.00/email-icon-1024x815-7gaglzqv.png' alt='email icon'></img>  
        </div>
        </div>
    </div>
  )
}

export default Contact