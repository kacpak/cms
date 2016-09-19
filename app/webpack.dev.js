const common = require('./webpack.common.js');

module.exports = common.getConfiguration({
  output: {
    publicPath: '/',
    filename: 'app/[name].js',
    chunkFilename: 'app/[id].chunk.js'
  },
  devtool: '#cheap-module-eval-source-map'
});
