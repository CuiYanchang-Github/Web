require(['./leaf'],function(Leaf){
    //相当于类传进来
    var oContainer = document.getElementById('container');
    var winWidth = document.documentElement.clientWidth;
    //给leaf.js传递实例化的参数
    //实例化的叶子 四个 每个都不一样 叶子样子不同、定位不同、下落速度不同
    //宽度 left距离 div Object
    for(var i=0;i<4;i++){
        //生成叶子的宽度
        var iWidth = 50 + parseInt(Math.random()*51);
        var leaf = new Leaf({
            width:iWidth,
            left:parseInt(Math.random()*(winWidth - iWidth)),
            container:oContainer,
        });
        leaf.fall();
    }
   
})