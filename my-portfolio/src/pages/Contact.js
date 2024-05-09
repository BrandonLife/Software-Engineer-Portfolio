import React, { useState } from "react";
import "../styles/Contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { baseURL } from "../utils/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Contact() {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')
const [subject, setSubject] = useState('')
const Navigate = useNavigate()
function submitEmail(e){
	e.preventDefault()
	axios.post(`${baseURL}/email/send`, {
		firstName,
		lastName,
		email,
		message,
		phoneNumber,
		subject
	})
	.then((res)=>{
		console.log(res)
	})
	.catch((err)=>console.log(err))
	alert('Message Sent')
	Navigate('/')
}
	return (
		<div className="contact-body">
			<div className="contact-form-container">
				<Form onSubmit={(e)=>submitEmail(e)}>
					<div className="contact-us-title">
						<h1>Let's connect</h1>
					</div>
					<Form.Group className="form-group">
						<Form.Label>First Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter your first Name"
							autoFocus={true}
							onChange={(e)=>{
								setFirstName(e.target.value)
							}}
						></Form.Control>
						{/* Search how to make text field focus in google */}
					</Form.Group>
					<Form.Group className="form-group">
						<Form.Label>Last Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter your last Name"
							onChange={(e)=>{
								setLastName(e.target.value)
							}}
						></Form.Control>
					</Form.Group>
					<Form.Group className="form-group">
						<Form.Label>Email Address📨</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter your email address. Ex. JohnDoe@gmail.com"
							onChange={(e)=>{
								setEmail(e.target.value)
							}}
						></Form.Control>
					</Form.Group>
					<Form.Group className="form-group">
						<Form.Label>Phone number📞</Form.Label>
						<Form.Control
							type="number"
							placeholder="Enter your phone number. Ex.1234567890"
							onChange={(e)=>{
								setPhoneNumber(e.target.value)
							}}
						></Form.Control>
					</Form.Group>
					<Form.Group className="form-group">
						<Form.Label>Subject</Form.Label>
						<Form.Control
							type="text"
							placeholder="Subject Line"
							onChange={(e)=>{
								setSubject(e.target.value)
							}}
						></Form.Control>
					</Form.Group>
					<Form.Group className="form-group">
						<Form.Label>Message📝</Form.Label>
						<InputGroup>
							<Form.Control
								as="textarea"
								maxLength={120}
								aria-label="With textarea"
								onChange={(e)=>{
									setMessage(e.target.value)
								}}
							/>
						</InputGroup>
						{/* Found this at https://react-bootstrap.netlify.app/docs/forms/input-group */}
					</Form.Group>
					<div className="button-container">
						<Button variant="primary" type="submit">
							Send ✅
						</Button>
					</div>
					<div className="find-me-title">
									<h3>You can also connect with me on</h3>
								</div>
					<div className="social-media-links">
								
								<div className="social-links">
									<a href="https://www.linkedin.com/in/brandon-life/">
									<div className="linkedin-container">
										<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" alt="LinkedIn logo"></img>
									</div>
									<div className="linkedin-span">
										<span><p>LinkedIn</p></span>
									</div>
									</a>
								</div>
								<div className="social-links">
									<a href="https://github.com/BrandonLife">
									<div className="github-container">
										<img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Github logo"></img>
									</div>
									<div className="github-span">
										<span><p>Github</p></span>
									</div>
									</a>
								</div>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default Contact;
