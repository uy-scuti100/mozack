import { Button } from "../../components/ui/button";
import Link from "next/link";

const ResponsiveVideo = () => {
	return (
		<div className="relative w-full h-[100svh] bg-center bg-no-repeat bg-cover brightness-95 bg-hero">
			<div
				className="absolute inset-0 z-40 top-[70%]"
				style={{
					background:
						"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 10%, rgba(0, 0, 0, .9) 100%)",
				}}
			></div>
			<div className="absolute z-50 overflow-hidden left-2 right-2 sm:bottom-3 bottom-5">
				<h1 className="text-[20vw] text-white font-mont leading-none ">
					MOZACK
				</h1>
				<p className="px-2 text-white text-lg text-pretty max-w-[550px] font-inter pb-5">
					Experience Unmatched Elegance and Comfort with Our Exquisite Furniture
					Collection
				</p>

				<Link href="/collections">
					<Button className="px-12 py-6 text-base text-black transition-all duration-500 bg-white rounded-none hover:bg-black hover:text-white">
						{" "}
						Explore Collections
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default ResponsiveVideo;
