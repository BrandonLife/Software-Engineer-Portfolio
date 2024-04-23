import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'

function Home() {
  return (
  <div>
        <Navbar />
    <main className='home-flex-container'>
       <div className='home-image-profile'>
          <img src='https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170620_p_v8_az.jpg' alt='home page profile pic'></img>
        </div>
     <div className='main-container'>
      <div className='cover-title'>
          <div>
          <h1>Hello, my name is Brandon.</h1>
          </div>
          <div>
          <h2>I am a Software Engineer.</h2>
          </div>
          </div>
      </div>
    </main>
</div>
  )
}

export default Home