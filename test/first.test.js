'use strict'

var path = require('path')
var spawn = require('child_process').spawn
var test = require('tap').test
var pump = require('pump')
var writeStream = require('flush-write-stream')

test('transport parses JSON', function (t) {
  t.plan(2)
  var output = []
  var child = spawn(process.execPath, [path.join(__dirname, 'fixtures', 'echo.js')])
  var transport = spawn(process.execPath, [path.join(__dirname, '..', 'index.js')])
  var captureStream = writeStream(function (chunk, enc, cb) {
    output.push(chunk.toString())
    child.kill()
    cb()
  })

  pump(child.stdout, transport.stdin, function (err) {
    if (err) return t.threw(err)
  })
  pump(transport.stdout, captureStream, function (err) {
    if (err) return t.threw(err)
    t.is(output.length > 0, true)
    t.is(output[0], 'bar\n')
  })
})
