import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowBigRightDash, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Showcase() {
	return (
		<section className="pt-2">
			<div className="grid h-full grid-cols-1 gap-2 sm:grid-cols-2">
				<Link href={"/collections/seatings"} className="relative sm:row-span-2">
					<Image
						src={
							"https://i.pinimg.com/564x/72/87/3a/72873a27fe5764eccf586c1d9c4191b1.jpg"
						}
						width={500}
						height={500}
						className="object-cover object-bottom w-full sm:h-[100vh]"
					/>
					<div
						className="absolute inset-0 z-40"
						style={{
							background:
								"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 10%, rgba(0, 0, 0, .6) 100%)",
						}}
					></div>

					<div className="absolute z-50 flex items-center px-4 py-2 text-sm font-semibold tracking-widest text-black uppercase bg-white rounded-full left-5 font-mont bottom-5 sm:bottom-10">
						<ShoppingBag className="w-5 h-5 mr-2 " />
						Shop Seats{" "}
					</div>
					{/* <div className="absolute z-50 font-medium text-black rounded-none left-5 font-mont top-5 ">
						<p>designed with purpose</p>
						<p className="px-2 text-white bg-black">
							up to 30% off bestselling furniture
						</p>
					</div> */}
				</Link>
				<div className="flex flex-col w-full h-full gap-2 sm:h-auto">
					<Link href={"/collections/tables"} className="relative">
						<Image
							src={
								"https://i.pinimg.com/736x/23/88/1c/23881cff194c40ffe0013f4a77683bbe.jpg"
							}
							width={500}
							height={500}
							className="object-cover w-full sm:h-[50vh]"
						/>
						<div
							className="absolute inset-0 z-40"
							style={{
								background:
									"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 10%, rgba(0, 0, 0, .6) 100%)",
							}}
						></div>
						<div className="absolute z-50 flex items-center px-4 py-2 text-sm font-semibold tracking-widest text-black uppercase bg-white rounded-full left-5 font-mont bottom-5 sm:bottom-10">
							<ShoppingBag className="w-5 h-5 mr-2 " />
							Shop Tables{" "}
						</div>
						{/* <div className="absolute z-50 font-medium text-right text-white rounded-none right-5 font-mont top-5 ">
							<p>stunning from any angle</p>
							<p className="px-2 text-black bg-white">
								up to 20% off this weekend
							</p>
						</div> */}
					</Link>
					<Link href={"/collections/lighting"} className="relative">
						<Image
							src={
								"https://i.pinimg.com/474x/d7/fe/0f/d7fe0f7f31ef4d38f6c87841022f2168.jpg"
							}
							width={500}
							height={500}
							className="object-cover w-full sm:h-[50vh]"
						/>
						<div
							className="absolute inset-0 z-40"
							style={{
								background:
									"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 10%, rgba(0, 0, 0, .6) 100%)",
							}}
						></div>
						<div className="absolute z-50 flex items-center px-4 py-2 text-sm font-semibold tracking-widest text-black uppercase bg-white rounded-full left-5 font-mont bottom-10">
							<ShoppingBag className="w-5 h-5 mr-2 " />
							Shop lights{" "}
						</div>
						{/* <div className="absolute z-50 font-medium text-right text-white rounded-none right-5 font-mont top-5">
							<p>the one that changes everything</p>
							<p className="px-2 text-white bg-black">
								save 10% on every $100 worth of purchase
							</p>
						</div> */}
					</Link>
				</div>
			</div>

			<div className="grid h-full grid-cols-1 gap-2 pt-2 sm:grid-cols-2">
				<div className="flex flex-col w-full h-full gap-2 sm:h-auto">
					<Link href={"/collections/tables"} className="relative">
						<Image
							src={
								"https://i.pinimg.com/564x/58/05/93/580593fe3965903d4850ab3ab97359f6.jpg"
							}
							width={500}
							height={500}
							className="object-cover w-full sm:h-[50vh]"
						/>
						<div
							className="absolute inset-0 z-40"
							style={{
								background:
									"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 10%, rgba(0, 0, 0, .6) 100%)",
							}}
						></div>
						<div className="absolute z-50 flex items-center px-4 py-2 text-sm font-semibold tracking-widest text-black uppercase bg-white rounded-full left-5 font-mont bottom-5 sm:bottom-10">
							<ShoppingBag className="w-5 h-5 mr-2 " />
							Shop Outdoors{" "}
						</div>
						{/* <div className="absolute z-50 font-medium text-white rounded-none left-5 font-mont top-5 ">
							<p>stunning from any angle</p>
							<p className="px-2 text-black bg-white">
								up to 20% off this weekend
							</p>
						</div> */}
					</Link>
					<Link href={"/collections/lighting"} className="relative">
						<Image
							src={
								"https://i.pinimg.com/736x/5e/f6/0f/5ef60f94f18369c8416fc4be8327cbf7.jpg"
							}
							width={500}
							height={500}
							className="object-cover w-full sm:h-[50vh]"
						/>
						<div
							className="absolute inset-0 z-40"
							style={{
								background:
									"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 10%, rgba(0, 0, 0, .6) 100%)",
							}}
						></div>
						<div className="absolute z-50 flex items-center px-4 py-2 text-sm font-semibold tracking-widest text-black uppercase bg-white rounded-full left-5 font-mont bottom-10">
							<ShoppingBag className="w-5 h-5 mr-2 " />
							Shop accessories{" "}
						</div>
						{/* <div className="absolute z-50 font-medium text-white rounded-none left-5 font-mont top-5">
							<p>the one that changes everything</p>
							<p className="px-2 text-white bg-black">
								save 10% on every $100 worth of purchase
							</p>
						</div> */}
					</Link>
				</div>
				<Link href={"/collections/seatings"} className="relative sm:row-span-2">
					<Image
						src={
							"https://i.pinimg.com/736x/87/f1/49/87f1493a51fa245fb5e75c8f9be664a9.jpg"
						}
						width={500}
						height={500}
						className="object-cover object-bottom w-full sm:h-[100vh]"
					/>
					<div
						className="absolute inset-0 z-40"
						style={{
							background:
								"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 10%, rgba(0, 0, 0, .6) 100%)",
						}}
					></div>

					<div className="absolute z-50 flex items-center px-4 py-2 text-sm font-semibold tracking-widest text-black uppercase bg-white rounded-full left-5 font-mont bottom-5 sm:bottom-10">
						<ShoppingBag className="w-5 h-5 mr-2 " />
						Shop storage{" "}
					</div>
					{/* <div className="absolute z-50 font-medium text-right text-black rounded-none right-5 font-mont top-5 ">
						<p>designed with purpose</p>
						<p className="px-2 text-white bg-black">
							up to 30% off bestselling furniture
						</p>
					</div> */}
				</Link>
			</div>

			<div className="flex flex-col items-center justify-center w-full gap-12 p-20 text-4xl bg-white sm:text-7xl">
				<Link href={"/"}>
					{" "}
					<h1>New Arrivals</h1>
				</Link>
				<Link href={"/"}>
					<h1>Bestsellers</h1>
				</Link>
				<Link href={"/"}>
					<h1>Essentials</h1>
				</Link>
			</div>
		</section>
	);
}

// storage
// https://i.pinimg.com/736x/87/f1/49/87f1493a51fa245fb5e75c8f9be664a9.jpg

// outydoor
// https://i.pinimg.com/564x/58/05/93/580593fe3965903d4850ab3ab97359f6.jpg

// accessories

// https://i.pinimg.com/736x/5e/f6/0f/5ef60f94f18369c8416fc4be8327cbf7.jpg
