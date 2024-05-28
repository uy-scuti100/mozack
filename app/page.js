import Showcase from "@/app/_component/showcase";
import ResponsiveVideo from "./_component/hero-section";

export default function page() {
	return (
		<div className="min-h-screen">
			<ResponsiveVideo />
			<Showcase />
		</div>
	);
}
