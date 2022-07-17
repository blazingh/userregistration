import { Link } from "react-router-dom";
import Quotes from "../items/Quotes";

const Home = () => {
	return (
		<div className="page-container flex flex-col justify-center items-center">
			<label className="mb-8 text-xl font-semibold">Hello and Welcome</label>
			<Quotes />
			<label className="mt-8">
				lets get started{" "}
				<Link to="/signup" className="underline hover:text-org">
					Sign Up
				</Link>
			</label>
		</div>
	);
};

export default Home;
