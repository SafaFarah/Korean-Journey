module.exports = {
    mode: "jit",
    content: [
      "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
      "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    ],
    darkMode: "class",
    theme: {
      screens: { md: { max: "1050px" }, sm: { max: "550px" } },
      extend: {
        colors: {
          black: {
            900: "var(--black_900)",
            "900_3f": "var(--black_900_3f)",
          },
          blue: {
            300: "var(--blue_300)",
            400: "var(--blue_400)",
            "900_01": "var(--blue_900_01)",
            900: "var(--blue_900)",
            "900_8c": "var(--blue_900_8c)",
          },
          blue_gray: {
            100: "var(--blue_gray_100)",
            "100_19": "var(--blue_gray_100_19)",
            "100_b2": "var(--blue_gray_100_b2)",
          },
          gray: {
            600: "var(--gray_600)",
            800: "var(--gray_800)",
          },
          indigo: { 700: "var(--indigo_700)" },
          light_blue: { 400: "var(--light_blue_400)" },
          pink: { 600: "var(--pink_600)" },
          red: {
            700: "var(--red_700)",
            "700_01": "var(--red_700_01)",
          },
          white: {
            a700: "var(--white_a700)",
            a700_01: "var(--white_a700_01)",
            a700_7f: "var(--white_a700_7f)",
          },
        },
        boxShadow: { xs: "0 4px 4px 0 #0000003f" },
        fontFamily: {
          inter: "Inter",
          lemon: "Lemon",
          mogra: "Mogra",
          libreBaskerville: "Libre Baskerville",
          instrumentSans: "Instrument Sans",
        },
        backgroundImage: {
          gradient1: "linear-gradient(90deg, #dc355f, #0047ab)",
          gradient2: "linear-gradient(270deg, #d52b1e, #dc2d23)",
          gradient3: "linear-gradient(0deg, #dc2d23, #0047ab)",
          gradient4: "linear-gradient(to right, #00338c, #0033a0)",
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };
  