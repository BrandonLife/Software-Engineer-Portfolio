import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import TextTransition, { presets } from "react-text-transition";
import Ironman from "./IronMan.png";
// Found this text transition package at https://www.npmjs.com/package/react-text-transition
const PDF_URL = "https://software-engineer-portfolio-frontend.onrender.com/BL_Resume2023.pdf";
function Home() {
	const wordsArr = [
		"Software Engineer",
		"Web Developer",
		"Full Stack Engineer",
		"Computer Programmer",
		"Future Leader",
		"Future Blockchain Engineer",
	];
	const [timer, setTimer] = useState(0);
	// Found how to create a downloadable link from this link- https://www.youtube.com/watch?v=IPEqb_AJbAQ&t=309s
	const downloadFileAtUrl = (url) => {
		const filename = PDF_URL.split("/").pop();
		const aTag = document.createElement("a");
		aTag.href = url;
		aTag.setAttribute("download", filename);
		document.body.appendChild(aTag);
		aTag.click();
		aTag.remove();
	};

	useEffect(() => {
		const intervalId = setInterval(
			() => setTimer((timer) => timer + 1),
			3000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<div>
			<main className="home-flex-container">
				<div className="home-image-profile">
					<img
						className="fade-in"
						src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170620_p_v8_az.jpg"
						alt="home page profile pic"
					></img>
				</div>
				<div className="main-container">
					<div className="cover-title">
						<div>
							<h1>Hello, my name is Brandon</h1>
						</div>
						<div>
							<h2>
								I am a{" "}
								<TextTransition
									className="text-transition"
									springConfig={presets.wobbly}
								>
									{wordsArr[timer % wordsArr.length]}
								</TextTransition>
							</h2>
						</div>
					</div>
					<div className="downloadable-button">
						<button
							onClick={() => {
								downloadFileAtUrl(PDF_URL);
							}}
							className="button"
						>
							<a>Download Resume</a>
						</button>
					</div>
				</div>
				<div className="iron-man-image-container">
					<img src={Ironman} alt="iron man"></img>
				</div>
			</main>
		</div>
	);
}

export default Home;
