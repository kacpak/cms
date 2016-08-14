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
const ENV = process.env.ENV = process.env.NODE_ENV = 'production';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const METADATA = webpackMerge(commonConfig.metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV,
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
module.exports = webpackMerge(commonConfig, {
  debug: false,
  devtool: 'source-map',
  metadata: METADATA,
  output: {
    publicPath: '/',
    filename: 'app/[name].[hash].js',
    chunkFilename: 'app/[id].[hash].chunk.js',
    sourceMapFilename: 'app/[name].[hash].map'
  },
  plugins: [
    new WebpackMd5Hash(),
    new DedupePlugin(),
    new UglifyJsPlugin(),
    new DefinePlugin({
      'ENV': JSON.stringify(METADATA.ENV),
      'HMR': METADATA.HMR,
      'process.env': {
        'ENV': JSON.stringify(METADATA.ENV),
        'NODE_ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR
      }
    })
  ],
  postcss: function () {
    return [autoprefixer(autoprefixerOptions)]
  },
  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: './dist'
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
