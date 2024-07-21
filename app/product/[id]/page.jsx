import { myProductQuery } from "../../../actions/server";
import ProductComponent from "./_components/product_image_component";
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from "@tanstack/react-query";

export default async function page({ params }) {
	const id = params.id;
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["product", id],
		queryFn: () => myProductQuery(id),
	});

	return (
		<main className="pb-40 pt-28">
			<div className="mt-10">
				<HydrationBoundary state={dehydrate(queryClient)}>
					<ProductComponent id={id} />
				</HydrationBoundary>
			</div>
		</main>
	);
}
