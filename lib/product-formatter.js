// Utility functions to format product data
export function getNestedValue(obj, path) {
	return path.split(".").reduce((acc, part) => {
		const arrayIndexMatch = part.match(/^(.+?)\[(\d+)\]$/);
		if (arrayIndexMatch) {
			const arrayKey = arrayIndexMatch[1];
			const arrayIndex = parseInt(arrayIndexMatch[2], 10);
			return acc && acc[arrayKey] && acc[arrayKey][arrayIndex];
		}
		return acc && acc[part];
	}, obj);
}

export function formatProductData(product, fields) {
	const formattedProduct = {};
	for (const [customField, originalField] of Object.entries(fields)) {
		const value = getNestedValue(product, originalField);
		if (value !== undefined) {
			formattedProduct[customField] = value;
		}
	}
	return formattedProduct;
}

export function formatProducts(products, fields) {
	return products.map((product) => formatProductData(product, fields));
}

export function extractNestedArrayData(product, arrayPath, fields) {
	const arrayData = getNestedValue(product, arrayPath);
	if (Array.isArray(arrayData)) {
		return arrayData.map((item) => formatProductData(item, fields));
	}
	return [];
}
