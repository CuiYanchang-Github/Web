//console.log("hello world");

for(var i=0;i<5;i++){
	setTimeout(function(i){
		console.log(i);
	},0);
}

console.log("end");


// end 0 1 2 3 4    promise  async/await
// -----------------------------------------
// i=5
// function(i){
// 	console.log(i);
// }


//end 55555

//执行异步代码 满足2个条件  异步代码--->事件队列
//1、当前线程空闲---把当前堆栈中的同步代码执行完毕
//2、达到触发条件



//node js  supervisor  nodemon  pm2
//npm install supervisor -g
//cnpm install -g supervisor

//node -v  包管理系统npm  npm -v
//node版本 8 0.8--debug处理exception  domain
//更新node版本 n----可以自由切换node版本 
//cnpm install -g n 