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
			{
				hostname: "static.wixstatic.com",
				protocol: "https",
			},
		],
	},
};

export default nextConfig;
