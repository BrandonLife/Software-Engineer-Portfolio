import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
	let navRoutes = [
		<li className="links">
			<Link to="/">Home</Link>
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
			<Link to="/Project/createProject"> New Project</Link>
		</li>,
	];

	return (
		<div className="navbar">
			<ul className="nav-links">
				{navRoutes.map((links) => {
					return <div>{links}</div>;
				})}
			</ul>
		</div>
	);
}

export default Navbar;
