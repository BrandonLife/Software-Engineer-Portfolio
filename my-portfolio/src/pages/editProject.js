import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
function EditCurrentProject(props) {
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [link, setLink] = useState("");
	const [id, setId] = useState({ id: "" });
	const [projects, setProjects] = useState([]);
	const Navigate = useNavigate();
	let newData = {};

	for (let project of projects) {
		if (project._id === id.id) {
			return (
				<div>
					<h1>Edit Project</h1>
					<Form>
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
