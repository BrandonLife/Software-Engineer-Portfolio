import React, { useState } from "react";
import "../styles/Projects.css";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import { baseURL } from "../utils/constant";
function Projects() {
	const [projects, setProjects] = useState([]);

	console.log(projects);
	useEffect(() => {
		axios.get(`${baseURL}/get`).then((res) => {
			setProjects(res.data);
		});
	}, []);
	const projectsDisplay = projects.map((project) => {
		return (
			<Card
				key={project._id}
				style={{ width: "18rem", border: "3px solid black" }}
			>
				<Card.Img variant="top" src={project.imageUrl} />
				<Card.Body>
					<Card.Title className="card-title">{project.title}</Card.Title>
					<Card.Text className="card-summary">{project.summary}</Card.Text>
					<Button
						style={{
							border: "2px solid black",
							fontWeight: "bold",
							fontFamily: "Arial, Helvetica, sans-serif",
							padding: ".25em",
							color: "black",
							backgroundColor: "silver",
						}}
						className="card-button"
						href={project.linkAddress}
					>
						Go to Deployed Project
					</Button>
				</Card.Body>
			</Card>
		);
	});

	return (
		<div>
			<h1 className="Portfolio-title">My Projects</h1>
			<div>{projectsDisplay}</div>
		</div>
	);
}
export default Projects;
