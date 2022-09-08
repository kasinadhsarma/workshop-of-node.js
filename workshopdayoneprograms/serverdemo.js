var http = require ('http');
//giving local host to the server with the helloworld output giving in browser with function decleration>
http.createServer(function(req,res){
res.writeHead (200,{'Content-Type':'text/html'});
res.end("Welcome to What's App Bros</br>*kasi </br>*Ajay</br>*ram ");
}).listen(3000);
console.log("server is listening on http://127.0.0.1:3000");


