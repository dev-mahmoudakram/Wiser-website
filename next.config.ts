import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
);

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [40, 75],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 64, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Link', value: '<https://images.unsplash.com>; rel=preconnect; crossorigin' },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
