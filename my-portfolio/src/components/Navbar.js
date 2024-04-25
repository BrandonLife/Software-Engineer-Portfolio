import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <ul className='nav-links'>
            <li className='links'><Link to='/Home'>Home</Link></li>
            <li className='links'><Link to='/About' >About</Link></li>
            <li className='links'><Link to='/Skills'>Skills</Link></li>
            <li className='links'><Link to='/Portfolio' >Portfolio</Link></li>
            <li className='links'><Link to='/Contact'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar