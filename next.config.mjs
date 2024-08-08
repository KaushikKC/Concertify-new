/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      readline: false,
    };
    return config;
  },
  images: {
    domains: ["img.freepik.com", "images.pexels.com", "via.placeholder.com"], // Add this line to allow the external domain
  },
};

export default nextConfig;
