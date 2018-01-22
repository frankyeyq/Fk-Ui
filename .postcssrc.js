// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
      require('postcss-partial-import'),
      require('postcss-url'),
      require('saladcss-bem')({
          defaultNamespace: 'mo',
          separators: {
              descendent: '__'
          },
          shortcuts: {
              modifier: 'm',
              descendent: 'd',
              component: 'c'
          }
      }),
      require('precss'),
      require('postcss-utils'),
      require('postcss-css-reset'),
      require('postcss-shape'),
      require('postcss-nested'),
      require('postcss-calc'),
      require('postcss-sass-color-functions'),
      require('autoprefixer')
  ]
}
