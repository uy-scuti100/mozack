"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Filter from "./filter";
import { useMediaQuery } from "../../../../../lib/hooks";

export default function ProductsComponent({
	categoryProducts,
	image_urlBuffers,
}) {
	const { isMobile } = useMediaQuery();

	const [mobileView, setMobileView] = useState(isMobile ? "double" : "tripple");

	return (
		<div>
			<Filter
				categoryProducts={categoryProducts}
				setMobileView={setMobileView}
				mobileView={mobileView}
			/>

			<div
				className={`grid w-full ${
					mobileView === "double"
						? "grid-cols-2 md:grid-cols-2"
						: mobileView === "single"
						? "grid-cols-1 md:grid-cols-3"
						: mobileView === "tripple"
						? "md:grid-cols-3 grid-cols-2"
						: "md:grid-cols-4 grid-cols-2"
				} px-4 mt-5 gap-x-3 gap-y-12`}
			>
				{categoryProducts.map((item, index) => (
					<div className="flex flex-col gap-5" key={index}>
						<Link
							href={`/product/${item.productSlug}`}
							className="flex flex-col w-full h-[280px] sm:h-[287px] md:h-[300px]  lg:h-[500px] gap-2"
						>
							<div className="relative w-full h-full ">
								<Image
									src={item.collectionMediaItems[0].imageUrl}
									alt={item.productName}
									fill
									{...(image_urlBuffers && {
										placeholder: "blur",
										blurDataURL: image_urlBuffers[index],
									})}
									className={`w-full h-full ${
										mobileView === "double"
											? "object-fit sm:object-cover"
											: "object-cover"
									}`}
									sizes="(max-width: 480px) 100vw,
                                    (max-width: 768px) 75vw,
                                    (max-width: 1060px) 50vw,
                                    33vw"
								/>
								<div
									className="absolute inset-0 z-20"
									style={{
										background:
											"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 5%, rgba(0, 0, 0, .1) 100%)",
									}}
								/>
								{item.productRibbon && (
									<div className="absolute z-50 px-2 py-1 text-[10px] font-medium text-white uppercase bg-ash left-3 font-mont bottom-3 backdrop-blur-2xl">
										{item.productRibbon}
									</div>
								)}
							</div>
						</Link>
						<div className="flex flex-col">
							<Link href={`/product/${item.productSlug}`}>
								<h3 className="text-sm font-medium font-mont">
									{item.productName}
								</h3>
							</Link>

							<p className="text-xs text-ash-dark">{item.productPrice}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
