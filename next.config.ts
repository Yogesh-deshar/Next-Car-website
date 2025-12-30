import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'news.dupontregistry.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname:'*.google.com'
      }
      ,{
        protocol: 'https',
        hostname:'hpe-photos.s3.us-east-2.amazonaws.com'
      }
    ],
  },
};

export default nextConfig;
