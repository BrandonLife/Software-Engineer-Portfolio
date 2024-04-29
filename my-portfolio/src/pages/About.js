import React from "react";
import "../styles/About.css";
function About() {
	return (
		<div>
			<div className="about-me-info-title">
				<h1>About Me</h1>
			</div>
			<div className="about-flex-container">
				<div className="image-container">
					<img
						src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170620_p_v8_az.jpg"
						alt="iron man"
					></img>
				</div>
				<div className="about-paragraph">
					<p>
						Hello and welcome to my portfolio. Ever since I was a kid, all I can
						remember is playing video games and the joy it brought me. My
						introduction into programming began when I used to insert cheat
						codes into some of the games I was playing. Since then, I have
						failed visual basic programming, linux programming, and java
						programming. However, I did not give up and as a result, I have
						completed two coding bootcamps. My goal is to one day become a
						blockchain engineer with a focus on security. For work, I have been
						employed doing security/loss prevention for 10+ years. I am looking
						to transition into the sofware development industry and combine my
						years of security experience with sofware development.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
