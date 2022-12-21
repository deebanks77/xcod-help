/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui", "Open Sans"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    maxWidth: {
      sectionWidth: "1500px",
    },
    screens: {
      tablet: "665px",
      // => @media (min-width: 640px) { ... }
      ipadMini: "760px",
      // => @media (min-width: 760px) { ... }
      iPad: "840px",
      // => @media (min-width: 840px) { ... }
      iPad2: "930px",
      // => @media (min-width: 840px) { ... }

      laptop: "1030px",
      // => @media (min-width: 1024px) { ... }

      laptop2: "1145px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1295px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
