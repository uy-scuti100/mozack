import { myProductQuery } from "../../../actions/server";
import { formatSingleProduct } from "../../../lib/product-formatter";
import { fetchAll } from "../../../lib/queries/fields";
import getBase64 from "../../api/getBase64";
import ProductComponent from "./_components/product_image_component";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb.jsx";
import Link from "next/link";

export default async function page({ params }) {
	const id = params.id;
	const product = await myProductQuery(id);
	console.log(product);

	const formattedProduct = formatSingleProduct(product, fetchAll);
	// base64 funtion for images blurred data
	let blobs = [];
	if (formattedProduct) {
		const image_urlBuffer = await Promise.all(
			formattedProduct.collectionMediaItems.map(async (imageUrl) => {
				const base64Image = await getBase64(imageUrl);
				blobs.push(base64Image);
			})
		);
	}

	return (
		<main className="pb-40 pt-28">
			<div className="px-4">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<Link
								href={`/collection/${formattedProduct?.productCategory}`}
								className="text-xs font-medium text-black capitalize"
							>
								{formattedProduct?.productCategory}
							</Link>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<Link
								href={`/collection/${formattedProduct?.productCategory}/${formattedProduct?.productCollection}`}
								className="text-xs font-medium text-black capitalize"
							>
								{formattedProduct?.productCollection}
							</Link>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<div className="mt-10">
				<ProductComponent product={formattedProduct} blobs={blobs} />
			</div>
		</main>
	);
}
