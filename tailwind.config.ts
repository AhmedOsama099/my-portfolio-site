module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}", // Fixed capitalization
    "./components/**/*.{js,ts,jsx,tsx}", // Keep this for safety
    "./utils/**/*.{js,ts,jsx,tsx}", // Add any other directories
  ],
  
  theme: {
    extend: {},
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  // Production optimizations
  safelist: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './Components/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './utils/**/*.{js,ts,jsx,tsx}',
    ],
  }
};
