import React, { useState } from "react";
import "../styles/Projects.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import { baseURL } from "../utils/constant";
function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		axios.get(`${baseURL}/get`).then((res) => {
			setProjects(res.data);
		});
	}, []);

	const projectsDisplay = projects.map((project) => {
		return (
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>{project.title}</Card.Title>
					<Card.Text>{project.summary}</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		);
	});

	return <div>{projectsDisplay}</div>;
}
export default Projects;
