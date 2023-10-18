/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['media.rawg.io'],
	},
	env: {
		SECRET: '22dc8451931443c6bc3fbc279f7a8c7b',
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
