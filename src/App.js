import { useContext } from "react";
import { userContext } from "./contexts/userContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ProfileEdit from "./pages/ProfileEdit";

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
					<Route path="/profile/edit" element={<ProfileEdit />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
