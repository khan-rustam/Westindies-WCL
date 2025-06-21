/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'cf-img-a-in.tosshub.com' },
            { protocol: 'https', hostname: 'd3lzcn6mbbadaf.cloudfront.net' },
            { protocol: 'https', hostname: 'img-s-msn-com.akamaized.net' },
            { protocol: 'https', hostname: 'gulftimesint.com' },
            { protocol: 'https', hostname: 'images.news18.com' },
            { protocol: 'https', hostname: 'images.mid-day.com' },
            { protocol: 'https', hostname: 'imgengine.khaleejtimes.com' },
            { protocol: 'https', hostname: 'img.republicworld.com' },
            { protocol: 'https', hostname: 'images.onearabia.me' },
            { protocol: 'https', hostname: 'st1.latestly.com' },
            { protocol: 'https', hostname: 'www.hindustantimes.com' }
        ],
        // unoptimized: true, // Re-enable Next.js Image Optimization
    },
}

export default nextConfig