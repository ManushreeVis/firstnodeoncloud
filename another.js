var http = require('http');

http
  .createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    response.write('The current date and time is : ' + Date());
    response.end();
  })
  .listen();
