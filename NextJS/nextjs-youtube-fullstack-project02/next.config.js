/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    experiments: {
        topLevelAwait: true
    },
    images: {
        domains: ['occ-0-3933-116.1.nflxso.net']
    }
}

module.exports = nextConfig