import { myCollectionQueryFunction } from "../../../actions/server";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb";
import getBase64 from "../../../lib/getBase64";
import { collectionsData } from "../../../lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function page({ params }) {
	const id = params.id;
	const { imageUrl, name } = await myCollectionQueryFunction(id);

	// base64 funtion for images blurred data
	const collectionBuffer = await getBase64(imageUrl);
	const image_urlBuffers = await Promise.all(
		collectionsData[id].map(async (item) => {
			const image_urlBuffer = await getBase64(item.image_url);
			return image_urlBuffer;
		})
	);

	return (
		<main className="pt-32 pb-20">
			<BreadcrumbComponent id={id} />

			<div className="mt-10 ">
				<div className="w-full relative h-[500px]  mt-5">
					<Image
						src={imageUrl}
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
					<div className="my-10">
						<h3 className="px-4 text-xl font-semibold font-mont">Categories</h3>
					</div>
				</div>
			</div>

			<div className="grid w-full grid-cols-2 px-4 mt-5 gap-x-6 gap-y-12 md:grid-cols-3 ">
				{collectionsData[id].map((item, index) => (
					<div className="flex flex-col gap-5" key={index}>
						<Link
							href={`/collection/${id}/${item.slug.toLowerCase()}`}
							className="flex flex-col w-full h-[280px] sm:h-[287px]  md:h-[300px]  lg:h-[500px] gap-2"
						>
							<div className="relative w-full h-full ">
								<Image
									src={item.image_url}
									alt={item.name}
									fill
									placeholder="blur"
									blurDataURL={image_urlBuffers[index]}
									className="w-full h-full object-fit"
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

								<div className="absolute z-50 px-2 py-1 text-[10px] font-medium text-white uppercase bg-ash left-3 font-mont bottom-3 backdrop-blur-2xl">
									{item.name}
								</div>
							</div>
						</Link>
						<div>
							<p className="text-[#7F7F7F] text-xs md:text-base clam">
								{item.description.slice(0, 50)}...
							</p>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}

const BreadcrumbComponent = ({ id }) => {
	return (
		<Breadcrumb className="px-4">
			<BreadcrumbList>
				<BreadcrumbItem>
					<Link href="/" className="text-xs font-medium">
						Home
					</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="text-xs font-medium font-mont">
						Collection
					</BreadcrumbPage>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="text-xs font-medium capitalize font-mont">
						{id}
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};
