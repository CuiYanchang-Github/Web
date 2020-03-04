var fs=require("fs");


//1、接收输入端口的
var argv=process.argv;

//console.log(argv);
var port=argv[2];

//2、把接收到的端口写入port.txt;
//A机器 processA  processB  LPC
//A机器 processA B机器 processB  RPC
fs.writeFile('port.txt',port,function(err){
	if(err){
		console.log(err);
	}else{
		console.log("success");
	}
})


//node模块  原生模块  第三方模块  自定义模块
//原生模块  自动加载模块  Buffer、console、global、module、process、timer
//手动加载模块