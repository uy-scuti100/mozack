"use client";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import image from "../../public/bg.jpeg";

export default function SearchComonent({ openSearch, setOpenSearch }) {
	const [searchterm, setSearchTerm] = useState("");
	return (
		<nav
			className={`${
				openSearch ? "translate-x-0" : "translate-x-[100%]"
			}  z-[999] fixed left-0 right-0 top-0 bottom-0 h-[100dvh] bg-black custom-easing p-5 overflow-auto`}
		>
			<div className="relative">
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center w-full gap-4">
						{" "}
						<Search className="text-white " />
						<div className="flex items-center justify-between w-full gap-2">
							<input
								className="w-[90%] py-1 text-[#7F7F7F] bg-transparent outline-none focus:border-b"
								placeholder="what are you looking for..."
							/>
							<button>
								<small className="border border-[#7F7F7F] text-[#7F7F7F] px-1 rounded-sm">
									clear{" "}
								</small>
							</button>
						</div>
					</div>
					<button
						onClick={() => setOpenSearch((prev) => !prev)}
						className="ml-4 text-white"
					>
						<X />
					</button>
				</div>
			</div>

			<h2 className="text-[#7F7F7F] mt-10 mb-5 font-mont ">
				Popular Categories
			</h2>
			<div className="flex flex-col gap-5 text-white">
				<Link
					href={"/collections/seatings"}
					className="transition-opacity duration-300 ease-in-out hover:opacity-70 w-fit"
					onClick={() => setOpenSearch((prev) => !prev)}
				>
					Lounge Chairs
				</Link>
				<Link
					href={"/collections/tables"}
					className="transition-opacity duration-300 ease-in-out hover:opacity-70 w-fit"
					onClick={() => setOpenSearch((prev) => !prev)}
				>
					Dining Tables
				</Link>
				<Link
					href={"/collections/lighting"}
					className="transition-opacity duration-300 ease-in-out hover:opacity-70 w-fit"
					onClick={() => setOpenSearch((prev) => !prev)}
				>
					Chandeliers
				</Link>
				<Link
					href={"/collections/storage"}
					className="transition-opacity duration-300 ease-in-out hover:opacity-70 w-fit"
					onClick={() => setOpenSearch((prev) => !prev)}
				>
					Outdoor Lighting
				</Link>
			</div>

			<h2 className="text-[#7F7F7F] mt-10 mb-5  font-mont ">
				Top Results For Lounge Chairs
			</h2>
			<div className="grid w-full h-full grid-cols-2 pb-6 gap-y-12 gap-x-3 md:grid-cols-3">
				{Array(6)
					.fill(searchCard({ setOpenSearch }))
					.map((item, index) => (
						<div key={index}>{item}</div>
					))}
			</div>
		</nav>
	);
}

const searchCard = ({ setOpenSearch }) => {
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
						// src="https://i.pinimg.com/474x/8a/70/a8/8a70a80a63c83cc64c118dc8cbaa6c52.jpg"
						src={image}
						alt="image"
						fill
						className="object-cover w-full h-[287px]"
						placeholder="blur"
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
