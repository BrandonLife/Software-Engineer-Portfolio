import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState } from "react";
import "../styles/Navbar.css";
function Navbar(props) {
	const [cookies, setCookie, removeCookie] = useCookies(["User"]);
	let loggedIn = props.loggedIn;
	let loggedInRoutes = [];
	function logoutHandler(event) {
		event.preventDefault();
		props.setLoggedIn(false);
		props.removeCookie("x-auth-token", { path: "/" });
		console.log("button pressed");
	}
	if (loggedIn) {
		loggedInRoutes = [
			<li className="links">
				<Link to="/Home">Home</Link>
			</li>,
			<li className="links">
				<Link to="/About">About</Link>
			</li>,
			<li className="links">
				<Link to="/Skills">Skills</Link>
			</li>,
			<li className="links">
				<Link to="/Portfolio">Portfolio</Link>
			</li>,
			<li className="links">
				<Link to="/Contact">Contact</Link>
			</li>,
			<li className="links">
				<Link to="/Project">Projects</Link>
			</li>,
			<li className="links">
				<Link to="/Project/createProject"> New Project</Link>
			</li>,
			<li>
				<Link onClick={logoutHandler} to="/User/logout">
					Logout
				</Link>
			</li>,
		];
	} else {
		loggedInRoutes = [
			<li className="links">
				<Link to="/Home">Home</Link>
			</li>,
			<li className="links">
				<Link to="/About">About</Link>
			</li>,
			<li className="links">
				<Link to="/Skills">Skills</Link>
			</li>,
			<li className="links">
				<Link to="/Contact">Contact Us</Link>
			</li>,
			<li className="links">
				<Link to="/User/register">Register</Link>
			</li>,
			<li className="links">
				<Link to="/User/login">Login</Link>
			</li>,
		];
	}

	return (
		<div className="navbar">
			<ul className="nav-links">
				{loggedInRoutes.map((links) => {
					return <li>{links}</li>;
				})}
			</ul>
		</div>
	);
}

export default Navbar;
