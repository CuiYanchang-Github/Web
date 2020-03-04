//读file.txt 停2S再结束
var fs=require("fs");

fs.readFile("./file.txt","utf-8",function(err,data){
	if(err){
		console.log(err);
	}else{
		getData(data);
	}
})


function getData(data){
	setTimeout(function(){
		console.log(data);
	},2000);
}