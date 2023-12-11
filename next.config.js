/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['media.rawg.io'],
	},

	async rewrites() {
		return [
			{
				source: '/home',
				destination: '/',
			},
		];
	},
};

module.exports = nextConfig;
