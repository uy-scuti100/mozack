import { collectionsData, siteConfig } from "../../../../lib/utils";
export async function generateMetadata({ params }) {
	try {
		const category = params.category;
		const id = params.id;

		const catData = collectionsData[id].filter(
			(item) => item.slug === category
		)[0];

		const { name, image_url, description } = catData;

		return {
			title: `${name} products`,
			description: description,
			keywords: category,
			openGraph: {
				type: "website",
				locale: "en_US",
				url: `${siteConfig.url}/collection/${id}/${category}`,
				title: name,
				description: description,
				siteName: siteConfig.name,
				images: [{ url: image_url, width: 1200, height: 630, alt: name }],
			},
			twitter: {
				card: "summary_large_image",
				site: "@hussain_joe",
				creator: "@hussain_joe",
				title: `${name} collection`,
				description: description,
				image: image_url,
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

export default function CategoryLayout({ children }) {
	return <section>{children}</section>;
}
