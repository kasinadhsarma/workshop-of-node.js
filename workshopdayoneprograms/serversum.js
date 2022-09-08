var http = require ('http');
var a = 10;
var b = 20;
var c = a + b;
var msg = "Sum is " + c;
if (c == 30){
        msg += "<br/> c is 30";
}else{
        msg += "<br/> c is not 30";
}
//giving local host to the server with the addition with if-else statement output giving in browser with>
http.createServer(function(req,res){
res.writeHead (200,{'Content-Type':'text/html'});
res.end(msg);
}).listen(3000);
console.log("server is listening on http://127.0.0.1:3000");

