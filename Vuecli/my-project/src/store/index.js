import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const moduleA = {
  state:{
    username:'小明'
  }
}
export default new Vuex.Store({
  // 变量池
  state: {
    count:10
  },
  // 相当于 methods 用于写方法 同步修改
  mutations: {
    add(state){
      ++state.count;
    },
    reduce(state){
      --state.count;
    }
  },
  // 类似于 computed 计算(关联)属性 是方法
  getters:{
    newCount(state){
      return state.count + 100;
    }
  },
  // 异步修改状态 与 mutations 相似 但不能直接修改值需要调用 mutations 修改
  actions: {
    addAction({commit}){
      commit("add");
    }
  },
  // 将vuex拆分成若干个模块
  modules: {
    users:moduleA
  }
})
