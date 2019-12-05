
<template>
  <div class="PartyHall">
    <div class="title">
      <img src="../../public/imgs/13.png" alt="时光派队厅" />
    </div>
    <div class="content">
      <h2>直播我的2019</h2>
      <div class="banner">
        <p>直播我的2019banner</p>
        <div class="button">活动点击按钮&nbsp;&nbsp;&nbsp;&nbsp;></div>
      </div>
    </div>

    <div class="content">
      <h2>直播我的2019</h2>
      <div class="banner">
        <p>直播我的2019banner</p>
        <div class="button">活动点击按钮&nbsp;&nbsp;&nbsp;&nbsp;></div>
      </div>
    </div>

    <div class="content">
      <h2>直播我的2019</h2>
      <div class="banner">
        <p>直播我的2019banner</p>
        <div class="button">活动点击按钮&nbsp;&nbsp;&nbsp;&nbsp;></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PartyHall",
  props: ["PartyHall"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.PartyHall {
  width: 100%;
  position: relative;
  background: url("../../public/imgs/107.png") no-repeat;
  background-size: 100% 6.18rem;
  background-position: left bottom;
  padding-bottom: 2.2rem;
  overflow: hidden;
}

.content {
  width: 3.12rem;
  height: auto;
  margin: auto;
  overflow: hidden;
  margin-bottom: 0.15rem;
}

h2 {
  width: 100%;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.16rem;
  display: block;
  color: #ffffff;
  /* background-image: linear-gradient(to right, #0f1664, #074eba, #0f1664); */
  background: url("../../public/imgs/17.png") no-repeat;
  background-size: 100% 100%;
  margin: auto;
}

.banner {
  width: 100%;
  height: 1.3rem;
  margin-top: 0.04rem;
  border-radius: 10px;
  background: #7a8dae;
  overflow: hidden;
}
p {
  margin-top: 0.3rem;
}
.button {
  width: 1.43rem;
  height: 0.26rem;
  line-height: 0.26rem;
  background: #0767ce;
  border-radius: 0.16rem;
  margin: auto;
  margin-top: 0.3rem;
  color: #ffffff;
  font-size: 0.14rem;
}
</style>