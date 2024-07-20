"use client";
import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import getRandomRating from "../../../../lib/utils";

export default function ProductComponent({ product, blobs }) {
	const [isMobile, setIsMobile] = useState(true);
	const [rating, setRating] = useState(0);
	const [reviews, setReviews] = useState(0);
	const [stars, setStars] = useState("");
	useEffect(() => {
		const handleChange = () => {
			const screensize = window.innerWidth;
			if (screensize <= 984) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		handleChange();

		window.addEventListener("resize", handleChange);
		return () => window.removeEventListener("resize", handleChange);
	}, []);

	useEffect(() => {
		function getRandomRating() {
			const rating = Math.floor(Math.random() * 5) + 1;
			setRating(rating);

			// Generate a random number of reviews (let's assume between 1 and 100)
			const reviews = Math.floor(Math.random() * 100) + 1;
			setReviews(reviews);

			// Create star icons based on the rating
			let stars = "";
			for (let i = 0; i < 5; i++) {
				if (i < rating) {
					stars += "★"; // Solid colored star
				} else {
					stars += "☆"; // Empty star
				}
			}
			setStars(stars);
		}
		getRandomRating();
	}, []);

	const cleanPrice = (price) => {
		if (!price) return 0;
		const cleaned = price.replace(/[^\d.]/g, "");
		return parseFloat(cleaned);
	};

	const productPrice = cleanPrice(product?.productPrice);
	const productDiscountPrice = cleanPrice(product?.productDiscountPrice);
	const discountPercentage =
		productPrice > productDiscountPrice
			? ((productPrice - productDiscountPrice) / productPrice) * 100
			: 0;

	return (
		<div>
			<div>
				<div
					className={`${
						!isMobile && "grid px-[0.63rem]"
					} grid-cols-3 max-w-[1920px] mx-auto`}
				>
					<div className="w-full h-full col-span-2">
						{isMobile ? (
							<Swiper
								modules={[Pagination, Autoplay]}
								className="productSlider"
								autoplay={{
									delay: 3000,
									pauseOnMouseEnter: true,
									disableOnInteraction: true,
								}}
								pagination={{ clickable: true }}
								loop
							>
								{product?.collectionMediaItems.map((image, index) => (
									<SwiperSlide key={index}>
										<Image
											src={image}
											width={500}
											height={500}
											blurDataURL={blobs[index]}
											placeholder="blur"
											alt={product?.productName}
											className="object-cover w-full max-h-[500px]"
											sizes="(min-width: 808px) 50vw, 100vw"
											loading="lazy"
										/>
									</SwiperSlide>
								))}
							</Swiper>
						) : (
							<div className="grid grid-cols-2 gap-4">
								{product?.collectionMediaItems.map((image, index) => (
									<div
										key={index}
										className="relative min-w-[300px] min-h-[400px]"
									>
										<Image
											src={image}
											fill
											blurDataURL={blobs[index]}
											placeholder="blur"
											alt={product?.productName}
											className="object-cover w-full h-full "
											sizes="(min-width: 808px) 50vw, 100vw"
											loading="lazy"
										/>
									</div>
								))}
							</div>
						)}
					</div>
					{/* product details */}
					<div className={`px-4 mt-10 cols-span-1 ${!isMobile && "mt-0"}`}>
						{product?.productRibbon && (
							<div className="">
								<p>{product?.productRibon}</p>
							</div>
						)}
						<h1 className="text-2xl font-medium text-black">
							{product?.productName}
						</h1>
						<div className="flex flex-col gap-4 mt-2">
							<div className="flex items-center gap-1">
								<div className="flex items-center gap-1">
									<p className="text-sm">{stars}</p>
									<small>({rating})</small>
								</div>
								<div className="flex items-center gap-1 text-[#777] underline">
									<p className="text-sm ">Reviews</p>
									<span>
										<small>{reviews}</small>
									</span>
								</div>
							</div>
						</div>

						<div className="mt-2">
							<div>
								{productPrice > productDiscountPrice ? (
									<div className="flex items-center gap-2">
										<h3 className="font-semibold text-[#D7373D] line-through">
											{product?.productPrice}
										</h3>
										<h3 className="font-semibold">
											{product?.productDiscountPrice}
										</h3>
										<p className="text-[#D7373D] ">
											{discountPercentage.toFixed()}% off
										</p>
									</div>
								) : (
									<div>
										<h3 className="font-semibold">{product?.productPrice}</h3>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
