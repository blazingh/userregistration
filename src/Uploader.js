import { useEffect, useRef, useState } from "react";
const Uploader = ({ type, canvas }) => {
	const [image, setImage] = useState();
	const fileUpload = useRef(null);
	const handleFileUpload = (e) => {
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			setImage(reader.result);
		};
		reader.onerror = (error) => {
			console.log("Error: ", error);
		};
	};
	useEffect(() => {
		if (image) {
			const canvas = document.getElementById("cropper");
			const ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			const newImage = new Image();
			newImage.onload = function () {
				ctx.drawImage(newImage, 0, 0, 300, 300);
			};
			newImage.src = image;
		}
	}, [image]);
	return (
		<div>
			<button
				className=" bg-black font-semibold text-white font-mono px-3 py-2 rounded-lg"
				onClick={() => {
					fileUpload.current.click();
				}}
			>
				Upload
			</button>
			<input
				ref={fileUpload}
				type="file"
				accept={type ? type : "image/*"}
				onChange={(e) => {
					handleFileUpload(e);
				}}
			></input>
			<canvas
				className="border-4"
				id="cropper"
				width={canvas.w}
				height={canvas.h}
			></canvas>
		</div>
	);
};

export default Uploader;
