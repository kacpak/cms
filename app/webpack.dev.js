const common = require('./webpack.common.js');

module.exports = common.getConfiguration({
  output: {
    filename: 'app/[name].js',
    assetsName: 'assets/[name].[ext]',
    extractedStylesName: 'styles/[name].css'
  },
  devtool: '#cheap-module-eval-source-map'
});
