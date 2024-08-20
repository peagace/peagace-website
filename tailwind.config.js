/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "325px",
      sm: "515px",
      md: "768px",
      lg: "1024px",
      xl: "1104px",
      xxl: "1536px",
    },
    colors: {
      //navbar
      "navbar-bg": "#000000a7",
      "navbar-text": "#ffffff",
      "navbar-text-hover": "#f20040",

      //footer
      "footer-bg": "#141414",
      "footer-title": "#9b9b9b",
      "footer-text": "#ffffff",
      "footer-text-hover": "#f20040",

      //text colors
      "text-primary": "#000000",
      "text-secondary": "#000000",
      "text-extra-0": "#000000",

      //backgrounds
      "background-0": "#CCCCCC",
      "background-1": "#000000",
      "background-2": "#000000",

      //main colors
      accent: "#FF0F00",
      warning: "#000000",
      success: "#000000",

      white: "#ffffff",
      gray: "#666666",
      black: "#000000",
      orange: "#FF0F00",
      lightgray: "#C2C3CC",

      //new
      acid: "#BDFF30",
      darkgray: "#B0B2C0",
      newgray: "#6B6C73",
      newblack: "#272727",
      outlinegray: "#6B6C7320",

      //other
      teste: "#ae0000",
      placeholder: "#d0d0d0bb",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "normal", fontWeight: 80 }], //12 px
      sm: ["1rem", { lineHeight: "normal", fontWeight: 80 }], //16 px
      btn: ["1rem", { lineHeight: "normal", fontWeight: 180 }], //16 px
      pill: ["1rem", { lineHeight: "normal", fontWeight: 100 }], //16 px
      eighteen: ["1.125rem", { lineHeight: "normal", fontWeight: 80 }], //18 px
      base: ["1.25rem", { lineHeight: "1.35", fontWeight: 80 }], //20 px
      twentyfour: ["1.5rem", { lineHeight: "normal", fontWeight: 100 }], //24 px
      halfest: ["1.75rem", { lineHeight: "normal", fontWeight: 100 }], //32 px
      fourtyfourresponse: ["1.75rem", { fontWeight: 70 }], //32 px
      halfer: ["2.3755rem", { lineHeight: "normal", fontWeight: 100 }], //38 px
      fourtyfour: ["2.75rem", { fontWeight: 70 }], //44 px
      half: ["3.5rem", { lineHeight: "normal", fontWeight: 100 }], //50 px
      mediumhalf: ["4rem", { lineHeight: "normal", fontWeight: 100 }], //64 px
      medium: ["4.375rem", { lineHeight: "normal", fontWeight: 100 }], //70 px
      lg: ["5.375rem", { lineHeight: "normal", fontWeight: 100 }], //86 px
      xl: ["6.375rem", { fontWeight: 100, lineHeight: "1.15" }], //102 px
      xxl: ["16.25rem", { fontWeight: 100, lineHeight: "0.8" }], //180 px
    },
    fontFamily: {
      grotesk: ["FFF Acid Grotesk"],
      "grotesk-italic": ["FFF Acid Grotesk"],
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      scale: "120%",
      card: "110%",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-fade": "linear-gradient(0deg, #CCCCCC 0%, #FF0000 100%)",
        "header-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.60) 20%, rgba(255, 255, 255, 0.10) 80%, rgba(255, 255, 255, 0.00) 100%);",
        "footer-gradient": "linear-gradient(180deg, #C2C3CC 0%, #FFF 100%);",
        "hero-gradient": "linear-gradient(0deg, #C2C3CC 0%, #E7E8ED 100%);",
        "project-gradient":
          "linear-gradient(180deg, #C2C3CC 0%, #BDFF30 100%);",

        intro: "url('/assets/main/bg.svg')",
        "gradient-test": "linear-gradient(180deg, #14121B 0%, #0C0A12 100%)",

        "project-preview-01": "url('/assets/projects/potte.jpg')",
        "project-preview-02": "url('/assets/projects/nftoyer-01.jpg')",
        "project-preview-03": "url('/assets/projects/sflex-01.jpg')",
        "project-preview-04": "url('/assets/projects/mais-uma-01.jpg')",
        "project-preview-05": "url('/assets/projects/soon-03.jpg')",
        "project-preview-06": "url('/assets/projects/soon-02.jpg')",

        footer: "url('/assets/main/bg-footer.svg')",
      },
    },
  },
  plugins: [],
};
