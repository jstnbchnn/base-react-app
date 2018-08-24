var baseConfig = require('./base.config');


productionConfig = {
  mode: 'production'
}

module.exports = Object.assign(baseConfig, productionConfig)