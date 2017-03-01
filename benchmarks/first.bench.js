'use strict'

var input = JSON.parse('{"pid":94473,"hostname":"MacBook-Pro-3.home","level":30,"msg":"hello baby..","time":1459529098962,"another":"property","a":"property","v":1}')
var transport = require('../index').internals.transport

var fastbench = require('fastbench')
var run = fastbench([
  function firstBench (benchCB) {
    transport(input, null, benchCB)
  }
], 1000)

run()
