module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        blob: "blob 8s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)"
          },
          "33%": {
            transform: "scale(105%)"
          },
          "66%": {
            transform: "scale(105%)"
          },
          "100%": {
            transform: "scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
}