var http=require("http");
var express=require("express");
var ejs=require("ejs");
var fs=require("fs");

var app=express();

app.use(express.static(__dirname));

app.use("/list", function(request,response){
	fs.readFile("list.ejs","utf-8",function(error,data){
		if(error){
			console.log("읽기실패",error);
		}
		response.writeHead(200,{"Content-Type":"text/html"});
		response.end(ejs.render(data));
	});
});

var server=http.createServer(app);

server.listen(8888, function(){
	console.log("웹서버 가동중...");
}); //서버가동

