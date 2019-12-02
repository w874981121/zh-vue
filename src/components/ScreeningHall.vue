<!--
 * @Author: 一条咸鱼
 * @Date: 2019-12-03 00:23:49
 * @LastEditTime: 2019-12-03 01:20:57
 * @LastEditors: 一条咸鱼
 * @Description: 
 * @FilePath: /zhihu-active/src/components/ScreeningHall.vue
 -->


<template>
  <div class="ScreeningHall">666666666666</div>
</template>
<script>
export default {
  name: "ScreeningHall",
  data() {
    return {};
  },
  mounted() {
    this.getJson();
  },
  methods: {
    getJson() {
      fetch("./index.json")
        .then(res => {
          return res.json();
        })
        .then(data => {
          alert(data)
          console.log(data);
        });
    }
  }
};
</script>
<style scoped>
</style>