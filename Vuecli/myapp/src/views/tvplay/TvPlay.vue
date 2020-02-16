<template>
  <div>电视剧</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataList: []
    };
  },
  methods: {
    getData() {
      //跨域
      //浏览器通源策略 
      let requestUrl =
        "https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start=0&count=18";
      let birdUrl = "https://bird.ioliu.cn/v2?url="
      axios
        .get(birdUrl+requestUrl)
        .then(function(res) {
          console.log(res);
        })
        .catch(function() {
          console.log("error");
        });
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getData()
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>