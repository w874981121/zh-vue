<!--
 * @Author: 一条咸鱼
 * @Date: 2019-12-03 00:23:49
 * @LastEditTime: 2019-12-03 01:20:57
 * @LastEditors: 一条咸鱼
 * @Description: 
 * @FilePath: /zhihu-active/src/components/ScreeningHall.vue
 -->


<template>
  <div class="ScreeningHall">
    4567890-
  </div>
</template>
<script>
export default {
  name: "ScreeningHall",
  data() {
    return {
      templateUrl: "./templateJson/index.json", //静态文件访问，跟相对路径是publiic/index.js的相对路径
      templateData: [] //页面结构数据
    };
  },
  created() {
    this.getJson();
  },
  mounted() {},
  methods: {
    getJson() {
      fetch("./templateJson/index.json")
        .then(res => {
          return res.json();
        })
        .then(data => {
          if (data) {
            this.templateData = data;
          }
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }
};
</script>
<style scoped>
</style>