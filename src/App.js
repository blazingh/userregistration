import Profile from "./Profile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Uploader from "./Uploader";

function App() {
	return (
		<div className="flex flex-wrap items-center justify-center">
			<div className="w-full h-full max-w-md mx-10 my-5">
				<Profile />
			</div>
			<div className="w-full h-full max-w-md mx-10 my-5">
				<SignIn />
			</div>
			<div className="w-full h-full max-w-md mx-10 my-5">
				<SignUp />
			</div>
		</div>
	);
}

export default App;
