import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Contact.css'
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import InputGroup from 'react-bootstrap/InputGroup'
function Contact() {
  return (
    <div className='contact-body'>
         <div>
          <Navbar />
         </div>
         <div className='contact-form-container'>
          <div className='contact-us-title'>
          <h3>Contact Us</h3>
          </div>
        <Form>
          <Form.Group className='form-group'>
            <Form.Label>First Name</Form.Label>
            <Form.Control type='text' placeholder='Enter your first Name' autoFocus="true"></Form.Control>
            {/* Search how to make text field focus in google */}
            </Form.Group>
            <Form.Group className='form-group'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='text' placeholder='Enter  your last Name'></Form.Control>
          </Form.Group>
          <Form.Group className='form-group'>
            <Form.Label>Email Address📨</Form.Label>
            <Form.Control type='email' placeholder='Enter your email address. Ex. JohnDoe@gmail.com'></Form.Control>
          </Form.Group>
          <Form.Group className='form-group'>
            <Form.Label>Phone number📞</Form.Label>
            <Form.Control type='number' placeholder='Enter your phone number. Ex.123-456-7890'></Form.Control>
          </Form.Group>
          <Form.Group className='form-group'>
          <Form.Label>Message📝</Form.Label>
          <InputGroup>
          <Form.Control as="textarea" maxLength={120} aria-label="With textarea" />
         </InputGroup>
         {/* Found this at https://react-bootstrap.netlify.app/docs/forms/input-group */}
          </Form.Group>
          <div className='button-container'>
          <Button variant='primary' type='submit'>
            Send ✅
          </Button>
          </div>
         </Form>
         </div>
    </div>
    
  )
}

export default Contact

