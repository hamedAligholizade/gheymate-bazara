import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static exports
  distDir: 'out', // Output directory for the static build
  images: {
    unoptimized: true // Required for static export
  }
};

export default nextConfig;
