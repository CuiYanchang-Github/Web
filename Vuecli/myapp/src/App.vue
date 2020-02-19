<template>
  <div id="app">
    <div id="nav">
      <!-- <Navagation></Navagation> -->
      <Navagation />
    </div>
    <router-view />
  </div>
</template>
<script>
import Navagation from "@/components/Navagation.vue";
export default {
  components: {
    Navagation
  }
};
</script>
<style>
* { 
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
body {
  padding: 1rem 0;
}
.clearfix::after {
  content: "";
  /* 内容为空 */
  display: block;
  /* 转换成块元素 */
  clear: both;
}
</style>