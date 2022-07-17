import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Quotes from "../items/Quotes";
import { userContext } from "../contexts/userContext";

const Profile = ({}) => {
	let navigate = useNavigate();
	const { user, setUser } = useContext(userContext);
	return (
		<div className="page-container relative flex flex-col justify-center items-center ">
			{!user && (
				<div className="rounded absolute w-full h-full  z-10 backdrop-blur-sm flex justify-center items-center">
					<label>
						You are not signed in, go to{" "}
						<Link to="/signin" className="underline hover:text-org">
							Sign in
						</Link>
					</label>
				</div>
			)}
			<label className="font-bold text-xl mb-7">
				Welcome {user ? user.fullName : "unkown"}
			</label>
			<Quotes reload={true} />
			<button className=" border-2 border-white py-1 px-3 rounded-sm hover:text-org hover:border-org mt-7">
				Edit Profile
			</button>
			<label
				className=" absolute bottom-10 right-10 text-sm underline hover:text-org"
				onClick={() => {
					setUser();
					navigate("/");
				}}
			>
				Sign Out
			</label>
		</div>
	);
};

export default Profile;
