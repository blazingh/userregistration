import { useContext, useEffect } from "react";
import { userContext } from "./contexts/userContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ProfileEdit from "./pages/ProfileEdit";
import axios from "axios";

function App() {
	const { user, setUser } = useContext(userContext);
	useEffect(() => {
		axios
			.post(
				"https://hadiball-server.herokuapp.com/user/check",
				{},
				{
					withCredentials: true,
				},
			)
			.then((res) => {
				if (res.data?.error) {
					return;
				}
				setUser(res.data);
			})
			.catch((err) => {
				return;
			});
	}, []);
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
