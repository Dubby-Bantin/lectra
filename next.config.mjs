import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = withVideos({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
});

export default nextConfig;
