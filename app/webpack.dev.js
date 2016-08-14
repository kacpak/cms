const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

/**
 * Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const METADATA = webpackMerge(commonConfig.metadata, {
  host: 'localhost',
  port: 3000,
  ENV: ENV
});

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = webpackMerge(commonConfig, {
  metadata: METADATA,
  output: {
    publicPath: '/',
    filename: 'app/[name].js',
    chunkFilename: 'app/[id].chunk.js',
    sourceMapFilename: 'app/[name].map'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
    aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: './dist'
  }
});
