import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        BWhite: "#221510",
        TextColor: "#E0DFDB",
        BtnColor: "#130a0b",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
