const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const formsPlugin = require('@tailwindcss/forms')
const aspectRatioPlugin = require('@tailwindcss/aspect-ratio')
const typographyPlugin = require('@tailwindcss/typography')
const lineClampPlugin = require('@tailwindcss/line-clamp')
const scrollbarPlugin = require('tailwind-scrollbar')

module.exports = {
  mode: 'jit',
  purge: ['./src/index.html', './src/**/*.{js,jsx,html}'],
  theme: {
    extend: {
      borderWidth: {
        3: '3px'
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10'
      },
      lineHeight: {
        6.5: '1.625rem'
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        13: '3.25rem',
        17: '4.25rem',
        17.5: '4.375rem',
        18: '4.5rem',
        25: '6.25rem',
        26: '6.5rem',
        30: '7.5rem',
        31: '7.75rem',
        46: '11.5rem',
        55: '13.75rem',
        76: '19rem',
        78: '19.5rem',
        81: '20.25rem'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        base: '.9375rem',
        13: '.8125rem',
        11: '0.6875rem',
        10: '0.625rem',
        9: '0.5625rem'
      },
      transitionDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        900: '900ms'
      },
      translate: {
        '1px': '1px'
      },
      scale: {
        80: '.80',
        85: '.85',
        101: '1.01',
        102: '1.02',
        103: '1.03',
        104: '1.04'
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing'
      },
      opacity: {
        33: '0.333',
        35: '0.35'
      },
      ringWidth: {
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px',
        9: '9px',
        10: '10px'
      },
      typography: theme => ({
        sm: {
          css: {
            fontSize: '.9375rem'
          }
        },
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.blue.400'),
              'text-decoration': 'none',
              'font-weight': 400,
              '&:hover': {
                'text-decoration': 'underline !important'
              }
            },
            strong: {
              color: theme('colors.gray.900')
            },
            'a > strong': {
              color: theme('colors.blue.400')
            },
            h2: {
              color: theme('colors.gray.900')
            },
            h3: {
              color: theme('colors.gray.900')
            },
            pre: {
              'background-color': theme('colors.gray.775'),
              border: '1px solid',
              'border-color': theme('colors.gray.825')
            },
            code: {
              'background-color': theme('colors.gray.775'),
              'border-radius': '.25rem',
              'padding-left': '0.25rem',
              'padding-right': '0.25rem',
              'padding-top': '0.25rem',
              'padding-bottom': '0.25rem',
              '&:before, &:after': {
                display: 'none'
              }
            },
            p: {
              color: theme('colors.gray.900')
            },
            'ul > li': {
              '&::before': {
                'background-color': theme('colors.gray.900'),
                'font-weight': 'bold'
              }
            },
            'ol > li': {
              '&::before': {
                color: theme('colors.gray.900'),
                'font-weight': 'bold'
              }
            }
          }
        },

        dark: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.blue.400'),
              'text-decoration': 'none'
            },
            strong: {
              color: theme('colors.gray.100')
            },
            'a > strong': {
              color: theme('colors.blue.400')
            },
            h2: {
              color: theme('colors.gray.100')
            },
            h3: {
              color: theme('colors.gray.100')
            },
            code: {
              color: theme('colors.gray.100'),
              '&:before, &:after': {
                display: 'none'
              }
            },
            p: {
              color: theme('colors.gray.100')
            },
            'ul > li': {
              '&::before': {
                'background-color': theme('colors.gray.100'),
                'font-weight': 'bold'
              }
            },
            'ol > li': {
              '&::before': {
                color: theme('colors.gray.100'),
                'font-weight': 'bold'
              }
            }
          }
        }
      })
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4F545F',
        650: '#454A56',
        700: '#3B404C',
        725: '#353A46',
        750: '#2F343F',
        775: '#292E38',
        800: '#232831',
        825: '#20242D',
        850: '#1C2029',
        900: '#151821',
        950: '#0B0C11'
      },
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald,
      indigo: colors.indigo,
      violet: colors.violet,
      teal: {
        50: "#F4FFFD",
        100: "#e6fffa",
        200: "#b2f5ea",
        300: "#81e6d9",
        400: "#4fd1c5",
        500: "#38b2ac",
        600: "#319795",
        700: "#2c7a7b",
        800: "#285e61",
        900: "#234e52",
      },
      blue: {
        100: "#ebf8ff",
        200: "#bee3f8",
        300: "#90cdf4",
        400: "#63b3ed",
        500: "#4299e1",
        600: "#3182ce",
        700: "#2b6cb0",
        800: "#2c5282",
        900: "#2a4365",
      },
      indigo: {
        50: "#F8FBFF",
        100: "#EBF4FF",
        200: "#C3DAFE",
        300: "#1FD6AA",
        400: "#A3BFFA",
        500: "#00843D",
        600: "#5A67D8",
        700: "#4C51BF",
        800: "#34399B",
        900: "#1E2156"
      },
      primary: {
        50: "#FAF5FF",
        100: "#F3E8FF",
        200: "#E9D8FD",
        300: "#D6BCFA",
        400: "#B794F4",
        500: "#9F7AEA",
        600: "#805AD5",
        700: "#6B46C1",
        800: "#553C9A",
        900: "#44337A"
      },
      pink: {
        50: "#FFF5F7",
        100: "#FFEBEF",
        200: "#FED7E2",
        300: "#FBB6CE",
        400: "#F687B3",
        500: "#ED64A6",
        600: "#D53F8C",
        700: "#B83280",
        800: "#97266D",
        900: "#702459"
      },
      gold: {
        100: "#C99700",
        200: "#AE9142"
      },
      ndblue: {
        100: "#0C2340"
      },
    },
    boxShadow: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.16)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.16)",
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
    spacing: {
      "9/16": "56.25%",
      "3/4": "75%",
      "1/1": "100%",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.625rem",
      "5xl": "3.25rem",
      "6xl": "5.5rem",
    },
    inset: {
      "1/2": "50%",
      full: "100%",
    },
    letterSpacing: {
      tighter: "-0.02em",
      tight: "-0.01em",
      normal: "0",
      wide: "0.01em",
      wider: "0.02em",
      widest: "0.4em",
    },
    lineHeight: {
      none: "1",
      tighter: "1.125",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.2rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    minWidth: {
      10: "2.5rem",
      48: "12rem",
    },
    opacity: {
      90: "0.9",
    },
    scale: {
      98: ".98",
    },
    animation: {
      float: "float 3s ease-in-out infinite",
    },
    keyframes: {
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-5%)" },
      },
    },
    customForms: (theme) => ({
      default: {
        "input, textarea, multiselect, select, checkbox, radio": {
          backgroundColor: theme("colors.white"),
          borderColor: theme("colors.gray.300"),
          borderRadius: theme("borderRadius.default"),
          "&:focus": {
            outline: undefined,
            boxShadow: undefined,
            borderColor: theme("colors.gray.500"),
          },
        },
        "input, textarea, multiselect, select": {
          backgroundColor: theme("colors.white"),
          fontSize: undefined,
          lineHeight: undefined,
          paddingTop: theme("spacing.3"),
          paddingRight: theme("spacing.4"),
          paddingBottom: theme("spacing.3"),
          paddingLeft: theme("spacing.4"),
        },
        "input, textarea": {
          "&::placeholder": {
            color: theme("colors.gray.500"),
          },
        },
        select: {
          paddingRight: theme("spacing.10"),
          iconColor: theme("colors.gray.400"),
        },
        "checkbox, radio": {
          color: theme("colors.gray.800"),
          backgroundColor: theme("colors.white"),
          borderRadius: theme("borderRadius.sm"),
        },
      },
    }),
  },
  variants: {
    extend: {
      typography: ['dark'],
      backgroundColor: ["responsive", "hover", "focus", "group-hover"],
      textColor: ["responsive", "hover", "focus", "group-hover"],
      translate: ["responsive", "hover", "focus", "group-hover"],
      boxShadow: ["responsive", "hover", "focus", "focus-within"],
      opacity: ["responsive", "hover", "focus", "group-hover"],
    },
    scrollbar: ['dark', 'rounded']
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    formsPlugin,
    aspectRatioPlugin,
    typographyPlugin,
    lineClampPlugin,
    scrollbarPlugin,
    plugin(function ({ addVariant, e }) {
      addVariant('electron', ({ modifySelectors, separator }) => {
        const modified = modifySelectors(({ className }) => {
          return `.${e(`electron${separator}${className}`)}`
        })

        modified.walkRules(rule => {
          rule.selectors = rule.selectors.map(selector => {
            return `.electron ${selector}`
          })
        })

        return modified
      })
    })
  ]
}
