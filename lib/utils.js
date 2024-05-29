import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const siteConfig = {
	name: "Mozack",
	url: "https://frikanza.vercel.app",
	ogImage:
		"https://i.pinimg.com/736x/9e/4a/8c/9e4a8c3df22bba32f180d5c6c880c0bd.jpg",
	description:
		"Discover unparalleled luxury and elegance with Frikanza Couture. Our exclusive collection of high-end fashion blends timeless sophistication with modern design. Elevate your style with our exquisite pieces, crafted to perfection for the discerning individual.",
	links: {
		twitter: "https://twitter.com/hussain_joe",
		github: "https://github.com/uy-scuti100",
	},
};
