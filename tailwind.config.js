/** @type {import('tailwindcss').Config} */
export default {
  content: ['/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'urbanist-black': ['Urbanist-Black', 'sans-serif'],
        'urbanist-black-italic': ['Urbanist-BlackItalic', 'sans-serif'],
        'urbanist-bold': ['Urbanist-Bold', 'sans-serif'],
        'urbanist-bold-italic': ['Urbanist-BoldItalic', 'sans-serif'],
        'urbanist-extra-bold': ['Urbanist-ExtraBold', 'sans-serif'],
        'urbanist-extra-bold-italic': [
          'Urbanist-ExtraBoldItalic',
          'sans-serif',
        ],
        'urbanist-extra-light': ['Urbanist-ExtraLight', 'sans-serif'],
        'urbanist-extra-light-italic': [
          'Urbanist-ExtraLightItalic',
          'sans-serif',
        ],
        'urbanist-italic': ['Urbanist-Italic', 'sans-serif'],
        'urbanist-light': ['Urbanist-Light', 'sans-serif'],
        'urbanist-light-italic': ['Urbanist-LightItalic', 'sans-serif'],
        'urbanist-medium': ['Urbanist-Medium', 'sans-serif'],
        'urbanist-medium-italic': ['Urbanist-MediumItalic', 'sans-serif'],
        'urbanist-regular': ['Urbanist-Regular', 'sans-serif'],
        'urbanist-semi-bold': ['Urbanist-SemiBold', 'sans-serif'],
        'urbanist-semi-bold-italic': ['Urbanist-SemiBoldItalic', 'sans-serif'],
        'urbanist-thin': ['Urbanist-Thin', 'sans-serif'],
        'urbanist-thin-italic': ['Urbanist-ThinItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
