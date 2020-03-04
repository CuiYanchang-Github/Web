//setTImeout 异步变成同步  普通模型

for(var i=0;i<10;i++){

	var m=i;
	//同步代码  定义同步方法
	exec(m,function(m){
		console.log(m);
	})

}

function exec(param,callback){
	//callback 一定是异步的吗?
	setTimeout(function(){
		callback(param);
	},0)
}

console.log("end");

//事件队列 异步触发 ---触发条件 (时间I/O,磁盘I/O,网络I/O)---自定义事件---events

