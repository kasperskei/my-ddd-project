const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    postcssPresetEnv({
      features: {
        'nesting-rules': true,
        // 'logical-properties-and-values': true,
        // 'prefers-color-scheme-query': true,
        // 'gap-properties': true,
        // 'custom-properties': true,
        // 'place-properties': true,
        // 'not-pseudo-class': true,
        // 'focus-visible-pseudo-class': true,
        // 'focus-within-pseudo-class': true,
        // 'color-functional-notation': true,
      }
    }),
  ]
}
