/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Consider removing this for production
  },
  eslint: {
    ignoreDuringBuilds: true, // Use with caution
  },
  output: 'export', // Correct for static export
};

export default nextConfig;
