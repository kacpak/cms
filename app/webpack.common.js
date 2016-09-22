const webpack = require('webpack');
const merge = require('webpack-merge');

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
const config = require('./config');

/**
 * Application data
 */
const defaultEnvironment = {
  baseUrl: '/',
  host: 'localhost',
  port: 3000,
  ENV: 'development',
  HMR: true
};

/**
 * Webpack configuration
 */
module.exports.getConfiguration = function (configuration, data) {
  const env = merge(defaultEnvironment, data, config);

  return merge.smart({
      output: {
        path: './dist',
        publicPath: '/',
        sourceMapFilename: '[file].map'
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
          {test: /\.css$/, loader: ExtractTextPlugin.extract(['css?sourceMap', 'postcss?sourceMap'])},
          {test: /\.scss$/, loader: ExtractTextPlugin.extract(['css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap'])},
          {test: /\.(eot|woff2?|ttf|svg|png|jpe?g|gif|ico)$/, loader: `file?name=${configuration.output.assetsName}`}
        ]
      },
      plugins: [
        new NoErrorsPlugin(),
        new ProvidePlugin({
          $: 'jquery',
          jquery: 'jquery',
          jQuery: 'jquery'
        }),
        new ForkCheckerPlugin(),
        new OccurrenceOrderPlugin(true),
        new CommonsChunkPlugin({
          name: ['app', 'vendor', 'polyfills']
        }),
        new DefinePlugin({
          'process.env': {
            'data': JSON.stringify(env),
            'ENV': JSON.stringify(env.ENV)
          }
        }),
        new HtmlWebpackPlugin({
          template: 'src/index.html',
          chunksSortMode: 'dependency'
        }),
        new ExtractTextPlugin(configuration.output.extractedStylesName)
      ],
      devServer: {
        port: env.port,
        host: env.host,
        historyApiFallback: true,
        watchOptions: {
          aggregateTimeout: 300,
          poll: 1000
        },
        outputPath: './dist'
      }
    }, configuration);
};
