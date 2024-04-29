import { useState } from "react";
import { UserRegister } from "../services";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import "../styles/Register.css";

export default function Register(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [rePassword, setRePassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const Navigate = useNavigate();
	function registerHandler(event) {
		event.preventDefault();
		let incorrectInput = false;
		if (username.length === 0) {
			incorrectInput = true;
			console.log("Please type in username");
		}
		if (password.length === 0) {
			incorrectInput = true;
			console.log("Please type in password");
		}
		if (email.length === 0) {
			incorrectInput = true;
			console.log("Please enter email");
		}
		if (password !== rePassword) {
			incorrectInput = true;
			console.log("Passwords must match");
		}
		if (!incorrectInput) {
			UserRegister({
				username,
				email,
				password,
				rePassword,
			}).then((data) => {
				console.log(data);
				// if(data.id){
				Navigate("/Home");
				// }else{
				// 	console.log("user creation was not successful");
				// }
			});
		} else {
			console.log("There was an error, please try again.");
		}
	}
	useEffect(() => {
		if (props.loggedIn) {
			return Navigate("/Home");
		}
	});

	return (
		<div className="Register-Form-container">
			<Form onSubmit={registerHandler}>
				<div>
					<h1>Register</h1>
				</div>
				<Form.Group className="form-group">
					<Form.Label>First name</Form.Label>
					<Form.Control
						type="text"
						value={firstName}
						placeholder="Enter first name"
						autoFocus={true}
						name="FirstName"
						onChange={(e) => {
							setFirstName(e.target.value);
						}}
					></Form.Control>
					{/* Search how to make text field focus in google */}
				</Form.Group>
				<Form.Group className="form-group">
					<Form.Label>Last name</Form.Label>
					<Form.Control
						type="text"
						value={lastName}
						placeholder="Enter last name"
						name="LastName"
						onChange={(e) => {
							setLastName(e.target.value);
						}}
					></Form.Control>
					{/* Search how to make text field focus in google */}
				</Form.Group>
				<Form.Group className="form-group">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						value={username}
						placeholder="Enter username"
						name="Username"
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					></Form.Control>
					{/* Search how to make text field focus in google */}
				</Form.Group>
				<Form.Group className="form-group">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="text"
						value={password}
						placeholder="Enter password"
						name="Password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					></Form.Control>
					{/* Search how to make text field focus in google */}
				</Form.Group>
				<Form.Group className="form-group">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type="text"
						value={rePassword}
						placeholder="Confirm password"
						name="rePassword"
						onChange={(e) => {
							setRePassword(e.target.value);
						}}
					></Form.Control>
					{/* Search how to make text field focus in google */}
				</Form.Group>
				<Form.Group className="form-group">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="text"
						value={email}
						placeholder="Enter your email address"
						name="email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					></Form.Control>
					{/* Search how to make text field focus in google */}
				</Form.Group>
				<div>
					<Button type="submit">Log in</Button>
				</div>
			</Form>
		</div>
	);
}
