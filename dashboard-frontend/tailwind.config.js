
/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  safelist: [

    {
      pattern: /(bg|text|border|from|to)-(.*)-([1-9]00)/,
      variants: ['hover', 'focus'],
    },

  ],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        IranYekan: ["Iranyekan", "sans-serif"],
      },
      // scrollbarGutter: {
      //   stable: 'stable',
      // },
    },
  },
  // plugins: [require("daisyui"),
  // function({ addUtilities }) {
  //   addUtilities({
  //     '.scrollbar-gutter-stable': {
  //       'scrollbar-gutter': 'stable',
  //     },
  //   });
  // },
  // ],
  // daisyui: {
  //   themes: ["light", "dark"],
  // },
};




