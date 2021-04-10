module.exports = {
  mode: 'jit',
  purge: ['index.html', './scripts/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          forecast: () => {
            return `rgb(var(--color-forecast))`
          }
        },
      },
      gradientColorStops: {
        skin: {
          start: 'var(--color-fill)',
          middle: 'var(--color-via)',
          end: 'var(--color-to)'
        }
      },
      backgroundColor: {
        skin: {
          forecast: ({ opacityValue }) => {
            if (opacityValue != undefined) {
              return `rgba(var(--color-forecast), ${opacityValue})`
            }
            return `rgb(var(--color-forecast))`
          },
          divider: 'var(--color-text-base)'
        }
      },
      fontFamily: {
        'merriweather': ['Merriweather, serif'],
        'merriweather-sans': ['Merriweather Sans, sans-serif'],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}