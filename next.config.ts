import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.utec.edu.sv",
                // pathname: "/s2/favicons/**",
            },
        ],
    }
};

export default nextConfig;
