import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import { baseURL } from "../utils/constant";

function CreateProject(props) {
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [link, setLink] = useState("");

	const project = {
		title: title,
		summary: summary,
		imageUrl: imageUrl,
		link: link,
	};

	const addProject = () => {
		axios.post(`${baseURL}/save`, { project: project }).then((res) => {
			console.log(res.data);
		});
	};

	return (
		<div>
			<h1>Create Project</h1>
			<Form onSubmit={addProject}>
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
