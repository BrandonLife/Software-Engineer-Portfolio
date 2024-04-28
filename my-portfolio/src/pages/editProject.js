import React from "react";
import { Form } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
function editProject() {
	return (
		<div>
			<Form>
				<Form.Group className="form-group">
					<Form.Label>Project Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Edit name of Project"
						autoFocus="true"
					></Form.Control>
					{/* Search how to make text field focus in google */}
				</Form.Group>
				<Form.Group className="form-group">
					<Form.Label>Project Summary</Form.Label>
					<Form.Control
						type="text"
						placeholder="Edit project summary"
						autoFocus="true"
					></Form.Control>
					{/* Search how to make text field focus in google */}
				</Form.Group>
				<Form.Group className="form-group">
					<Form.Label>Image address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Edit image address"
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

export default editProject;
