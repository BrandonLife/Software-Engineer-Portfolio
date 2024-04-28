import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
function projectCard(props) {
	return (
		<Card
			border="dark"
			style={{ width: "30.25rem", border: "3px solid black" }}
		>
			<Card.Img variant="top" src={props.image} />
			<Card.Body>
				<Card.Title style={{ textAlign: "center" }}>{props.Title}</Card.Title>
				<Card.Text>{props.summary}</Card.Text>
				<Button style={{ margin: "0em 0em 0em 9.75em" }} variant="dark">
					Go somewhere
				</Button>
			</Card.Body>
		</Card>
	);
}

export default projectCard;
