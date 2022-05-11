module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      grayscale: {
        50: '50%',
      },
      gridTemplateRows:{
        '7':'repeat(7, minmax(0, 1fr))'
      },
      transitionDelay: {
        '0': '0ms',
        '225': '225ms',
        '375':'375ms'
      },
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
      },
      keyframes: {
        bouncex: {
          '0%':{
            'transform': 'translateX(15%)',
          },
         '50%':{
            'transform': 'translateX(0)',
          },
          '100%':{
            'transform': 'translateX(15%)',
          },
        },
        slide:{
          '0%':{
            'width':'0px'
          },
          '50%':{
            'width':'100%'
          },
          '100%':{
            'width':'0px'
          },
        },
        rotate:{
          '0%':{
            'transform':'rotate(0deg)'
          },
          '50%':{
            'transform':'rotate(180deg)'
          },
          '100%':{
            'transform':'rotate(360deg)'
          },
        }
      },
      animation: {
        bouncex: 'bouncex 1.75s ease-in-out infinite',
        slidex: 'slide 5s ease-in-out infinite',
        rotate: 'rotate 3s linear infinite'
      },
      minHeight: {
        inherit: "inherit"
      }
    },
  },
  plugins: [],
}
