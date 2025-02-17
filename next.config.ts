import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.cclarke-magrab.me",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  }
};

export default nextConfig;
