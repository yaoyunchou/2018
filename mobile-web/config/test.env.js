'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

global.TICKET =  '"/fp/ticket"'

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  
})
