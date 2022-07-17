import axios from "axios";
import refresh from "../media/reload.png";
import { useEffect, useState } from "react";

const Quotes = ({ reload }) => {
	const [quote, setQuote] = useState();

	const chooseQuote = () => {
		setQuote();
		axios
			.get("https://api.quotable.io/random")
			.then((res) => {
				setQuote(res.data);
			})
			.catch((err) => {
				setQuote([{ content: "error getting quotes", author: "unknown" }]);
			});
	};

	useEffect(() => {
		chooseQuote();
	}, []);

	return (
		<div className="flex flex-col justify-center items-center">
			{reload && (
				<label className="py-2 relative">
					| random quote |
					<img
						src={refresh}
						className="absolute top-3 -right-6 w-5 h-5 invert cursor-pointer"
						onClick={chooseQuote}
					></img>
				</label>
			)}
			<label className=" font-thin text-center text-lg">
				{quote ? quote.content : "...loading..."}
			</label>
			<label className=" font-thin text-sm my-2">
				- {quote ? quote.author : "unknown"} -
			</label>
		</div>
	);
};

export default Quotes;
