/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sep: ['Tulpen One', 'cursive'],
        para: ['Oswald', 'sans-serif'],
        pop: ['Poppins', 'sans-serif'],
        prad: ['Zilla Slab', 'serif'],
        dir: ['PT Serif', 'serif'],
        mi: ['Righteous', 'cursive'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite', // Corrected keyframes name
      },
      keyframes: { // Corrected typo from keframes to keyframes
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
};
