import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Skills.css'
function Skills() {
  return (
    <div>
         <div><Navbar /></div>
        <div className='skills-title-container'>
            <h1>My Tech Stacks</h1>
        </div>
        <div className='skills-flex-container'>
        <div className='skills-tech-container'>
            <ul>
                <h2>M.E.R.N.</h2>
                <li>MongoDB, ExpressJs, ReactJs, NodeJs</li>
                <h2>Java</h2>
                <li>ReactJs, PostgreSQL, MongoDB, Spring Boot</li>
                <h2>Python</h2>
                <li>ReactJs, PostgreSQL, Flask</li>
            </ul>
        </div>
        <div className='skills-image-container'>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFkr9kpCX1q6mxvBKC22eqzxuNnVIH9GCzW_8-pHsCA&s' alt='mern stack'></img>
            </div>
            <div>
                <img src='https://repository-images.githubusercontent.com/655904558/0801a430-6eb9-4fc8-ad79-d350212005d8' alt='java spring boot'></img>
            </div>
            <div>
                <img src='https://i.ytimg.com/vi/7LNl2JlZKHA/maxresdefault.jpg' alt='Python flask react'></img>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills