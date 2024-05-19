import React from "react";
import { FaCode, FaServer } from "react-icons/fa";
import "../styles/Skills.css";
function Skills() {
	return (
		<section id="skills">
			<h2>Skills</h2>
			<div className="skills-grid">
				<div className="skill-category">
					<FaCode className="skill-icon" />
					<h3>Frontend</h3>
					<ul>
						<li>React.js</li>
						<li>JavaScript (ES6+)</li>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Responsive Design (CSS Grid/Flexbox)</li>
						<li>React Boostrap</li>
						<li>Some Figma</li>
						<li>Canva</li>
						<li>DOM Manipulation</li>
					</ul>
				</div>
				<div className="skill-category">
					<FaServer className="skill-icon" />
					<h3>Backend</h3>
					<ul>
						<li>Node.js</li>
						<li>Express.js</li>
						<li>MongoDB/PostgreSQL</li>
						<li>RESTful APIs</li>
						<li>Git</li>
						<li>GitHub</li>
						<li>Postman</li>
						<li>AJAX</li>
						<li>Fetch/Axios</li>
						<li>Render/Netlify/Github Pages</li>
						<li>Authorization/Authentication</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Skills;

{
	/* <div className='carousel-container'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image style={{width: '1100px'}} src='https://www.rlogical.com/wp-content/uploads/2020/12/MERN.webp' text="MERN stack" />
      </Carousel.Item>
      <Carousel.Item>
        <Image style={{width: '1035px'}}src='https://miro.medium.com/v2/resize:fit:1400/1*aXe6MaOyhdIP5WqdPHhSFw.png' text="Java/Spring Boot" />
      </Carousel.Item>
      <Carousel.Item>
        <Image style={{width: '1200px'}} src='https://miro.medium.com/v2/resize:fit:718/1*brlB5AvmCYPnL2sP2cnV4w.png' text="Python/Flask" />
      </Carousel.Item>
    </Carousel>
    </div> */
}
