require('http').createServer(function (request, response) {
    
    if(process.env.REDIRECT_ALL)
      var newLocation = process.env.REDIRECT_TO + request.url;
    else
      var newLocation = process.env.REDIRECT_TO;
    
    response.writeHead(301, {"Location":  + newLocation});
    response.end();
}).listen(80);