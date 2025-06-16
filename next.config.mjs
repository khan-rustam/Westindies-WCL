/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        // unoptimized: true, // Re-enable Next.js Image Optimization
    },
}

export default nextConfig