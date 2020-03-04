setTimeout(function(){
	console.log(123);
},1);


setTimeout(function(){
	console.log(567);
},0);

//chrome源代码 setTimeout  0==1
// 队列  先进先出
// 堆栈  先进后出