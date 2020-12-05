/*
this is the primary file for the api


*/

//Dependencies

const http = require('http');
const url = require('url');

//the server should respond to all requests with a string

const server = http.createServer(function(req,res){
  // Get url and parse it
  const parsedUrl = url.parse(req.url,true);
  //get path from url
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g,'');

  //Get the query string as an object \

  const queryStringObject = parsedUrl.query;


  //Get the http method
  const method = req.method.toLowerCase()


  //send the response
    res.end('Hello world\n');
    //log the request path the user asked for
    console.log('Request received on this path:'+trimmedPath+' '+'with this method'+ ' ' + method + 'and with these queystring parameters' +' ', queryStringObject);
})


// start the server and shld have it listen to port 300

server.listen(3000, function(){
  console.log("the server is listerning on port 3000 now")
})