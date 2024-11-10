import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = withVideos({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
    ],
  },
});

export default nextConfig;
