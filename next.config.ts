// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export', // Enables static export
  assetPrefix: isProd ? '/portfolio/' : '', // Replace with your repo name
  images: {
    unoptimized: true, // Required for static export
  },
}