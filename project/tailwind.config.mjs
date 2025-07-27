/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Erfasst ALLE Dateien im src-Ordner, egal in welchem Unterordner sie liegen
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        Blue: 'hsl(237, 18%, 59%)',
        Red: 'hsl(345, 95%, 68%)',

        // Neutral
        White: 'hsl(0, 0%, 100%)',
        DarkBlue: 'hsl(236, 21%, 26%)',
        VeryDarkBlue: 'hsl(235, 16%, 14%)',
        BlackBlue: 'hsl(234, 17%, 12%)',
      },
      fontFamily: {
        Redhat: ['"Red Hat Text"', 'sans-serif'],
      },
      fontSize: {
        Static: '14px', // benutzerdefinierte Größe für Body Copy
      },
      padding: {},
    },
  },
  plugins: [],
};

export default config;
