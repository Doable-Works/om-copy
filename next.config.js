/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async redirects() {
		return [
			{
				source: "/:path*",
				destination: "https://www.gdpartners.co.in/",
				permanent: false,
			},
		];
	},
	images: {
		domains: ["img.youtube.com"],
	},
};

module.exports = nextConfig;
