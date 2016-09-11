const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

/**
 * Webpack plugins
 */
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NoErrorsPlugin = require('webpack/lib/NoErrorsPlugin');
const OccurrenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const extractCSS = new ExtractTextPlugin('styles/[name].[hash].css');
const config = require('./config');

/*
 * Webpack Constants
 */
const environment = webpackMerge({
  baseUrl: '/',
  host: 'localhost',
  port: 3000,
  ENV: 'development',
  HMR: true
}, config);

/**
 * Webpack configuration
 */
module.exports = {
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
      {test: /\.css$/, loader: extractCSS.extract(['css?sourceMap', 'postcss?sourceMap'])},
      {test: /\.scss$/, loader: extractCSS.extract(['css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap'])},
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
    new DefinePlugin({
      'process.env': {
        'data': JSON.stringify(environment),
        'ENV': JSON.stringify(environment.ENV),
        'NODE_ENV': JSON.stringify(environment.ENV),
        'HMR': environment.HMR
      }
    }),
    extractCSS
  ],
  devServer: {
    port: environment.port,
    host: environment.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: './dist'
  }
};
