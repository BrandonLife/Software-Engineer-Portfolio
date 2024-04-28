import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
function projectCard() {
	return (
		<Card
			border="dark"
			style={{ width: "30.25rem", border: "3px solid black" }}
		>
			<Card.Img
				variant="top"
				src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
			/>
			<Card.Body>
				<Card.Title style={{ textAlign: "center" }}>Project Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
				<Button style={{ margin: "0em 0em 0em 9.75em" }} variant="dark">
					Go somewhere
				</Button>
			</Card.Body>
		</Card>
	);
}

export default projectCard;
