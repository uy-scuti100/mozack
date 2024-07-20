import { myProductQueryFunction } from "../../../actions/server";
import { siteConfig } from "../../../lib/utils";

export async function generateMetadata({ params }, parent) {
    const id = params.id;

    const { imageUrl, name, desc, keywords, ...product } =
        await myProductQueryFunction(id);

    return {
        title: `${name.charAt(0).toUpperCase() + name.slice(1)}`,
        description: desc,
        keywords: keywords,
        openGraph: {
            type: "website",
            locale: "en_US",
            url: `${siteConfig.url}/product/${id}`,
            title: name,
            description: desc,
            siteName: siteConfig.name,
            images: [{ url: imageUrl, width: 1200, height: 630, alt: name }],
        },
        twitter: {
            card: "summary_large_image",
            site: "@hussain_joe",
            creator: "@hussain_joe",
            title: `${name.charAt(0).toUpperCase() + name.slice(1)}`,
            description: desc,
            image: imageUrl,
        },
    };
}
export default async function ProductLayout({ children }) {
    return <section>{children}</section>;
}
