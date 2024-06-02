import { myCollectionQueryFunction } from "../../../actions/server";
import { siteConfig } from "../../../lib/utils";
export async function generateMetadata({ params }) {
	try {
		const id = params.id;

		const { imageUrl, name, desc, keywords } = await myCollectionQueryFunction(
			id
		);

		return {
			title: `${name.charAt(0).toUpperCase() + name.slice(1)} collection`,
			description: desc,
			keywords: keywords,
			openGraph: {
				type: "website",
				locale: "en_US",
				url: `${siteConfig.url}/collection/${id}`,
				title: `${name.charAt(0).toUpperCase() + name.slice(1)} collection`,
				description: desc,
				siteName: siteConfig.name,
				images: [{ url: imageUrl, width: 1200, height: 630, alt: name }],
			},
			twitter: {
				card: "summary_large_image",
				site: "@hussain_joe",
				creator: "@hussain_joe",
				title: `${name.charAt(0).toUpperCase() + name.slice(1)} collection`,
				description: desc,
				image: imageUrl,
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
	return <section className="">{children}</section>;
}
