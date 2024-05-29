export async function generateMetadata({ params, searchParams }, parent) {
	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: "Collections",
		openGraph: {
			images: [...previousImages],
		},
	};
}
export default async function Layout({ children }) {
	return <section>{children}</section>;
}
