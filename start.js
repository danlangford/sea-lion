#!/usr/bin/env node
var httpServer = require('http-server');

var port = process.env.PORT || 5000,  // c9&heroku use PORT
    host = process.env.IP || '0.0.0.0'; // c9 uses IP, heroku uses 0.0.0.0

(function listen(port) {
  var server = httpServer.createServer({
    root:process.env.PWD+'/public' // c9 & heroku both have a PWD
  });

  server.listen(port, host, function() { });
})(port);

