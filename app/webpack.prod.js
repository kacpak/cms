const common = require('./webpack.common.js');

/**
 * Webpack plugins
 */
const autoprefixer = require('autoprefixer');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');

/**
 * Constants
 */
const environment = {
  ENV: 'production',
  HMR: false
};
const autoprefixerOptions = {
  browsers: [
    '> 1%'
  ]
};

/**
 * Webpack configuration
 */
module.exports = common.getConfiguration({
  debug: false,
  output: {
    filename: 'app/[name].[hash].js',
    assetFilename: '[name].[hash].[ext]',
    styleFilename: '[name].[hash].css'
  },
  plugins: [
    new WebpackMd5Hash(),
    new DedupePlugin(),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  postcss: function () {
    return [autoprefixer(autoprefixerOptions)]
  },
  htmlLoader: {
    minimize: true,
    removeAttributeQuotes: false,
    caseSensitive: true,
    customAttrSurround: [
      [/#/, /(?:)/],
      [/\*/, /(?:)/],
      [/\[?\(?/, /(?:)/]
    ],
    customAttrAssign: [/\)?\]?=/]
  }
}, environment);
