var app = require('./app');
var http = require('http');

http.createServer(app).listen('5454'), function() {
  console.log('Express server listening on port 5454');
}