import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: "c:\\Users\\Dell\\Downloads\\New Car\\car\\Next-Car-website",
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
      },{
        protocol: 'https',
        hostname:'images.pexels.com'
      },
      {
        protocol: 'https',
        hostname:'di-uploads-pod3.dealerinspire.com'
      },{
protocol: 'https',
hostname:"www.cnet.com"      },
      {
        protocol: 'https',
        hostname: 'imgd.aeplcdn.com'      }
    ],
  },
};

export default nextConfig;
