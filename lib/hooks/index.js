"use client";
import { useEffect, useState } from "react";

export const useMediaQuery = () => {
	const [isMobile, setIsMobile] = useState(false);
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
	return { isMobile };
};

export const useStatistics = () => {
	const [rating, setRating] = useState(0);
	const [reviews, setReviews] = useState(0);
	const [stars, setStars] = useState("");

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

	return { rating, reviews, stars };
};

export const useDiscountedPrice = (productPrice, discountedPrice) => {
	if (!productPrice && discountedPrice) return 0;
	const cleanedProductPrice = productPrice?.replace(/[^\d.]/g, "");
	const cleanedDiscountedPrice = discountedPrice?.replace(/[^\d.]/g, "");
	const discountPercentage =
		cleanedProductPrice > cleanedDiscountedPrice
			? ((cleanedProductPrice - cleanedDiscountedPrice) / cleanedProductPrice) *
			  100
			: 0;

	return discountPercentage.toFixed();
};
