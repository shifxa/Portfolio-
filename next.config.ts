import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
  images: {
    domains: ['images.unsplash.com','cdn.worldvectorlogo.com','upload.wikimedia.org','cdn.prod.website-files.com','static.vecteezy.com','img.freepik.com','cdn.jim-nielsen.com','registry.npmmirror.com','cache.careers360.mobi','media.licdn.com'],
  }
};

export default nextConfig;
