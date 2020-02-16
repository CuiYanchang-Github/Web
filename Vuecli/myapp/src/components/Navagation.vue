<template>
  <div v-bind:class="['container',activeType.name]">
    <header>
      <span>首页</span>
      <p>{{activeType.title}}</p>
    </header>
    <nav>
      <ul>
        <li v-for="item in navList" v-bind:key="item.id" @click="goPage(item)">{{item.title}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeType: {
        id: 1001,
        title: "剧集",
        path: "/",
        name: "tv-play"
      },
      navList: [
        {
          id: 1001,
          title: "剧集",
          path: "/",
          name: "tv-play"
        },
        {
          id: 1002,
          title: "音乐",
          path: "/music",
          name: "music"
        },
        {
          id: 1003,
          title: "书籍",
          path: "/book",
          name: "book"
        },
        {
          id: 1004,
          title: "聊天",
          path: "/talk",
          name: "talk"
        }
      ]
    };
  },
  methods: {
    goPage(item) {
      if (this.activeType.name != item.name) {//判断要跳转的页面是不是当前页面
        this.$router.push(item.path);//编程式导航 跳转到path路径
        sessionStorage.setItem("activeNav", JSON.stringify(item));
        //数据持久化 利用sessionStorage将数值存储在本地 通过JSON.stringify转为字符串
        this.activeType = item;
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    let activeNav = sessionStorage.getItem("activeNav");//sessionStorage在浏览器会话开始的时候存储数据
    this.activeType = activeNav ? JSON.parse(activeNav) : this.navList[0];
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
header,
nav {
  height: 1rem;
  color: #333;
  position: fixed;
  width: 100%;
  left: 0;
}
header {
  top: 0;
}
nav {
  bottom: 0;
}
nav ul {
  display: flex;
  align-items: center;
  height: 1rem;
}
nav li {
  font-size: 0.5rem;
  flex-grow: 1;
  text-align: center;
}
header span {
  font-size: 0.3rem;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
header p {
  font-size: 0.7rem;
  text-align: center;
}

.tv-play header,
.tv-play nav {
  background-color: rgb(33, 150, 243);
}
.music header,
.music nav {
  background-color: rgb(0, 150, 136);
}
.book header,
.book nav {
  background-color: rgb(121, 85, 72);
}
.talk header,
.talk nav {
  background-color: rgb(63, 81, 181);
}
</style>