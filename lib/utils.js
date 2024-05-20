import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const siteConfig = {
	name: "Frikanza",
	url: "https://frikanza.vercel.app",
	ogImage: "https://frikanza.vercel.app/frikanza-og-image.png",
	description:
		"Discover unparalleled luxury and elegance with Frikanza Couture. Our exclusive collection of high-end fashion blends timeless sophistication with modern design. Elevate your style with our exquisite pieces, crafted to perfection for the discerning individual.",
	links: {
		twitter: "https://twitter.com/hussain_joe",
		github: "https://github.com/uy-scuti100",
	},
};
