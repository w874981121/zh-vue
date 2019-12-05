
<template>
  <div class="RecollectionHall">
    <div class="title">
      <img src="../../public/imgs/34.png" alt="时光回忆厅" />
    </div>
    <div class="content_bg">
      <img src="../../public/imgs/105.png" alt="我的知乎2019" />
      <div class="content">
        <p>我们数着时间，时间也数着我们</p>
        <div class="button">12月26日开启我的知乎2019</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecollectionHall",
  props: ["RecollectionHall"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.RecollectionHall {
  margin-bottom: 0.3rem;
  overflow: hidden;
}
.content_bg {
  width: 3.12rem;
  height: auto;
  margin: auto;
  overflow: hidden;
  position: relative;
}

.content {
  position: absolute;
  width: 100%;
  top: 0.4rem;
  left: 50%;
  height: 4rem;
  margin-left: -1.56rem;
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
  width: 2.4rem;
  height: 0.32rem;
  line-height: 0.32rem;
  border: 1px solid #5f7eb3;
  border-radius: 0.16rem;
  margin: auto;
  margin-top: 2.8rem;
  color: #ffffff;
  font-size: 0.14rem;
  background: url("../../public/imgs/37.png") no-repeat;
  background-size: 0.1275rem 0.195rem;
  background-position: 0.14rem 0.0615rem;
}
</style>