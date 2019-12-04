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
    <div class="title">时光放映厅</div>
    <div class="content">
      <h2>年度大事记</h2>
      <p>2019该如何回顾这一年</p>
      <div class="video">

      </div>
      <div class="button">进入&nbsp;2019&nbsp;大事记专区</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ScreeningHall",
  props:["ScreeningHall"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.content {
  width: 3.12rem;
  height: 4rem;
  margin: auto;
  overflow: hidden;
}

h2 {
  margin-top: 0.2rem;
  color: #ffffff;
}
p {
  color: #ffffff;
}
.button {
  width: 1.73rem;
  height: 0.32rem;
  line-height: 0.32rem;
  background: #101a73;
  border: 1px solid #479fc5;
  border-radius: 0.16rem;
  margin: auto;
  margin-top: 0.3rem;
  color: #ffffff;
  font-size: 0.14rem;
}

.video{
  width: 100%;
  height: 1.8rem;
  background: #ffffff;
  overflow: hidden;
}
</style>