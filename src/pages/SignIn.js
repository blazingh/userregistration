import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../contexts/userContext";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPasword] = useState("");
	const [loading, setLoading] = useState();
	const [error, setError] = useState();
	const labelClass =
		"peer-focus:font-medium font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-org peer-placeholder-shown:scale-110 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
	const inputClass =
		"block py-2.5 px-0 w-full text-sm text-white bg-transparent border-b-2 border-white focus:text-org focus:border-org appearance-none focus:outline-none focus:ring-0 peer";
	const { user, setUser } = useContext(userContext);
	const handleSubmit = () => {
		const data = { email, password };
		setLoading(true);
		axios
			.post("https://hadiball-server.herokuapp.com/user/signin", data, {
				withCredentials: true,
			})
			.then((res) => {
				if (res.data?.error) {
					setError(res.data.error);
					setLoading(false);
					return;
				}
				console.log(res);
				setUser(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setError("Network Error");
				console.log(err);
				setLoading(false);
			});
	};
	return (
		<div className="page-container flex flex-col justify-center items-center relative">
			{user && (
				<div className="rounded absolute w-full h-full  z-10 backdrop-blur-sm flex justify-center items-center">
					<label>
						You are now signed in, go to{" "}
						<Link to="/profile" className="underline hover:text-org">
							Profile
						</Link>
					</label>
				</div>
			)}
			{loading && (
				<div className="rounded absolute w-full h-full  z-10 backdrop-blur-sm flex justify-center items-center">
					<label>Loading...</label>
				</div>
			)}
			<h1 className=" font-bold text-2xl pb-8  select-none">Sign In</h1>
			<div className="relative z-0 w-full max-w-sm group">
				<input
					type="text"
					name="floating_email"
					className={inputClass}
					placeholder=" "
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<label htmlFor="floating_email" className={labelClass}>
					Email address
				</label>
			</div>
			<div className="relative z-0 w-full max-w-sm group mt-7">
				<input
					type="password"
					name="floating_email"
					className={inputClass}
					placeholder=" "
					value={password}
					onChange={(e) => {
						setPasword(e.target.value);
					}}
				/>
				<label htmlFor="floating_email" className={labelClass}>
					Password
				</label>
			</div>
			{error && (
				<label className="mt-5 text-red-400 w-full max-w-sm">{error}</label>
			)}
			<div className="flex items-center justify-between w-full mt-10">
				<label className=" text-xs">
					Don't have an acount?
					<Link
						to="/signup"
						className="text-sm underline cursor-pointer hover:text-org ml-1"
					>
						Sign Up
					</Link>
				</label>
				<button
					className=" border-2 border-white py-1 px-3 rounded-sm hover:text-org hover:border-org"
					onClick={handleSubmit}
				>
					Sign In
				</button>
			</div>
		</div>
	);
};

export default SignIn;
