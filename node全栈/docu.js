//node 历史

//矮  射  佛(4个音 一个字)  说文解字  旦

1、原生JS 兼容性(IE 5~8)
2、JQuery Bootstrap --封装组件 兼容性 ----里程碑1
3、JS加载 <script src="1.js"></script>
1.html <script src="1.js"></script> <script src="2.js"></script>
var a=123;
console.log(a);  vue 封装组件 --全局污染 private public
ES5 全继承模式  圣杯模式

html标签 src  跨域 iframe href

4、requireJS  ---模块封装  ---里程碑2  CMD AMD  seajs
	//模块定义 相应模块公布给外部
    define(function(require,exports,module){

    	module.exports=模块名1
    })
    //require进行模块加载  require/import
    require([‘模块名1’],function(){})

    index.html  <script src="js/require.js" data-main="js/index"></script>

requireJS--->入口JS--->require()



5、commonJS---require exports module.exports
6、nodejs ---服务器程序 中间层 处理后端代码

nodejs应用方向: 内部业务 中间层服务器(业务拟合、登录服务器)
1、解决高并发  php java(多进程)  node(单进程---异步回调)
             同步会产生阻塞  异步---js事件循环  Event I/O
             addEventListener emit
2、新老业务对接  携程网 

3、所有的后端应用 ---node 








