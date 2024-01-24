/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "custom-55": "55px",
        "custom-156": "156px",
        "custom-irregular": "561px 643px 77px 173px",
      },
      borderColor: {
        "custom-brown": "#6f4a1f",
      },
      spacing: {
        79: "79px",
      },
      backgroundColor: {
        "whine-transp": "rgba(255, 255, 255, 0.509)",
      },
      borderWidth: {
        3: "3px",
      },
      backgroundImage: {
        midnight:
          "linear-gradient(to right bottom, #d1a26b, #cc9b66, #c79360, #c18c5b, #bc8556, #b67f50, #b17a4b, #ab7445, #a36e3e, #9b6937, #946330, #8c5e29)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        whine_transp: "rgba(255, 255, 255, 0.509)",
        brown: "#6f4a1f",
      },
    },
  },
  plugins: [],
};
