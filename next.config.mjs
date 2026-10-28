/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    agentUpgrade: "security",
  },
  async redirects() {
    return [
      {
        source: "/how-it-works",
        destination: "/how-it-works/capture",
        permanent: true,
      },
      {
        source: "/solutions",
        destination: "/solutions/by-role/cx-leaders",
        permanent: true,
      },
      {
        source: "/solutions/by-role",
        destination: "/solutions/by-role/cx-leaders",
        permanent: true,
      },
      {
        source: "/solutions/by-industry",
        destination: "/solutions/by-industry/retail",
        permanent: true,
      },
      {
        source: "/solutions/by-challenge",
        destination: "/solutions/by-challenge/inconsistent-standards",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/products/customer-experience/feedback-terminals",
        permanent: true,
      },
      {
        source: "/products/customer-experience",
        destination: "/products/customer-experience/feedback-terminals",
        permanent: true,
      },
      {
        source: "/products/market-intelligence",
        destination: "/products/market-intelligence/competitive-benchmarking",
        permanent: true,
      },
      {
        source: "/products/operational-excellence",
        destination: "/products/operational-excellence/audits",
        permanent: true,
      },
      {
        source: "/company",
        destination: "/company/about",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/legal",
        destination: "/legal/privacy-policy",
        permanent: true,
      },
      {
        source: "/coming-soon",
        destination: "/products/operational-excellence/vision",
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
