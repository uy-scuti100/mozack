"use client";
import { Link } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const SearchCard = ({ setOpenSearch }) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);
	return (
		isClient && (
			<Link
				onClick={() => setOpenSearch((prev) => !prev)}
				href={"/collections/seatings"}
				className="flex flex-col w-full h-[280px] sm:h-[287px]  md:h-[300px]  lg:h-[500px] gap-2"
			>
				<div className="relative w-full h-full ">
					<Image
						src="https://i.pinimg.com/474x/8a/70/a8/8a70a80a63c83cc64c118dc8cbaa6c52.jpg"
						alt="image"
						fill
						className="object-cover w-full h-[287px]"
					/>
				</div>
				<div className="flex flex-col">
					<h3 className="font-medium text-white font-mont">
						Lorem ipsum dolor sit
					</h3>
					<p className="text-[#7F7F7F] text-sm">Lorem ipsum </p>
				</div>
			</Link>
		)
	);
};
