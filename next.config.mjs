/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "next-class-images.s3.ap-southeast-2.amazonaws.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};
export default nextConfig;
