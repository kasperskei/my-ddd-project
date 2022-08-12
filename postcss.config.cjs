const flexBugsFixes = require('postcss-flexbugs-fixes')
const momentumScrolling = require('postcss-momentum-scrolling')
const forPlugin = require('postcss-for')
const contrast = require('postcss-contrast')
// const avif = require('avif-in-css')
// const webp = require('webp-in-css')
const mediaMinMax = require('postcss-media-minmax')
const redundantColorVars = require('postcss-redundant-color-vars')
const willChange = require('postcss-will-change')
const viewportHeightCorrection = require('postcss-viewport-height-correction')
const conditionals = require('postcss-conditionals')
const colorHWB = require('postcss-color-hwb')
const nestedAncestors = require('postcss-nested-ancestors')
const nestedVars = require('postcss-nested-vars')
const presetEnv = require('postcss-preset-env')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    nestedVars(),
    nestedAncestors(),
    colorHWB(),
    conditionals(),
    viewportHeightCorrection(),
    willChange(),
    redundantColorVars(),
    mediaMinMax(),
    // webp(),
    // avif(),
    contrast(),
    forPlugin(),
    momentumScrolling([
      'hidden',
      'scroll',
      'auto',
      'inherit'
    ]),
    flexBugsFixes(),
    presetEnv({
      stage: 0,
      minimumVendorImplementations: 0,
    }),
    autoprefixer(),
  ]
}
