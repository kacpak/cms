const webpack = require('webpack');

/**
 * Webpack plugins
 */
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NoErrorsPlugin = require('webpack/lib/NoErrorsPlugin');
const OccurrenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const extractCSS = new ExtractTextPlugin('styles/[name].[hash].css');

/*
 * Webpack Constants
 */
const METADATA = {
  baseUrl: '/'
};

/**
 * Webpack configuration
 */
module.exports = {
  metadata: METADATA,
  output: {
    path: './dist'
  },
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
    root: './src',
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader']},
      {test: /\.html$/, loader: 'html'},
      {test: /\.css$/, loader: extractCSS.extract(['css?sourceMap'])},
      {test: /\.scss$/, loader: extractCSS.extract(['css?sourceMap', 'sass?sourceMap'])},
      {test: /\.(eot|woff2?|ttf|svg)$/, loader: 'file?name=fonts/[name].[ext]'}
    ]
  },
  plugins: [
    new NoErrorsPlugin(),
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new ForkCheckerPlugin(),
    new OccurrenceOrderPlugin(true),
    new CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),
    extractCSS
  ],
  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
