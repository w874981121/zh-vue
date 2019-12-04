
<template>
  <div class="PartyHall">
    <div class="title">时光派队厅</div>
    <div class="content">
      <h2>直播我的2019</h2>
      <div class="banner">
        <p>直播我的2019banner</p>
        <div class="button">活动点击按钮</div>
      </div>
    </div>
    <div class="content">
      <h2>直播我的2019</h2>
      <div class="banner">
        <p>直播我的2019banner</p>
        <div class="button">活动点击按钮</div>
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
.content {
  width: 3.12rem;
  height: auto;
  margin: auto;
  overflow: hidden;
  margin-bottom: 0.1rem;
}

h2 {
  width: 1.75rem;
  height: 0.28rem;
  line-height: 0.28rem;
  font-size: 0.16rem;
  display: block;
  color: #ffffff;
  background-image: linear-gradient(to right, #0f1664, #074eba, #0f1664);
  margin: auto;
}

.banner {
  width: 100%;
  height: 1.3rem;
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