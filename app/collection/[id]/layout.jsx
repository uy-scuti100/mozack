import { myQueryFunction } from "@/actions/server";
import { wixClientServer } from "@/context/providers/server-wix-hook";
import { siteConfig } from "@/lib/utils";
export async function generateMetadata({ params, searchParams }, parent) {
	try {
		const id = params.id;

		const { imageUrl, name, desc, keywords } = await myQueryFunction(id);

		const previousImages = (await parent).openGraph?.images || [];

		return {
			title: `${name.charAt(0).toUpperCase() + name.slice(1)} collection`,
			description: desc,
			keywords: keywords,
			openGraph: {
				type: "website",
				locale: "en_US",
				url: `${siteConfig.url}/collection/${id}`,
				title: name,
				description: desc,
				siteName: siteConfig.name,
				images: [
					{ imageUrl, width: 1200, height: 630, alt: name },
					{ ...previousImages },
				],
			},
		};
	} catch (error) {
		console.error("Error generating metadata:", error);
		return {
			title: "Default Title",
			description: "Default description",
			openGraph: {
				images: [],
			},
		};
	}
}

export default function Layout({ children }) {
	return <section className="px-4 pt-32 pb-20">{children}</section>;
}
