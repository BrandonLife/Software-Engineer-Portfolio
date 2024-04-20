import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Projects.css'
function Projects() {
  return (
    <div>
         <div><Navbar /></div>
        <div className='projects-container-title'>
            <h1>Projects</h1>
        </div>
        <div className='projects-container'>
            <ul>
                <li><a href='www.google.com'>Project 1</a></li>
                <li><a href='www.google.com'>Project 1</a></li>
                <li><a href='www.google.com'>Project 1</a></li>
                <li><a href='www.google.com'>Project 1</a></li>
                <li><a href='www.google.com'>Project 1</a></li>
                <li><a href='www.google.com'>Project 1</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Projects