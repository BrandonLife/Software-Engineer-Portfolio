import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'

function Home() {
  return (
    <main>
    <div className='main-container'>
        <div><Navbar /></div>
        <div className='cover-title'>
            <h1>Software Engineer Portfolio</h1>
        </div>
    </div>
    </main>
  )
}

export default Home