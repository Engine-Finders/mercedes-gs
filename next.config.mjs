/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mercedesgarage.uk" }],
        destination: "https://mercedesgarage.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
