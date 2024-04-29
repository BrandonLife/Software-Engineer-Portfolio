import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Navigate } from "react-router-dom";
import { createNewProject } from "../services";

function CreateProject(props) {
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [link, setLink] = useState("");

	const [data, setData] = useState({
		link: "",
		imageURL: "",
		title: "",
		summary: "",
	});
	data.imageURL = imageUrl;
	data.title = title;
	data.summary = summary;
	data.link = link;
	if (!props.loggedIn) {
		return <Navigate to="/User/login" replace={true} />;
	}
	function createNewProjectHandler(event) {
		event.preventDefault();
		const newData = { ...data };
		setData(newData);
		createNewProject(newData);
		Navigate("/Project");
	}

	return (
		<div>
			<h1>Create Project</h1>
			<Form onSubmit={createNewProjectHandler}>
				<Form.Group className="form-group">
					<Form.Label>Project Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter name of Project"
						autoFocus={true}
						name="Title"
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
						placeholder="Enter project summary"
						name="Summary"
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
						placeholder="Enter image address"
						name="imageUrl"
						onChange={(e) => {
							setImageUrl(e.target.value);
						}}
					></Form.Control>
					{/* Search how to make text field focus in google */}
				</Form.Group>
				<Form.Group className="form-group">
					<Form.Label>Link address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter link address to website"
						name="Link"
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

export default CreateProject;
