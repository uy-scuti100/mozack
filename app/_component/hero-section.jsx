const ResponsiveVideo = () => {
	return (
		<div className="relative w-full h-screen bg-center bg-no-repeat bg-cover brightness-95 bg-hero">
			<div
				className="absolute inset-0 z-40 top-[70%]"
				style={{
					background:
						"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 10%, rgba(0, 0, 0, .9) 100%)",
				}}
			></div>
			<div className="absolute z-50 overflow-hidden left-2 right-2 sm:bottom-3 bottom-10">
				<h1 className="text-[20vw] text-white text-balance font-mont leading-none ">
					MOZACK
				</h1>
				<p className="px-2 text-white text-xl text-balance max-w-[550px] font-inter">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
					accusantium unde quidem perferendis suscipit
				</p>
			</div>
		</div>
	);
};

export default ResponsiveVideo;
