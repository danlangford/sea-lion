#!/usr/bin/env node
var httpServer = require('http-server');

var port = process.env.PORT || 5000,
    host = process.env.IP || '127.0.0.1';

(function listen(port) {
  var server = httpServer.createServer({
    root:'.'
  });

  server.listen(port, host, function() { });
})(port);

