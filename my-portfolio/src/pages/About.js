import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/About.css'
function About() {
  return (
    <div>
         <div><Navbar /></div>
        <div className='about-me-info-title'>
            <h1>About Me</h1>
        </div>
        <div className='about-flex-container'>
        <div className='image-container'>
            <img src='https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170620_p_v8_az.jpg' alt='iron man'></img>
        </div>
        <div className='about-paragraph'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid.</p>
        </div>
        </div>
    </div>
  )
}

export default About