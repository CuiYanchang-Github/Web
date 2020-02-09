const path = require("path");
module.exports={
    mode:'development',
    entry:{
        'index':'./src/index.js',
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        compress:true,
        port:'8081',
    }
}