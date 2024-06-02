import Showcase from "./_components/showcase";
import ResponsiveVideo from "./_components/hero-section";
export default function page() {
	// const wixClient = useWixClient();
	// const [products, setProducts] = useState([]);
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);

	// useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		if (!wixClient) {
	// 			console.error("wixClient is undefined");
	// 			return;
	// 		}

	// 		try {
	// 			const { items } = await wixClient.products.queryProducts().find();
	// 			console.log("Fetched products:", items[0]);
	// 			setProducts(items);
	// 			setLoading(false);
	// 		} catch (error) {
	// 			console.error("Failed to fetch products:", error);
	// 			setError(error);
	// 			setLoading(false);
	// 		}
	// 	};

	// 	fetchProducts();
	// }, [wixClient]);

	return (
		<div className="min-h-screen">
			<ResponsiveVideo />
			<Showcase />
		</div>
	);
}
