/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
