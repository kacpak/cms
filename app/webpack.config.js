var argv = require('yargs').argv;

if (!process.env.ENV) {
  process.env.ENV = argv.dev ? 'development' : 'production';
}

switch (process.env.ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./webpack.prod');
    break;
  case 'test':
  case 'testing':
    module.exports = require('./webpack.test');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./webpack.dev');
}
