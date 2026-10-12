/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  async redirects() {
    return [
      { source: "/about", destination: "/experience", permanent: true },
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/blog", destination: "/notes", permanent: true },
      { source: "/blog/:slug", destination: "/notes/:slug", permanent: true },
      { source: "/gallery", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
