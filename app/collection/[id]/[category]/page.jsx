import { myProductsFunction } from "../../../../actions/server";
import { BreadcrumbComponent } from "../../../../components/global/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { formatProducts } from "../../../../lib/product-formatter";
import { fetchAll } from "../../../../lib/queries/fields/index";
import { collectionsData } from "../../../../lib/utils";
import getBase64 from "../../../api/getBase64";
import ProductsComponent from "./_components/products-component";

export default async function page({ params }) {
	const category = params.category;
	const id = params.id;
	const products = await myProductsFunction();
	const formattedProducts = await formatProducts(products, fetchAll);

	const categoryProducts = formattedProducts.filter(
		(item) => item.productCollection === category
	);
	if (categoryProducts.length === 0) {
		return (
			<main>
				<BreadcrumbComponent id={category} />
				<div className="mt-5">
					<h2 className="font-semibold capitalize">{category}</h2>
					<div className="mt-5">
						<h3 className="text-xl font-semibold text-center">
							No products found in this category
						</h3>
						<div className="mt-5">
							<Link href="/">
								<button className="px-5 py-2 mx-auto font-semibold text-white bg-black rounded-lg w-fit">
									Back to Home
								</button>
							</Link>
						</div>
					</div>
				</div>
			</main>
		);
	}
	const catData = collectionsData[id].filter(
		(item) => item.slug === category
	)[0];
	const { name, image_url, description } = catData;

	const collectionBuffer = await getBase64(image_url);

	return (
		<main className="pt-32 pb-20">
			<BreadcrumbComponent id={category} />

			<div className="grid grid-cols-1 mt-10 sm:grid-cols-2">
				<div className="w-full relative h-[300px] ">
					<Image
						src={image_url}
						alt={name}
						fill
						placeholder="blur"
						blurDataURL={collectionBuffer}
						className="object-cover w-full h-full"
						sizes="(max-width: 480px) 100vw,
                        (max-width: 768px) 75vw,
                        (max-width: 1060px) 50vw,
                        33vw"
					/>
					<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
				</div>
				<div className="px-5 bg-[#F6F6F4] flex justify-center gap-5  flex-col items-center">
					{catData ? (
						<div className="p-5">
							<div className="flex flex-col items-center justify-center ">
								<h1 className="text-4xl font-semibold capitalize sm:text-7xl">
									{name}
								</h1>
								<small className="text-xs text-center">(category)</small>
							</div>
							<div>
								<p className="text-center">{description}</p>
							</div>
						</div>
					) : (
						<div className="flex flex-col items-center justify-center gap-6 p-5">
							<div className="h-16 rounded-md bg-deep-brown/50 w-[14rem] animate-pulse"></div>

							<small className="text-xs text-center">
								<div className="h-3 rounded-md w-28 bg-deep-brown/50 animate-pulse"></div>
							</small>
							<div className="flex flex-col items-center justify-center w-full gap-2">
								<div className="w-full h-3 rounded-md bg-deep-brown/50 animate-pulse"></div>
								<div className="w-[90%] h-3 rounded-md w- bg-deep-brown/50 animate-pulse"></div>
								<div className="w-[70%] h-3 rounded-md w- bg-deep-brown/50 animate-pulse"></div>
								<div className="w-[50%] h-3 rounded-md w- bg-deep-brown/50 animate-pulse"></div>
							</div>
						</div>
					)}
				</div>
			</div>

			<ProductsComponent categoryProducts={categoryProducts} />
		</main>
	);
}
