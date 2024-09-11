// Create web server
// Create a web server that listens on port 3000. When you visit the root URL, it should return a list of comments in JSON format. You can use the comments variable below as your data source.

var http = require('http');
var comments = require('./comments');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(comments));
}).listen(3000, '

