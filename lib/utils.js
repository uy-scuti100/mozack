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

export const collectionsData = {
	seats: [
		{
			name: "Sofas",
			slug: "sofas",
			description:
				"Discover our luxurious sofas, designed to bring elegance and comfort to your living space.",
			image_url:
				"https://i.pinimg.com/564x/67/81/97/67819781a390d838108b4e236307a915.jpg",
		},
		{
			name: "Lounge Chairs",
			slug: "lounge_chairs",
			description:
				"Experience ultimate relaxation with our sophisticated lounge chairs.",
			image_url:
				"https://i.pinimg.com/474x/f6/ba/c6/f6bac6cf6c6d42e5e2795494c45dc3cb.jpg",
		},
		{
			name: "Dining Chairs",
			slug: "dining_chairs",
			description:
				"Enhance your dining experience with our elegant and comfortable dining chairs.",
			image_url:
				"https://i.pinimg.com/564x/39/aa/8b/39aa8bb6ccedb0a7dac04cd47f20999e.jpg",
		},
		{
			name: "Stools",
			slug: "stools",
			description:
				"Find the perfect stools to complement your home decor, blending style and functionality.",
			image_url:
				"https://i.pinimg.com/474x/6c/2e/91/6c2e9127c53dd919cc08144810b463b7.jpg",
		},
		{
			name: "Daybeds",
			slug: "daybeds",
			description:
				"Indulge in luxury with our exquisite daybeds, perfect for any room in your home.",
			image_url:
				"https://i.pinimg.com/564x/49/ee/a1/49eea1aa5b26d88b66054c68138ca5a6.jpg",
		},
		{
			name: "Benches",
			slug: "benches",
			description:
				"Add a touch of elegance to your space with our stylish and functional benches.",
			image_url:
				"https://i.pinimg.com/564x/16/08/21/160821fe5e384d5a8225d8e918d940bb.jpg",
		},
	],
	tables: [
		{
			name: "Dining Tables",
			slug: "dining_tables",
			description:
				"Elevate your dining area with our premium dining tables, designed for style and durability.",
			image_url:
				"https://i.pinimg.com/736x/8d/5e/e6/8d5ee619267413238f92609337c06154.jpg",
		},
		{
			name: "Coffee Tables",
			slug: "coffee_tables",
			description:
				"Explore our collection of coffee tables, perfect for adding a touch of sophistication to your living room.",
			image_url:
				"https://i.pinimg.com/736x/40/fb/01/40fb01d4b62b7e05ec2609d3e640c2dc.jpg",
		},
		{
			name: "Desks",
			slug: "desks",
			description:
				"Discover our range of stylish and functional desks, ideal for any home office.",
			image_url:
				"https://i.pinimg.com/564x/13/79/9f/13799f0e77d04ce44076743c657a1f7e.jpg",
		},
		{
			name: "Consoles",
			slug: "consoles",
			description:
				"Enhance your home decor with our elegant console tables, perfect for any hallway or living space.",
			image_url:
				"https://i.pinimg.com/474x/d7/58/b3/d758b3c24aea8d5a3c9c6a676e4abbe8.jpg",
		},
		{
			name: "Side Tables",
			slug: "side_tables",
			description:
				"Complete your living room setup with our versatile side tables, offering both style and practicality.",
			image_url:
				"https://i.pinimg.com/736x/90/cb/1b/90cb1bdbcd44f3342c527a53a1289285.jpg",
		},
	],
	lighting: [
		{
			name: "Chandeliers",
			slug: "chandeliers",
			description:
				"Illuminate your home with our luxurious chandeliers, adding a touch of elegance to any room.",
			image_url:
				"https://i.pinimg.com/564x/7c/05/9f/7c059f46dfac077d04acd2ba4b1b834e.jpg",
		},
		{
			name: "Pendants",
			slug: "pendants",
			description:
				"Explore our collection of pendant lights, perfect for creating a stylish focal point in your home.",
			image_url:
				"https://i.pinimg.com/736x/43/00/6e/43006ebc8b9183a675747aae897be6a2.jpg",
		},
		{
			name: "Sconces",
			slug: "sconces",
			description:
				"Discover our elegant sconces, ideal for adding subtle lighting and style to any room.",
			image_url:
				"https://i.pinimg.com/736x/5f/45/3d/5f453d32f2f6b02d4f9e14d4d99bb4d1.jpg",
		},
		{
			name: "Floor Lamps",
			slug: "floor_lamps",
			description:
				"Enhance your space with our stylish floor lamps, offering both illumination and elegance.",
			image_url:
				"https://i.pinimg.com/564x/ea/87/d3/ea87d34c3cf59f5b699ea56fbf194ff0.jpg",
		},
		{
			name: "Table Lamps",
			slug: "table_lamps",
			description:
				"Brighten your home with our exquisite table lamps, perfect for any desk or bedside table.",
			image_url:
				"https://i.pinimg.com/564x/1b/36/77/1b36771a172e94015b6793b071308c9f.jpg",
		},
	],
	storage: [
		{
			name: "Dressers",
			slug: "dressers",
			description:
				"Organize your belongings in style with our luxurious dressers, offering ample storage and elegance.",
			image_url:
				"https://i.pinimg.com/474x/b4/59/2d/b4592de947607cebd6e4e3c5831a7358.jpg",
		},
		{
			name: "Cabinets",
			slug: "cabinets",
			description:
				"Discover our range of high-end cabinets, perfect for adding storage and sophistication to any room.",
			image_url:
				"https://i.pinimg.com/564x/56/4e/17/564e17f63228c2d5ec563c00ca2a96bb.jpg",
		},
		{
			name: "Sideboards",
			slug: "sideboards",
			description:
				"Enhance your home decor with our elegant sideboards, offering both style and practical storage solutions.",
			image_url:
				"https://i.pinimg.com/474x/96/34/48/963448fe302da44cb096b95702e76602.jpg",
		},
		{
			name: "Shelving",
			slug: "shelving",
			description:
				"Maximize your space with our stylish shelving units, perfect for any room in your home.",
			image_url:
				"https://i.pinimg.com/564x/bd/29/9a/bd299a5f5f2363986e331488f6e0910c.jpg",
		},
	],
	outdoor: [
		{
			name: "Outdoor Seating",
			slug: "outdoor_seating",
			description:
				"Transform your outdoor space with our luxurious seating options, designed for comfort and style.",
			image_url:
				"https://i.pinimg.com/736x/3c/46/9d/3c469d0fb9c3bc8ad61a539373eacdc3.jpg",
		},
		{
			name: "Outdoor Tables",
			slug: "outdoor_tables",
			description:
				"Explore our collection of outdoor tables, perfect for al fresco dining and entertaining.",
			image_url:
				"https://i.pinimg.com/564x/bf/10/ec/bf10ec2cf91192cc69940bfef7b881f7.jpg",
		},
		{
			name: "Outdoor Lighting",
			slug: "outdoor_lighting",
			description:
				"Illuminate your outdoor area with our elegant lighting solutions, designed for style and durability.",
			image_url:
				"https://i.pinimg.com/564x/f3/66/d7/f366d7465c766f5c8ac22a40ccbadc50.jpg",
		},
	],
	accessories: [
		{
			name: "Rugs",
			slug: "rugs",
			description:
				"Add warmth and texture to your space with our luxurious rugs, available in a variety of styles and sizes.",
			image_url:
				"https://i.pinimg.com/474x/a8/82/67/a882676a08ffdfa705efa5707e5d817c.jpg",
		},
		{
			name: "Mirrors",
			slug: "mirrors",
			description:
				"Enhance your decor with our exquisite mirrors, designed to add light and space to any room.",
			image_url:
				"https://i.pinimg.com/736x/0f/8f/bb/0f8fbbffc0b3843d740d6f0202d72584.jpg",
		},
		{
			name: "Sculptures",
			slug: "sculptures",
			description:
				"Discover our collection of elegant sculptures, perfect for adding an artistic touch to your home.",
			image_url:
				"https://i.pinimg.com/564x/dc/1c/ec/dc1cec125930c1c087215a34e9cc88e6.jpg",
		},
		{
			name: "Bathroom Accessories",
			slug: "bathroom_accessories",
			description:
				"Upgrade your bathroom with our premium accessories, offering both style and functionality.",
			image_url:
				"https://i.pinimg.com/736x/89/25/58/892558226103f52aec7c20ef8750a521.jpg",
		},
		{
			name: "Kitchenware",
			slug: "kitchenware",
			description:
				"Enhance your culinary experience with our high-end kitchenware, designed for both form and function.",
			image_url:
				"https://i.pinimg.com/564x/65/bc/4b/65bc4b7b01d6b4276d07551be28c286a.jpg",
		},
		{
			name: "Hardware",
			slug: "hardware",
			description:
				"Complete your home with our sophisticated hardware, including door handles, knobs, and more.",
			image_url:
				"https://i.pinimg.com/736x/f7/74/d8/f774d803e53fe730587d6fb20b1c8851.jpg",
		},
	],
};
