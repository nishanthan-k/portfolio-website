/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        textColor: {
          DEFAULT: "var(--textColor)",
        },
        bgColor: {
          DEFAULT: "var(--bgColor)",
        },
        buttonColor: {
          DEFAULT: "var(--buttonColor)",
        },
        iconColor: {
          DEFAULT: "var(--iconColor)",
        },
      },
    },
  },
  plugins: [
    ('flowbite/plugin'),
    ('prettier-plugin-tailwindcss'),
  ],
};
