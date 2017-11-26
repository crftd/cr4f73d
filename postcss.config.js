module.exports = {
  plugins: [
    require('postcss-import')({
      root: './',
    }),
    require('lost'),
    require('postcss-inline-svg')({
      removeFill: true,
    }),
    require('postcss-assets')({
      cachebuster: true,
    }),
    require('postcss-short'),
    require('precss'),
    require('postcss-simple-vars'),
    require('postcss-clearfix'),
    require('postcss-cssnext')({}),
    require('postcss-font-magician')({
      custom: {
        Gilroy: {
          variants: {
            normal: {
              400: {
                url: { woff: '../assets/fonts/Gilroy-Regular.woff' },
              },
              500: {
                url: { woff: '../assets/fonts/Gilroy-Medium.woff' },
              },
            },
            bold: {
              700: {
                url: { woff: '../assets/fonts/Gilroy-Semibold.woff' },
              },
              900: {
                url: { woff: '../assets/fonts/Gilroy-Bold.woff' },
              },
            },
          },
        },
      },
      variants: {
        'Crimson Text': {
          100: [],
          300: [],
          400: [],
          500: [],
          700: [],
          900: [],
        },
      },
      foundries: ['google', 'custom'],
    }),
  ],
};
