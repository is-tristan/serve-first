/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    agentUpgrade: "security",
  },
  async redirects() {
    return [
      {
        source: "/how-it-works/analyse",
        destination: "/how-it-works/analyze",
        permanent: true,
      },
      {
        source: "/solutions/by-role/compliance-manager",
        destination: "/solutions/by-role/compliance-managers",
        permanent: true,
      },
      {
        source: "/cookies-policy",
        destination: "/legal/cookie-policy",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/legal/privacy-policy",
        permanent: true,
      },
      {
        source: "/legal/accessability",
        destination: "/legal/accessibility",
        permanent: true,
      },
      {
        source: "/products/vision",
        destination: "/products/operational-excellence/vision",
        permanent: true,
      },
      {
        source: "/coming-soon",
        destination: "/products/operational-excellence/vision",
        permanent: true,
      },
    ];
  },
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
