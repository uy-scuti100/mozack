import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from "@tanstack/react-query";
import SingleCollection from "./_components/collection";

export default async function page({ params }) {
	const id = params.id;
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["collection", id],
		queryFn: () => myCollectionQueryFunction(id),
	});

	return (
		<section className="">
			<HydrationBoundary state={dehydrate(queryClient)}>
				<SingleCollection id={id} />
			</HydrationBoundary>
		</section>
	);
}

// // base64 funtion for images blurred data
// const collectionBuffer = await getBase64(imageUrl);
// const image_urlBuffers = await Promise.all(
// 	collectionsData[id].map(async (item) => {
// 		const image_urlBuffer = await getBase64(item.image_url);
// 		return image_urlBuffer;
// 	})
// );
