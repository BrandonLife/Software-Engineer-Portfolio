import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import CreateProject from "./pages/createProject";
import EditCurrentProject from "./pages/editProject";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Skills from "./pages/Skills";
function App() {
	const [cookies, setCookie, removeCookie] = useCookies(["x-auth-token"]);
	const [userId, setUserId] = useState("");
	const [loggedIn, setLoggedIn] = useState(
		cookies["x-auth-token"] ? true : false
	);
	return (
		<>
			<Navbar
				loggedIn={loggedIn}
				removeCookie={removeCookie}
				setLoggedIn={setLoggedIn}
				setUserId={setUserId}
			/>
			<div>
				<Routes>
					<Route path="/Home" element={<Home />} />
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
