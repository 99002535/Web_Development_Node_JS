var http = require ('http');
var server=http.createServer(function(req,res){
 res.write("have a great Day");
 console.log('request url '+req.url);
 res.end();
 console.log('This will be printed last');
})
server.listen('3000');
console.log('This will be printed first');
console.log('Server running in port 3000');