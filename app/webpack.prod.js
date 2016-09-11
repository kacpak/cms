const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');

/**
 * Webpack plugins
 */
const autoprefixer = require('autoprefixer');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');

/**
 * Constants
 */
const environment = webpackMerge(commonConfig.environment, {
  ENV: 'production',
  HMR: false
});
const autoprefixerOptions = {
  browsers: [
    '> 1%'
  ]
};

/**
 * Webpack configuration
 */
module.exports = webpackMerge.smart(commonConfig, {
  debug: false,
  devtool: 'source-map',
  output: {
    publicPath: '/',
    filename: 'app/[name].[hash].js',
    chunkFilename: 'app/[id].[hash].chunk.js',
    sourceMapFilename: 'app/[name].[hash].map'
  },
  plugins: [
    new WebpackMd5Hash(),
    new DedupePlugin(),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new DefinePlugin(commonConfig.getDefineOptions(environment))
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
});
