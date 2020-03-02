<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="data.name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="data.age"
      label="年龄"
      width="180">
    </el-table-column>
    <el-table-column
      prop="data.school"
      label="学校">
      <template slot-scope="scope">
        <el-tag disable-transitions>{{scope.row.data.school === 'hd' ? '黑大' : '理工'}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getStudent } from '@/api/student'
export default {
  data() {
    return {
      tableData: [{
          _id:'hjkl',
          data:{
            name:'aaa',
            age:'vv',
            school:'黑大'
          }
        }]
    };
  },
  methods: {
    getData(){
      getStudent({id:"Konrad"}).then((res)=>{
        console.log(res);
        this.tableData = res.data.data
      })
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {//请求数据尽量写在这里
    this.getData()
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>