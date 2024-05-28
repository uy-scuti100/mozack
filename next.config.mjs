/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "i.scdn.co",
				protocol: "https",
			},
			{
				hostname: "i.pinimg.com",
				protocol: "https",
			},
		],
	},
};

export default nextConfig;
