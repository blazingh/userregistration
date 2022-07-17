import { useContext } from "react";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { userContext } from "./contexts/userContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	const { user, setUser } = useContext(userContext);
	console.log(user);
	return (
		<div className="px-5">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/signout" element={<SignIn />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
