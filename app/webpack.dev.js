const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  output: {
    publicPath: '/',
    filename: 'app/[name].js',
    chunkFilename: 'app/[id].chunk.js',
    sourceMapFilename: 'app/[name].map'
  },
  devtool: 'cheap-module-source-map'
});
