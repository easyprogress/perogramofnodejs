/*  SERVER
var http=require('http')
var server=http.createServer()
server.listen(5000,console.log("helo sever is running"))
*/




/* server with http*/
/*var http=require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':"application/json"})
    res.write('{"name":"neha g"}')
    res.write("hello")
    res.end()

}).listen(5000)
*/
 // SERVER WITH HTML 
 var http=require('http')
 var page='<input type="text"/><br></br><input type="text"/>'
                              
 http.createServer(function(req,res){
     res.writeHead(200,{'Content-Type':"text/html"})
     res.write(page)
     res.end()
 
 }).listen(7000)
 
 
