import React from "react";
import { Form } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function createProject() {
	return (
		<div>
			<Form>
				<Form.Group className="form-group">
					<Form.Label>Project Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter name of Project"
						autoFocus="true"
					></Form.Control>
					{/* Search how to make text field focus in google */}
				</Form.Group>
				<Form.Group className="form-group">
					<Form.Label>Project Summary</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter project summary"
						autoFocus="true"
					></Form.Control>
					{/* Search how to make text field focus in google */}
				</Form.Group>
				<Form.Group className="form-group">
					<Form.Label>Image address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter image address"
						autoFocus="true"
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

export default createProject;
