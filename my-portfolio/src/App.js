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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
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
					<Route
						path="/Project"
						element={
							<Projects
								loggedIn={loggedIn}
								cookie={cookies["x-auth-token"]}
								userId={userId}
							/>
						}
					/>
					<Route
						path="/Skills"
						element={
							<Skills
								loggedIn={loggedIn}
								cookie={cookies["x-auth-token"]}
								userId={userId}
							/>
						}
					/>
					<Route
						path="/Project/createProject"
						element={
							<CreateProject
								loggedIn={loggedIn}
								cookie={cookies["x-auth-token"]}
								userId={userId}
							/>
						}
					/>
					<Route
						path="/Project/editProject"
						element={
							<EditCurrentProject
								loggedIn={loggedIn}
								cookie={cookies["x-auth-token"]}
								userId={userId}
							/>
						}
					/>
					<Route path="/Contact" element={<Contact />} />
					<Route
						path="/User/login"
						element={
							<Login
								loggedIn={loggedIn}
								setLoggedIn={setLoggedIn}
								setCookie={setCookie}
								setUserId={setUserId}
							/>
						}
					/>
					<Route
						path="/User/register"
						element={<Register loggedIn={loggedIn} />}
					/>
					<Route
						path="/User/logout"
						element={
							<Logout
								loggedIn={loggedIn}
								cookie={cookies["x-auth-token"]}
								userId={userId}
								removeCookie={removeCookie}
							/>
						}
					/>
					<Route path="*" element={<Error404 />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
