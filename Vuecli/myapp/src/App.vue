<template>
  <div id="app">
    <div id="nav">
      <!-- <Navagation></Navagation> -->
      <Navagation />
    </div>
    <router-view/>
  </div>
</template>
<script>
import Navagation from '@/components/Navagation.vue'
export default {
 components:{
   Navagation
 } 
}
</script>
<style>
  *{
    margin: 0;
  }
  li{
    list-style: none;
  }
  body{
    padding:1rem 0;
  }
</style>