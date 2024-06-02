"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ item, index }) {
	return (
		<div className="flex flex-col gap-5" key={index}>
			<Link
				href={`/product/${item?.productSlug}`}
				className="flex flex-col w-full h-[280px] sm:h-[287px]  md:h-[300px]  lg:h-[500px] gap-2"
			>
				<div className="relative w-full h-full ">
					<Image
						src={item?.collectionMediaItems[0]?.imageUrl}
						alt={item?.productName}
						fill
						className="w-full h-full object-fit"
					/>
					<div
						className="absolute inset-0 z-20"
						style={{
							background:
								"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 5%, rgba(0, 0, 0, .1) 100%)",
						}}
					/>

					<div className="absolute z-50 px-2 py-1 text-xs font-medium text-black uppercase bg-white left-3 font-mont bottom-3">
						{item?.productName}
					</div>
				</div>
			</Link>
			<div>
				<p
					className="text-[#7F7F7F] text-xs md:text-base"
					dangerouslySetInnerHTML={{ __html: item?.productDescription }}
				/>
			</div>
		</div>
	);
}
