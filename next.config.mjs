/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/coreshift",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
