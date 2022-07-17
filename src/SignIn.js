import axios from "axios";
import { useState } from "react";

const SignIn = () => {
	axios.defaults.crossDomain = true;
	axios.defaults.withCredentials = true;
	const [email, setEmail] = useState("");
	const [password, setPasword] = useState("");
	const labelClass =
		"peer-focus:font-medium font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-org peer-placeholder-shown:scale-110 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
	const inputClass =
		"block py-2.5 px-0 w-full text-sm text-white bg-transparent border-b-2 border-white focus:text-org focus:border-org appearance-none focus:outline-none focus:ring-0 peer";
	const handleSubmit = () => {
		const data = { email, password };
		axios
			.post("https://hadiball-server.herokuapp.com/user/signin", data, {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="bg-purp w-full h-full flex flex-col justify-center items-center px-10 pb-10 rounded-md shadow-lg text-white">
			<h1 className=" font-bold text-2xl py-7 select-none">Sign In</h1>
			<div className="relative z-0 w-full group">
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
			<div className="relative z-0 w-full group mt-7">
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
			<div className="flex items-center justify-between w-full mt-10">
				<label className=" text-xs">
					Don't have an acount?
					<label className="text-sm underline cursor-pointer hover:text-org ml-1">
						Sign Up
					</label>
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
