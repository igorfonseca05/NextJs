import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'www.agenciaeplus.com.br'
    },
      {
      protocol: 'https',
      hostname: 'upload.wikimedia.org'
    },

  ]
  }
};

export default nextConfig;
