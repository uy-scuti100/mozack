"use client";
import {
	// useQuery,
	// useMutation,
	// useQueryClient,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function ReactQueryProvider({ children }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 10 * 60 * 1000,
						cacheTime: 15 * 60 * 1000,

						refetchOnWindowFocus: false,
					},
				},
			})
	);
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			{children}
		</QueryClientProvider>
	);
}
