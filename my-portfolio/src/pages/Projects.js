import React, { useState } from "react";
import "../styles/Projects.css";
import { deleteProject, getAllProjects } from "../services";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
function Projects(props) {
	const [projects, setProjects] = useState([]);
	const [projectUrlId, setProjectUrlId] = useState("");
	const Navigate = useNavigate();

	let projectId = "";
	function runFetch() {
		let pathname = window.location.pathname;
		let pathNameArray = pathname.split("/");
		projectId = pathNameArray[2];
		setProjectUrlId(projectId);
		// getOnePost(postUrlId)
		getAllProjects().then((data) => {
			let newData = JSON.stringify(data);
			let oldData = JSON.stringify(projects);
			if (oldData !== newData) {
				setProjects(data);
			}
		}, []);
	}

	function DeleteHandler() {
		deleteProject(projectUrlId);
		Navigate("/Project");
	}
	useEffect(() => {
		console.log("searched");
		runFetch();
	}, []);

	if (!props.loggedIn) {
		return <Navigate to="/User/login" replace={true} />;
	}

	for (let project of projects) {
		if (project._id === projectUrlId) {
			return (
				<Card
					border="dark"
					style={{ width: "30.25rem", border: "3px solid black" }}
				>
					<Card.Img variant="top" src={props.imageUrl} />
					<Card.Body>
						<Card.Title style={{ textAlign: "center" }}>
							{props.Title}
						</Card.Title>
						<Card.Text>{props.Summary}</Card.Text>
						<Button style={{ margin: "0em 0em 0em 9.75em" }} variant="dark">
							{props.Link}
						</Button>
						<Button style={{ margin: "0em 0em 0em 9.75em" }} variant="dark">
							<Link to={`/Project/${projectUrlId}`}>Edit</Link>
						</Button>
						<Button style={{ margin: "0em 0em 0em 9.75em" }} variant="dark">
							<Link onClick={DeleteHandler}>Delete</Link>
						</Button>
					</Card.Body>
				</Card>
			);
		}
	}
}

export default Projects;
