/** @type {import('next').NextConfig} */
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const nextConfig = {
    reactStrictMode: true,
    env: {
        AUTH_ACCESS_TOKEN: process.env.AUTH_ACCESS_TOKEN,
    },
    images: {
        domains: ['localhost', 'res.cloudinary.com'],
    },
    async headers() {
        return [
        {
            source: '/(.*)',
            headers: [
            {
                key: 'X-Frame-Options',
                value: 'DENY',
            },
            ],
        },
        ];
    },
};

export default nextConfig;
