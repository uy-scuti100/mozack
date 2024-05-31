"use server";
import { wixClientServer } from "@/context/providers/server-wix-hook";
import { allProductsKeywords, seoDescriptions } from "@/lib/utils";

export async function myQueryFunction(id) {
	if (!id) {
		throw new Error("Invalid ID: ID cannot be null or undefined");
	}

	try {
		const wixClient = await wixClientServer();

		const results = await wixClient.collections
			.queryCollections()
			.eq("name", id)
			.find();

		if (results.items.length > 0) {
			const collection = results.items[0];
			const name = collection.slug;
			const imageUrl = collection.media?.mainMedia?.image?.url || "";
			const numberOfProducts = collection.numberOfProducts;
			const desc =
				seoDescriptions[name.toLowerCase()] || "No description available";
			const keywords = allProductsKeywords[name.toLowerCase()] || [];
			return { name, numberOfProducts, imageUrl, desc, keywords };
		} else {
			return {
				name: "Default Name",
				imageUrl: "",
				desc: "No description available",
			};
		}
	} catch (error) {
		console.error("Error querying collections:", error);
		throw error;
	}
}
