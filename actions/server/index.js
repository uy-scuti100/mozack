"use server";
import { wixClientServer } from "../../context/providers/server-wix-hook";
import { allProductsKeywords, seoDescriptions } from "../../lib/utils";

export async function myCollectionQueryFunction(id) {
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
export async function myProductsFunction() {
	try {
		const wixClient = await wixClientServer();

		const results = await wixClient.products.queryProducts().find();

		if (results.items.length > 0) {
			return results.items;
		} else {
			return {
				name: "Default Name",
				imageUrl: "",
				desc: "No description available",
			};
		}
	} catch (error) {
		console.error("Error querying products:", error);
		throw error;
	}
}

export async function myProductQueryFunction(id) {
	if (!id) {
		throw new Error("Invalid ID: ID cannot be null or undefined");
	}

	try {
		const wixClient = await wixClientServer();

		const results = await wixClient.products
			.queryProducts()
			.eq("slug", id)
			.find();
		console.log(results.items[0]);

		if (results.items.length > 0) {
			const product = results.items[0];
			const name = product.slug;
			const imageUrl = product.media?.items[0]?.image.url || "";

			const desc = product.description || "No description available";
			const keywords = [];
			if (product.name) {
				keywords.push(product.name);
			}
			if (product.productOptions && product.productOptions.length > 0) {
				product.productOptions.forEach((productOption) => {
					if (productOption.choices && productOption.choices.length > 0) {
						productOption.choices.forEach((value) => {
							keywords.push(value.value);
						});
					}
				});
			}
			if (product.brand) {
				keywords.push(product.brand);
			}
			if (product.ribbons && product.ribbons.length > 0) {
				product.ribbons.forEach((ribbon) => {
					if (ribbon.text) {
						keywords.push(ribbon.text);
					}
				});
			}
			return { name, imageUrl, desc, keywords };
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
export async function myProductQuery(id) {
	if (!id) {
		throw new Error("Invalid ID: ID cannot be null or undefined");
	}

	try {
		const wixClient = await wixClientServer();

		const results = await wixClient.products
			.queryProducts()
			.eq("slug", id)
			.find();

		if (results.items.length > 0) {
			const product = results.items[0];
			const name = product.slug;
			const imageUrl = product.media?.items[0]?.image.url || "";

			const desc = product.description || "No description available";
			const keywords = [];
			if (product.name) {
				keywords.push(product.name);
			}
			if (product.productOptions && product.productOptions.length > 0) {
				product.productOptions.forEach((productOption) => {
					if (productOption.choices && productOption.choices.length > 0) {
						productOption.choices.forEach((value) => {
							keywords.push(value.value);
						});
					}
				});
			}
			if (product.brand) {
				keywords.push(product.brand);
			}
			if (product.ribbons && product.ribbons.length > 0) {
				product.ribbons.forEach((ribbon) => {
					if (ribbon.text) {
						keywords.push(ribbon.text);
					}
				});
			}
			return { name, imageUrl, desc, keywords };
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
