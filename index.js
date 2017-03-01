'use strict'

var split = require('split2')
var pump = require('pump')
var through = require('through2')

var internals = {
  transport: function (chunk, enc, cb) {
    // do whatever you want here!
    var keys = Object.keys(chunk)
    console.log(chunk[keys[0]])
    cb()
  }
}

if (require.main === module) {
  var myTransport = through.obj(internals.transport)
  pump(process.stdin, split(JSON.parse), myTransport)
}

module.exports.internals = internals
