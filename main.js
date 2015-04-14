#!/usr/bin/env node

var tty = require('tty.js');
var argv = require('minimist')(process.argv.slice(2)); // must-have package

/* xyos apps need to accept the port to be launched by parameters */
port = argv.port;

if(isNaN(port)) {
	console.log("Port \"" + port + "\" is not a number.");
	process.kill(1);
} else {
	console.log("Listening on port " + port);
}


var app = tty.createServer({
  shell: 'bash',
  port: port
});

app.listen();