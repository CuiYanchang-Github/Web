var start=new Date();
setTimeout(function(){
	var end=new Date();
	console.log("Time elapsed:",end-start,'ms');
},500);


while(new Date-start<1000){};


// 500  1000  1500   1001 1004 1007

//1000ms同步跑完 当前进程空闲
//js解释器 firefox chrome setTimeout 真正的定时 cpu的定时器