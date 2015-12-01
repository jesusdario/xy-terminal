#!/usr/bin/env node

var tty = require('tty.js')
var argv = require('minimist')(process.argv.slice(2)) // must-have package

// Netbeast apps need to accept the port to be launched by parameters
var port = argv.port

var app = tty.createServer({
  shell: 'bash',
  port: port || 31416,
  static: './assets'
})

app.listen()
