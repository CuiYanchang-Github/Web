//引入并初始化router
const Router = require('koa-router');
let router = new Router();
const cloud = require('tcb-admin-node');
//使用小程序的数据库
const db = cloud.database();
const studentColl = db.collection("Konrad_Student")

router.get("/list",async (ctx,next)=>{
  console.log(ctx.query);//获取前端get请求参数
  let res = null;
  try {
    res = await studentColl.get()
  } catch (error) {
    console.log(error);
  }
  ctx.body = {
    code:20000,
    data:res
  }
})

router.post("/add",async (ctx,next)=>{
  console.log(ctx.request.body)//获取前端post请求参数
  let res = null;
  try {
    res = await studentColl.add({
        data:{
          ...ctx.request.body
        }
      })
    } catch(e) {
      console.error(e)
    }

  ctx.body={
      code:20000,
      data:res
  }
})

module.exports = router;
