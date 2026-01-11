import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/calculator',
        destination: '/kalkylator',
        permanent: true,
      },
      {
        source: '/guides',
        destination: '/guider',
        permanent: true,
      },
      {
        source: '/guides/:slug',
        destination: '/guider/:slug',
        permanent: true,
      },
      {
        source: '/aboutbread',
        destination: '/om-brod',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/kontakt',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
