var http=require("http");
var fs=require("fs");

var port=fs.readFileSync("./port.txt","utf-8");

http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html"});
	res.end("<h1>hello xiuling</h1>");
}).listen(port);


console.log(`server start port ${port}`);


//try catch 捕获异常 同步异常  domain
/*
try{
	setTimeout(function(){},0);
}catch(e){
	console.log(e);
}*/

//node如何接收输入参数

//server---client  数据包=包头+包体   http协议规定好的
//statuscode  200 301 302 304 307 404 500 503 502
//req--- request   res---response

//三码一致   文件编码  浏览器解码  数据库编码
//  ansi  unicode  utf-8  中文浏览器 gbk gb2312 gb18030 utf-8  utf-8

//A---B string char file  mp3 mp4

//mime  409种  text/html  text/css application/json

//如何把str转变成json


//var str="{'name':'xuejiao','age':18}";

		//var strobj=eval("("+str+")");

		//alert(typeof(strobj));












