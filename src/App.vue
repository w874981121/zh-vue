<!--
 * @Author: 一条咸鱼
 * @Date: 2019-12-02 23:57:55
 * @LastEditTime: 2019-12-03 01:17:05
 * @LastEditors: 一条咸鱼
 * @Description: 
 * @FilePath: /zhihu-active/src/App.vue
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
html{
  font-size: 100px;
}
body{
  font-size: 0.14rem;
  background: #000022;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title{
    width: 1.32rem;
    height: 0.25rem;
    margin: 0.44rem auto 0.24rem auto;
}
img{
  display: block;
  width: 100%;
}
p{
  font-size: 0.12rem;
}

</style>
