import Showcase from "./_components/showcase";
import ResponsiveVideo from "./_components/hero-section";
export default function page() {
	return (
		<div className="min-h-screen">
			<ResponsiveVideo />
			<Showcase />
		</div>
	);
}
