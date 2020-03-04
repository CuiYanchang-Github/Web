var firecount=0;
var start=new Date();

//function  有return叫函数 没有return叫过程

var timer=setInterval(function(){
	if(new Date-start>1000){
		clearInterval(timer);
		console.log(firecount);
		return
	}

	firecount++;
},0);

//CPU时钟中断 
//延时方法  setTimeout setInterval process.nextTick() requestAniamtionFrame