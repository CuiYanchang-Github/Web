define(function(require,exports,module) {
    function Leaf(options){
        //叶子的宽
        this.width = options.width;
        //居左的距离
        this.left = options.left;
        //创建叶子图片
        this.oImg = new Image();
        this.oImg.src = 'img/' + (parseInt(Math.random()*4)+1) + '.png';
        this.oImg.width = this.width;
        this.oImg.style.left = this.left + 'px';
        //将叶子图片插入到DOM中
        options.container.appendChild(this.oImg);
        // this.fall = function(){}
    }    
    Leaf.prototype.fall = function(){
    //top值不断改变 setInterval
    //如果this.fall 把类下所有的成员属性和成员方法全copy-->实例化对象 浪费空间
    //原型链的方式随用 不用浪费空间
        var _this = this;
        setInterval(function(){
            _this.oImg.style.top = _this.oImg.offsetTop + 5 + 'px';
        },Math.random()*200)
    }
    module.exports = Leaf;
});