<template>
  <div class="container">
    <header>
      <span>首页</span>
      <p>剧集</p>
    </header>
    <nav>
      <ul>
        <li>剧集</li>
        <li>音乐</li>
        <li>书籍</li>
        <li>聊天</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
  header,nav{
    height: 1rem;
    background-color: rebeccapurple;
    color: white;
    position: fixed;
    width: 100%;
  } 
  header{
    top:0;
  }
  nav{
    bottom: 0;
  }
  nav ul{
    display: flex;
    align-items: center;
    height: 1rem;
  }
  nav li{
    font-size: 0.5rem;
    flex-grow: 1;
    text-align: center;
  }
  header span{
    font-size: 0.3rem;
    position: absolute;
    left:10px;
    top:50%;
    transform: translateY(-50%);
  }
  header p{
    font-size: 0.7rem;
    text-align: center;
  }
</style>