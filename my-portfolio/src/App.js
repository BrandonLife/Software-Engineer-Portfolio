import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import CreateProject from "./pages/createProject";
import EditCurrentProject from "./pages/editProject";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Skills from "./pages/Skills";
function App() {
	return (
		<>
			<Navbar />
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/Portfolio" element={<Projects />} />
					<Route path="/Skills" element={<Skills />} />
					<Route path="/Project/createProject" element={<CreateProject />} />
					<Route path="/Project/editProject" element={<EditCurrentProject />} />
					<Route path="/Contact" element={<Contact />} />

					<Route path="*" element={<Error404 />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
