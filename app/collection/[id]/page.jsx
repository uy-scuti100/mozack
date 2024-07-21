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
