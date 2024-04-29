import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { editProject, getAllProjects } from "../services";
function EditCurrentProject(props) {
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [link, setLink] = useState("");
	const [id, setId] = useState({ id: "" });
	const [projects, setProjects] = useState([]);
	const Navigate = useNavigate();
	let newData = {};
	function runFetch() {
		// console.log(window)
		let pathname = window.location.pathname;
		let pathNameArray = pathname.split("/");
		let projectId = { id: pathNameArray[4] };
		setId(projectId);
		getAllProjects().then((data) => {
			let newData = JSON.stringify(data);
			let oldData = JSON.stringify(projects);
			if (oldData !== newData) {
				setProjects(data);
			}
		}, []);
	}

	useEffect(() => {
		console.log("searched");
		runFetch();
	}, []);
	newData.imageURL = imageUrl;
	newData.title = title;
	newData.summary = summary;
	newData.link = link;
	newData._id = id.id;

	function EditProjectHandler(event) {
		event.preventDefault();
		for (let project of projects) {
			if (project._id === id.id) {
				editProject(newData);
			}
		}

		Navigate("/Home");
	}

	if (!props.loggedIn) {
		return <Navigate to="/User/login" replace={true} />;
	}

	for (let project of projects) {
		if (project._id === id.id) {
			return (
				<div>
					<h1>Edit Project</h1>
					<Form onsubmit={EditProjectHandler}>
						<Form.Group className="form-group">
							<Form.Label>Project Title</Form.Label>
							<Form.Control
								type="text"
								placeholder={project.title}
								autoFocus={true}
								name="Title"
								value={title}
								onChange={(e) => {
									setTitle(e.target.value);
								}}
							></Form.Control>
							{/* Search how to make text field focus in google */}
						</Form.Group>
						<Form.Group className="form-group">
							<Form.Label>Project Summary</Form.Label>
							<Form.Control
								type="text"
								placeholder={project.summary}
								name="Summary"
								value={summary}
								onChange={(e) => {
									setSummary(e.target.value);
								}}
							></Form.Control>
							{/* Search how to make text field focus in google */}
						</Form.Group>
						<Form.Group className="form-group">
							<Form.Label>Image address</Form.Label>
							<Form.Control
								type="text"
								placeholder={project.imageUrl}
								name="imageUrl"
								value={imageUrl}
								onChange={(e) => {
									setImageUrl(e.target.value);
								}}
							></Form.Control>
							{/* Search how to make text field focus in google */}
						</Form.Group>
						<Form.Group className="form-group">
							<Form.Label>Link address for website</Form.Label>
							<Form.Control
								type="text"
								placeholder={project.link}
								name="Link"
								value={link}
								onChange={(e) => {
									setLink(e.target.value);
								}}
							></Form.Control>
							{/* Search how to make text field focus in google */}
						</Form.Group>
						<div className="create-btn-submit">
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</div>
					</Form>
				</div>
			);
		}
	}
}

export default EditCurrentProject;
