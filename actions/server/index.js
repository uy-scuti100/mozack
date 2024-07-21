"use server";
import getBase64 from "../../app/api/getBase64";
import { wixClientServer } from "../../context/providers/server-wix-hook";
import {
	allProductsKeywords,
	collectionsData,
	seoDescriptions,
} from "../../lib/utils";

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
			const collectionBuffer = await getBase64(imageUrl);
			const image_urlBuffers = await Promise.all(
				collectionsData[id].map(async (item) => {
					const image_urlBuffer = await getBase64(imageUrl);
					return image_urlBuffer;
				})
			);
			return {
				name,
				numberOfProducts,
				imageUrl,
				desc,
				keywords,
				image_urlBuffers,
				collectionBuffer,
			};
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
			let blobs = [];
			if (product && product.collectionMediaItems) {
				const image_urlBuffer = await Promise.all(
					product.collectionMediaItems.map(async (imageUrl) => {
						const base64Image = await getBase64(imageUrl);
						blobs.push(base64Image);
					})
				);
			}
			return { product, blobs };
		} else {
			// Return a default product object with all fields available
			return {
				name: "Default Name",
				slug: "default-slug",
				visible: true,
				productType: "physical",
				description: "No description available",
				sku: "",
				weight: 0,
				weightRange: { minValue: 0, maxValue: 0 },
				stock: {
					trackInventory: false,
					inStock: false,
					inventoryStatus: "OUT_OF_STOCK",
				},
				price: {
					currency: "NGN",
					price: 0,
					discountedPrice: 0,
					formatted: { price: "₦0.00", discountedPrice: "₦0.00" },
				},
				priceData: {
					currency: "NGN",
					price: 0,
					discountedPrice: 0,
					formatted: { price: "₦0.00", discountedPrice: "₦0.00" },
				},
				convertedPriceData: {
					currency: "NGN",
					price: 0,
					discountedPrice: 0,
					formatted: { price: "₦0.00", discountedPrice: "₦0.00" },
				},
				priceRange: { minValue: 0, maxValue: 0 },
				costRange: { minValue: 0, maxValue: 0 },
				additionalInfoSections: [],
				ribbons: [],
				media: {
					mainMedia: {
						thumbnail: null,
						mediaType: "image",
						title: "default-image.jpg",
						image: { url: "" },
						_id: "default-image-id",
					},
					items: [],
				},
				customTextFields: [],
				manageVariants: false,
				productOptions: [],
				productPageUrl: {
					base: "https://default-url.com",
					path: "/product-page/default-slug",
				},
				numericId: "default-numeric-id",
				inventoryItemId: "default-inventory-item-id",
				discount: { type: "NONE", value: 0 },
				collectionIds: [],
				variants: [],
				lastUpdated: new Date().toISOString(),
				seoData: { tags: [] },
				ribbon: "",
				brand: "",
				exportProductId: "default-export-product-id",
				_id: "defaultid",
				_createdDate: new Date().toISOString(),
			};
		}
	} catch (error) {
		console.error("Error querying collections:", error);
		throw error;
	}
}
