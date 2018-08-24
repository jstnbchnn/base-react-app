var path = require('path');

var baseConfig = require('./base.config');

developmentConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
};

module.exports = Object.assign(baseConfig, developmentConfig);