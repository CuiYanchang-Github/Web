<template>
  <div>
    <h1>我的测试页面！</h1>
    <p class="active">{{str}}</p>
    <TestPage :ourName.sync="str" @changename="changeParnetName"></TestPage>
  </div>
</template>
<script>
import TestPage from '../components/Test'
export default {
  components:{
    TestPage,
  },
  beforeRouteEnter (to, from, next) {//在路由进入前的钩子函数
    console.log(to,from);
    next();
  },
  beforeRouteLeave (to, from, next) {//在路由离开前的钩子函数
    console.log(to,from);
    next();
  },
  data() {
    return {
      str:"cyc vue-cli test one "
    }
  },
  methods: {
    changeParnetName(newName){
      console.log(newName);
      this.str = newName;
    }
  },
}
</script>

<style scoped>
/* scoped 表示只在当前文件生效 */
.active{
  color:red
}
</style>