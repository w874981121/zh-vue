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
    <img src="../../public/imgs/101.png" alt />
    <div class="content_box">
      <div class="title">
        <img src="../../public/imgs/16.png" alt="时光放映厅" />
      </div>
      <div class="content">
        <p>2019该如何回顾这一年</p>
        <div class="video"></div>
        <div class="button">进入&nbsp;2019&nbsp;大事记专区</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ScreeningHall",
  props: ["ScreeningHall"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.ScreeningHall {
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 0.2rem;
  margin-bottom: 0.22rem;
}
.content_box {
  width: 100%;
  position: absolute;
  top: 0;
}

.content_box .title {
  margin-top: 0.34rem;
}
.content {
  width: 3.14rem;
  margin: auto;
  margin-top: 0.6rem;
  overflow: hidden;
}

p {
  color: #ffffff;
  margin: 0.08rem 0;
}
.button {
  width: 1.73rem;
  height: 0.32rem;
  line-height: 0.32rem;
  background: #101a73;
  border: 1px solid #479fc5;
  border-radius: 0.16rem;
  margin: auto;
  margin-top: 0.2rem;
  color: #ffffff;
  font-size: 0.14rem;
}

.video {
  width: 100%;
  height: 1.8rem;
  overflow: hidden;
  margin-top: 0.16rem;
}
</style>