//引入并初始化router
const Router = require('koa-router');
let router = new Router();

//处理 登录请求 (user/login)
router.post("/login", async (ctx, next) => {
  //ctx.request.body 前端请求参数(post)
  console.log(ctx.request.body)
      //向前端登录请求返回结果
      ctx.body = {
          code: 20000,//状态码20000必填表示请求成功
          data: {//data 返回前端结果
              token: 'admin-token'
            }
      }
}),
//处理 获取用户信息 (user/info)
router.get("/info", async (ctx, next) => {
  console.log(ctx.query)
      ctx.body = {
          code: 20000,
          data: {
              roles: ['admin'],
              introduction: 'I am a super administrator',
              avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
              name: 'Konrad-Test'
            }
      }
})

module.exports = router;