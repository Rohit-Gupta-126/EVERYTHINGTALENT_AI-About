import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com", "images.unsplash.com", "source.unsplash.com", "www.everythingtalent.ai"],
  }
};

export default nextConfig;