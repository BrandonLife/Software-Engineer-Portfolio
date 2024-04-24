import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/Skills.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
function Skills() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <div>
         <div><Navbar /></div>
        <div className='skills-title-container'>
            <h1>My Tech Stacks</h1>
        </div>
    <div className='carousel-container'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image style={{width: '1100px'}} src='https://www.rlogical.com/wp-content/uploads/2020/12/MERN.webp' text="MERN stack" />
      </Carousel.Item>
      <Carousel.Item>
        <Image style={{width: '1035px'}}src='https://miro.medium.com/v2/resize:fit:1400/1*aXe6MaOyhdIP5WqdPHhSFw.png' text="Java/Spring Boot" />
      </Carousel.Item>
      <Carousel.Item>
        <Image style={{width: '1200px'}} src='https://miro.medium.com/v2/resize:fit:718/1*brlB5AvmCYPnL2sP2cnV4w.png' text="Python/Flask" />
      </Carousel.Item>
    </Carousel>
    </div>
   
    </div>
  )
}

export default Skills