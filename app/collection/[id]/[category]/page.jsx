import { myProductsFunction } from "../../../../actions/server";
import { BreadcrumbComponent } from "../../../../components/global/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { formatProducts } from "../../../../lib/product-formatter";
import { fetchAll } from "../../../../lib/queries/fields/index";
import { collectionsData } from "../../../../lib/utils";
import getBase64 from "../../../api/getBase64";

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
	const { name, image_url } = catData;

	// base64 funtion for images blurred data

	const collectionBuffer = await getBase64(image_url);
	const image_urlBuffers = await Promise.all(
		categoryProducts.map(async (item) => {
			const image_urlBuffer = await getBase64(
				item.collectionMediaItems[0].imageUrl
			);
			return image_urlBuffer;
		})
	);

	return (
		<main className="pt-32 pb-20">
			<BreadcrumbComponent id={category} />
			<div className="mt-10">
				<div className="w-full relative h-[500px]  mt-5">
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
				<div>
					<div className="px-4 my-10 ">
						<h3 className="text-xl font-semibold font-mont">Categories</h3>
					</div>
				</div>
			</div>

			<div className="grid w-full grid-cols-2 px-4 mt-5 gap-x-3 gap-y-12 md:grid-cols-3">
				{categoryProducts.map((item, index) => (
					<div className="flex flex-col gap-5" key={index}>
						<Link
							href={`/product/${item.productSlug}`}
							className="flex flex-col w-full h-[280px] sm:h-[287px]  md:h-[300px]  lg:h-[500px] gap-2"
						>
							<div className="relative w-full h-full ">
								<Image
									src={item.collectionMediaItems[0].imageUrl}
									alt={item.productName}
									fill
									placeholder="blur"
									blurDataURL={image_urlBuffers[index]}
									className="w-full h-full object-fit lg:object-cover"
									sizes="(max-width: 480px) 100vw,
                                    (max-width: 768px) 75vw,
                                    (max-width: 1060px) 50vw,
                                    33vw"
								/>
								<div
									className="absolute inset-0 z-20"
									style={{
										background:
											"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 5%, rgba(0, 0, 0, .1) 100%)",
									}}
								/>
								{item.productRibbon && (
									<div className="absolute z-50 px-2 py-1 text-[10px] font-medium text-white uppercase bg-ash left-3 font-mont bottom-3 backdrop-blur-2xl">
										{item.productRibbon}
									</div>
								)}
							</div>
						</Link>
						<div className="flex flex-col">
							{/* <div className="text-[10px] font-medium uppercase font-mont backdrop-blur-2xl pb-1 text-ash-dark">
								<span className="">(Brand)</span> {item.productBrand}
							</div> */}
							<Link href={`/product/${item.productSlug}`}>
								<h3 className="text-sm font-medium font-mont">
									{item.productName}
								</h3>
							</Link>

							<p className="text-xs text-ash-dark">{item.productPrice}</p>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
