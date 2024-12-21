import type { Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "biz-udgothic": ["BIZ UDGothic", "sans-serif"],
    },
  },
} satisfies Config;
