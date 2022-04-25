module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('autoprefixer'),
    require('tailwindcss')('./app/assets/tailwind.config.js')
  ]
}
