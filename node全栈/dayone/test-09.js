var http=require("http");

urls=['www.qq.com','www.sohu.com','www.baidu.com']

//异步处理  同步处理
//发数据包 get请求  如何用node发送get请求

function fetchPage(url){
	var start=new Date();
	http.get({host:url},function(res){
		console.log("Got response from "+ url);
		console.log("Request Took:",(new Date()-start),'ms');
	})
}

for(var i=0;i<urls.length;i++){
	fetchPage(urls[i]);
}


//ipv4  ipv6
//node npm 包管理  npm install -g sass  node_modules
//node解决包版本冲突 jquery.min.js bootstrap  package.json
//bower yarn  npm install -g bower  bower install 
//ruby  gem install sass

//redhat rpm  gcc.rpm  centos rehl yum install
//debian apt-get install --ubuntu
//mac brew install
//win10  scope install 
















