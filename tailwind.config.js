/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'Dark-Blue-Dark-Mode-Elements': 'hsl(209, 23%, 22%)',
      'Very-Dark-Blue-Dark-Mode-Background': 'hsl(207, 26%, 17%)',
      'Very-Dark-Blue-LightModeText': 'hsl(200, 15%, 8%)',
      'DarkGrayLightModeInput': 'hsl(0, 0%, 52%)',
     'VeryLightGrayLightModeBackground': 'hsl(0, 0%, 98%)',
      'WhiteDarkModeTextLightModeElements': 'hsl(0, 0%, 100%)'
    },
      fontFamily: {
      sans: [
        '"Nunito Sans", sans-serif',
      ]
      }

  },
  plugins: [],
}