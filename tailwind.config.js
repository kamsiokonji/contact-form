/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    fontFamily: {
      karla: ["Karla", "sans-serif"],
    },
    fontSize: {
      label: "16px",
    },
    colors: {
      primary: "#dff1e7",
      secondary: "#0c7d69",
      tertiary: "#87a3a6",
      error: "#d94545",
      complementary: "#063f36",
      grey: "#2b4246",
    },
    screens: {
      sm: "320px",
      md: "750px",
      lg: "1024px",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};
export const plugins = [require("tailwindcss-animate")];
