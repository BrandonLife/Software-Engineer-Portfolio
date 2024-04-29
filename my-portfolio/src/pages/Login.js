import { UserLogin } from "../services";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import "../styles/Login.css";

export default function Login(props) {
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	// const [loggedIn, setLoggedIn] = useState('');
	const [cookies, setCookie] = useCookies(["User"]);

	if (props.loggedIn) {
		return <Navigate to="/" replace={true} />;
	}
	function loginHandler(event) {
		event.preventDefault();
		let incorrectInput = false;
		// if(email.length === 0){
		//   //error
		//   console.log("There is no email")
		//   incorrectInput= true
		// }
		if (password.length === 0) {
			//error
			console.log("There is no password");
			incorrectInput = true;
		}
		if (username.length === 0) {
			//error
			console.log("No username found");
			incorrectInput = true;
		}

		if (!incorrectInput) {
			UserLogin({
				username: username,
				password: password,
			}).then((data) => {
				console.log(data);
				props.setCookie(data.cookieName, data.token, {
					path: "/",
					maxAge: 60 * 60 * 1000,
				});

				props.setLoggedIn(true);
				props.setUserId(data.user._id);
			});
		} else {
			console.log("There was an error, please try again.");
		}
	}
	return (
		<div className="Login-Form-container">
			<Form onSubmit={loginHandler}>
				<div>
					<h1>Login</h1>
				</div>
				<Form.Group className="form-group">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						value={username}
						placeholder="Enter username"
						autoFocus={true}
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
						onChange={(e) => {
							setPassword(e.target.value);
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
