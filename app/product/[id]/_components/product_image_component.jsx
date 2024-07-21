"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb.jsx";
import { useQuery } from "@tanstack/react-query";
import { formatSingleProduct } from "../../../../lib/product-formatter.js";
import { myProductQuery } from "../../../../actions/server/index.js";
import { fetchAll } from "../../../../lib/queries/fields/index.js";
import Link from "next/link";
import {
	useDiscountedPrice,
	useMediaQuery,
	useStatistics,
} from "../../../../lib/hooks/index.js";
import ProductSkeleton from "./product_skeleton.jsx";

export default function ProductComponent({ id }) {
	const { isMobile } = useMediaQuery();
	const { reviews, rating, stars } = useStatistics();
	const { data, isLoading, isFetching } = useQuery({
		queryKey: ["singleproduct and blobs", id],
		queryFn: () => myProductQuery(id),
	});
	const product = data?.product;
	const formattedProduct = formatSingleProduct(product, fetchAll);
	const discountPercentage = useDiscountedPrice(
		formattedProduct?.productPrice,
		formattedProduct?.productDiscountPrice
	);
	if (isLoading || isFetching) {
		return <ProductSkeleton />;
	}
	return (
		<div>
			<div>
				<div className="px-4">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<Link
									href={`/collection/${formattedProduct?.productCategory}`}
									className="text-xs font-medium text-black underline capitalize"
								>
									{formattedProduct?.productCategory}
								</Link>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<Link
									href={`/collection/${formattedProduct?.productCategory}/${formattedProduct?.productCollection}`}
									className="text-xs font-medium text-black underline capitalize"
								>
									{formattedProduct?.productCollection}
								</Link>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbPage className="text-xs font-medium capitalize font-mont text-[#777]">
								{formattedProduct?.productName}
							</BreadcrumbPage>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div
					className={`${
						!isMobile && "grid px-[0.63rem]"
					} grid-cols-3 max-w-[1920px] mx-auto mt-5`}
				>
					<div className="w-full h-full col-span-2">
						{isMobile ? (
							<Swiper
								modules={[Pagination, Autoplay]}
								className="productSlider"
								autoplay={{
									delay: 3000,
									pauseOnMouseEnter: true,
									disableOnInteraction: true,
								}}
								pagination={{ clickable: true }}
								loop
							>
								{formattedProduct?.collectionMediaItems.map((image, index) => (
									<SwiperSlide key={index}>
										<Image
											src={image}
											width={500}
											height={500}
											// blurDataURL={blobs[index]}
											// placeholder="blur"
											alt={formattedProduct?.productName}
											className="object-cover w-full max-h-[500px]"
											sizes="(min-width: 808px) 50vw, 100vw"
											loading="lazy"
										/>
									</SwiperSlide>
								))}
							</Swiper>
						) : (
							<div className="grid grid-cols-2 gap-4">
								{formattedProduct?.collectionMediaItems.map((image, index) => (
									<div
										key={index}
										className="relative min-w-[300px] min-h-[400px]"
									>
										<Image
											src={image}
											fill
											// blurDataURL={blobs[index]}
											// placeholder="blur"
											alt={formattedProduct?.productName}
											className="object-cover w-full h-full "
											sizes="(min-width: 808px) 50vw, 100vw"
											loading="lazy"
										/>
									</div>
								))}
							</div>
						)}
					</div>
					{/* product details */}
					<div className={`px-4 mt-10 cols-span-1 ${!isMobile && "mt-0"}`}>
						{formattedProduct?.productRibbon && (
							<div className="">
								<p>{formattedProduct?.productRibon}</p>
							</div>
						)}
						<h1 className="text-2xl font-medium text-black">
							{formattedProduct?.productName}
						</h1>
						<div className="flex flex-col gap-4 mt-2">
							<div className="flex items-center gap-1">
								<div className="flex items-center gap-1">
									<p className="text-sm">{stars}</p>
									<small>({rating})</small>
								</div>
								<div className="flex items-center gap-1 text-[#777] underline">
									<p className="text-sm ">Reviews</p>
									<span>
										<small>{reviews}</small>
									</span>
								</div>
							</div>
						</div>

						<div className="mt-2">
							<div>
								{formattedProduct?.productPrice >
								formattedProduct.productDiscountPrice ? (
									<div className="flex items-center gap-2">
										<h3 className="font-semibold text-[#D7373D] line-through">
											{formattedProduct?.productPrice}
										</h3>
										<h3 className="font-semibold">
											{formattedProduct.productDiscountPrice}
										</h3>
										<p className="text-[#D7373D] ">{discountPercentage}% off</p>
									</div>
								) : (
									<div>
										<h3 className="font-semibold">
											{formattedProduct?.productPrice}
										</h3>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
