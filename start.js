#!/usr/bin/env node
var express = require('express'),
    app = express.createServer(),
    
    port = process.env.PORT || 5000,  // c9&heroku use PORT
    host = process.env.IP || '0.0.0.0'; // c9 uses IP, heroku uses 0.0.0.0
    
app.use(express.static(__dirname+'/app'));

app.listen(port, host);