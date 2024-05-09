import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import { baseURL } from "../utils/constant";
import {useNavigate} from 'react-router-dom'
import "../styles/createProject.css";

function CreateProject() {
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [linkAddress, setLink] = useState("");
	const Navigate = useNavigate() 
	console.log(title, summary, imageUrl, linkAddress);

	function submit(e) {
		e.preventDefault();
		axios
			.post(`${baseURL}/save`, {
				title,
				summary,
				imageUrl,
				linkAddress,
			})
			.then((res) => {
				Navigate('/')
			})
			.catch((err) => console.log(err));
	}

	return (
		<div>
			
			<Form onSubmit={(e) => submit(e)}>
			<h1 className="create-title">Create Project</h1>
				<Form.Group className="form-group">
					<Form.Label>Project Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter name of Project"
						autoFocus={true}
						name="title"
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
						name="summary"
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
						name="linkAddress"
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
