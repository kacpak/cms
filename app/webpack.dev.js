const common = require('./webpack.common.js');

module.exports = common.getConfiguration({
  output: {
    filename: 'app/[name].js',
    assetFilename: '[name].[ext]',
    styleFilename: '[name].css'
  },
  devtool: '#source-map'
});
