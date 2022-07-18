import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../contexts/userContext";

const SignUp = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPasword] = useState("");
	const [loading, setLoading] = useState();
	const [error, setError] = useState();
	const { user, setUser } = useContext(userContext);
	const labelClass =
		"peer-focus:font-medium font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-org peer-placeholder-shown:scale-110 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
	const inputClass =
		"block py-2.5 px-0 w-full mx-auto text-sm text-white bg-transparent border-b-2 border-white focus:text-org focus:border-org appearance-none focus:outline-none focus:ring-0 peer";
	const handleSubmit = () => {
		const data = { email, password, fullName };
		setLoading(true);
		axios
			.post("https://hadiball-server.herokuapp.com/user/signup", data, {
				withCredentials: true,
			})
			.then((res) => {
				if (res.data?.error) {
					setError(res.data.error);
					setLoading(false);
					return;
				}
				setUser(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setError("Network Error");
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
			<h1 className=" font-bold text-2xl pb-8 select-none">Sign Up</h1>
			<div className="relative z-0 w-full max-w-sm group">
				<input
					type="text"
					name="floating_email"
					className={inputClass}
					placeholder=" "
					value={fullName}
					onChange={(e) => {
						setFullName(e.target.value);
					}}
				/>
				<label className={labelClass}>Full Name</label>
			</div>
			<div className="relative z-0 w-full max-w-sm group mt-7">
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
				<label className={labelClass}>Email address</label>
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
				<label className={labelClass}>Password</label>
			</div>
			{error && (
				<label className="mt-5 text-red-400 w-full max-w-sm">{error}</label>
			)}
			<div className="flex items-center justify-between w-full mt-10">
				<label className=" text-xs">
					Already registered?
					<Link
						to="/signin"
						className="text-sm underline cursor-pointer hover:text-org ml-1"
					>
						Sign In
					</Link>
				</label>
				<button
					className=" border-2 border-white py-1 px-3 rounded-sm hover:text-org hover:border-org"
					onClick={handleSubmit}
				>
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default SignUp;
