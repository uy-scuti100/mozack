import { wixClientServer } from "@/context/providers/server-wix-hook";

export async function generateMetadata({ params, searchParams }, parent) {
	const id = params.id;

	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: `${id.charAt(0).toUpperCase() + id.slice(1)} Collection`,
		description: "",
		openGraph: {
			images: [
				"https://i.pinimg.com/736x/9e4a/8c/9e4a8c3df22bba32f180d5c6c880c0bd.jpg",
				...previousImages,
			],
		},
	};
}
export default async function ProductLayout({ children }) {
	return <section>{children}</section>;
}

// export default async function ProductLayout({ children }) {
// 	return <main>{children}</main>;
// }
