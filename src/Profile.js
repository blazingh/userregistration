import Quotes from "./Quotes";

const Profile = ({}) => {
	const user = { name: "Hadi Baalbaki", email: "hadibaalbaki2@gmail.com" };
	return (
		<div className="relative bg-purp w-full h-full flex flex-col justify-center items-center px-10 rounded-md shadow-lg text-white">
			<label className="font-bold text-xl my-7">Welcome {user.name}</label>
			<Quotes />
			<button className=" border-2 border-white py-1 px-3 rounded-sm hover:text-org hover:border-org my-7">
				Edit Profile
			</button>
			<label className=" absolute bottom-9 right-10 text-sm underline hover:text-org">
				Sign Out
			</label>
		</div>
	);
};

export default Profile;
