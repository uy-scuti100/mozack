import { myProductQuery } from "../../../actions/server";
import { formatProduct } from "../../../lib/product-formatter";
import { fetchAll } from "../../../lib/queries/fields";

export default async function page({ params }) {
	const id = params.id;
	const product = await myProductQuery(id);
	const formattedProduct = await formatProduct(product, fetchAll);
	// base64 funtion for images blurred data
	// const collectionBuffer = getBase64(imageUrl);
	// const image_urlBuffers = await Promise.all(
	// 	collectionsData[id].map(async (item) => {
	// 		const image_urlBuffer = await getBase64(item.image_url);
	// 		return image_urlBuffer;
	// 	})
	// );

	return (
		<main className="px-4 pb-40 pt-28">
			{formattedProduct.productName.charAt(0).toUpperCase() +
				formattedProduct.productName.slice(1)}{" "}
			Product page
		</main>
	);
}
