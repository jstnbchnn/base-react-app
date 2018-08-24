var productionConfig = require('./webpack/production.config')

module.exports = require(`./webpack/${process.env.NODE_ENV}.config.js`);