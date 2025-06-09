// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export', // Enables static exports
  images: {
    unoptimized: true, // Required for static export
  },
}