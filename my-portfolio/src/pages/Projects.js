import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Projects.css";

function Projects() {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div className="portfolio-projects">
				<h1>Projects</h1>
			</div>
			<div className="cards-container"></div>
		</div>
	);
}

export default Projects;
