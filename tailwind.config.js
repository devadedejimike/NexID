/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // make sure these match your files
  ],
  theme: {
    extend: {
      colors: {
        // use kebab-case keys to avoid confusion with class names
        "brand-primary": "#E11D48",
        "brand-primary-dark": "#BE123C",
        "brand-accent": "#F43F5E",
        "brand-text": "#111827",
        "brand-text-muted": "#6B7280",
        "brand-bg": "#F9FAFB",
        "brand-bg-soft": "#F3F4F6",
        "brand-border": "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
    },
  },
  plugins: [],
};
