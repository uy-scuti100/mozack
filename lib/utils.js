import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const siteConfig = {
	name: "Mozack",
	url: "https://mozack.vercel.app",
	ogImage:
		"https://i.pinimg.com/736x/9e/4a/8c/9e4a8c3df22bba32f180d5c6c880c0bd.jpg",
	description:
		"Discover unparalleled luxury and elegance with Mozack Furniture. Our exclusive collection of high-end furniture blends timeless sophistication with modern design. Elevate your living spaces with our exquisite pieces, crafted to perfection for the discerning individual. Experience premium home furnishings that offer both style and comfort, creating a truly sophisticated home environment.",
	links: {
		twitter: "https://twitter.com/hussain_joe",
		github: "https://github.com/uy-scuti100",
	},
};

// export const seoDescriptions = {
// 	"all products":
// 		"Discover the finest selection of furniture at Mozack, where style meets functionality. Explore our diverse range of high-quality products to enhance every room in your home.",
// 	accessories:
// 		"Elevate your living space with Mozack's exclusive accessories collection. From elegant decor to practical add-ons, find the perfect finishing touches for your home.",
// 	outdoor:
// 		"Transform your outdoor spaces with Mozack's premium outdoor furniture. Enjoy comfort and style with our durable and stylish pieces designed for every season.",
// 	seats:
// 		"Experience unparalleled comfort with Mozack's seating solutions. From sofas to armchairs, find the perfect seats to complement your living area and ensure ultimate relaxation.",
// 	storage:
// 		"Organize your home with Mozack's innovative storage solutions. Discover a variety of stylish and practical furniture pieces that help you maximize your space effortlessly.",
// 	lighting:
// 		"Illuminate your home with Mozack's sophisticated lighting collection. From ambient to task lighting, find the perfect fixtures to brighten up every room.",
// 	tables:
// 		"Enhance your home decor with Mozack's exquisite tables. From dining to coffee tables, explore our versatile range designed to fit any style and need.",
// };

export const seoDescriptions = {
	"all products":
		"Elevate your home decor with Mozack's premium furniture collection. Discover a wide range of high-quality products meticulously crafted to blend style and functionality seamlessly.",
	accessories:
		"Complete your interior design with Mozack's exclusive accessories collection. From elegant decor accents to practical add-ons, find the perfect finishing touches to enhance your living space.",
	outdoor:
		"Transform your outdoor oasis with Mozack's premium outdoor furniture. Explore durable and stylish pieces designed to elevate your outdoor experience and create lasting memories.",
	seats:
		"Indulge in luxurious comfort with Mozack's seating solutions. From sumptuous sofas to elegant armchairs, find the perfect seats to relax and unwind in style.",
	storage:
		"Maximize your space and streamline your home with Mozack's innovative storage solutions. Discover stylish and functional furniture pieces designed to keep your space organized and clutter-free.",
	lighting:
		"Illuminate your home with Mozack's exquisite lighting collection. From statement chandeliers to sleek table lamps, find the perfect fixtures to add warmth and ambiance to any room.",
	tables:
		"Upgrade your living space with Mozack's versatile tables. From elegant dining tables to functional coffee tables, explore our curated collection designed to enhance your home decor.",
};

export const allProductsKeywords = {
	"all Products": [
		"Luxury furniture",
		"High-end furnishings",
		"Exclusive furniture collection",
		"Couture home decor",
		"Designer furniture",
		"Elegant home furnishings",
		"Furniture collection",
		"Modern luxury furniture",
		"Sophisticated furniture style",
		"Premium home furnishings",
		"Furniture brand",
		"Timeless furniture elegance",
		"Luxury furniture couture",
		"Furniture for discerning individuals",
		"Exquisite furniture",
	],
	accessories: [
		"Luxury rugs",
		"High-end mirrors",
		"Elegant sculptures",
		"Premium home decor",
		"Designer bathroom accessories",
		"Modern luxury kitchenware",
		"Sophisticated hardware",
		"Exquisite accessories",
	],
	outdoor: [
		"Luxury outdoor seating",
		"High-end outdoor tables",
		"Elegant outdoor lighting",
		"Modern luxury outdoor furniture",
		"Sophisticated outdoor style",
		"Premium outdoor decor",
		"Timeless outdoor elegance",
		"Exquisite outdoor furniture",
	],
	seats: [
		"Luxury sofas",
		"High-end lounge chairs",
		"Exclusive dining chairs",
		"Couture daybeds",
		"Designer benches",
		"Elegant seating solutions",
		"Modern luxury seating",
		"Sophisticated seating style",
		"Premium chairs and stools",
		"Timeless seating elegance",
		"Exquisite seating",
	],
	storage: [
		"Luxury dressers",
		"High-end cabinets",
		"Elegant sideboards",
		"Modern shelving",
		"Premium storage solutions",
		"Designer storage furniture",
		"Sophisticated storage style",
		"Exquisite storage",
	],
	lighting: [
		"Luxury chandeliers",
		"High-end pendants",
		"Elegant sconces",
		"Modern floor lamps",
		"Premium table lamps",
		"Timeless lighting solutions",
		"Designer lighting",
		"Exquisite lighting",
	],
	tables: [
		"Luxury dining tables",
		"High-end coffee tables",
		"Elegant desks",
		"Modern consoles",
		"Premium side tables",
		"Timeless table designs",
		"Designer tables",
		"Exquisite tables",
	],
};
