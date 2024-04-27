import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Projects.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Projects() {
  return (
    <div>
         <div>
          <Navbar />
         </div>
         <div className='portfolio-projects'>
          <h1>Projects</h1>
         </div>
    <div className='cards-container'>
    <Card border='dark' style={{ width: '30.25rem', border: '3px solid black' }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
      <Card.Body>
        <Card.Title style={{textAlign: 'center'}}>Project Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{margin: '0em 0em 0em 9.75em'}} variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card border='dark' style={{ width: '30.25rem', border: '3px solid black' }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
      <Card.Body>
        <Card.Title style={{textAlign: 'center'}}>Project Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{margin: '0em 0em 0em 9.75em'}} variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card border='dark' style={{ width: '30.25rem', border: '3px solid black' }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
      <Card.Body>
        <Card.Title style={{textAlign: 'center'}}>Project Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{margin: '0em 0em 0em 9.75em'}} variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card border='dark' style={{ width: '30.25rem', border: '3px solid black' }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
      <Card.Body>
        <Card.Title style={{textAlign: 'center'}}>Project Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{margin: '0em 0em 0em 9.75em'}} variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card border='dark' style={{ width: '30.25rem', border: '3px solid black' }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
      <Card.Body>
        <Card.Title style={{textAlign: 'center'}}>Project Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{margin: '0em 0em 0em 9.75em'}} variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card border='dark' style={{ width: '30.25rem', border: '3px solid black' }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
      <Card.Body>
        <Card.Title style={{textAlign: 'center'}}>Project Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{margin: '0em 0em 0em 9.75em'}} variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card border='dark' style={{ width: '30.25rem', border: '3px solid black' }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
      <Card.Body>
        <Card.Title style={{textAlign: 'center'}}>Project Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{margin: '0em 0em 0em 9.75em'}} variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    
  </div>
  )
}

export default Projects