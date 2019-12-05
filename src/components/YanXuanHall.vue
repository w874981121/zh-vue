
<template>
  <div class="YanXuanHall">
    <div class="title">
      <img src="../../public/imgs/30.png" alt="时光盐选厅" />
    </div>
    <div class="content_box">
      <img src="../../public/imgs/104.png" alt="时光盐选厅" />
      <div class="content">
        <p>有些经历，自成阅历</p>
        <div class="box">
          <div class="img">1</div>
          <div class="img">2</div>
          <div class="img">3</div>
          <div class="img">4</div>
          <div class="img">5</div>
          <div class="img">6</div>
        </div>
      </div>
    </div>
    <div class="front_img">
      <img src="../../public/imgs/32.png" alt />
    </div>
    <div class="button">查看全部盐选内容</div>
  </div>
</template>
<script>
export default {
  name: "YanXuanHall",
  props: ["YanXuanHall"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.YanXuanHall {
  margin-bottom: 0.3rem;
  padding-bottom: 1.8rem;
  position: relative;
  overflow: hidden;
}
.front_img {
  position: absolute;
  bottom: 0rem;
}
.content_box {
  width: 3.12rem;
  height: auto;
  margin: auto;
  position: relative;
}
.content {
  position: absolute;
  top: 0.36rem;
  width: 100%;
  margin: auto;
  overflow: hidden;
}
.box {
  width: 94%;
  margin: auto;
  height: 2.8rem;
}

p {
  color: #ffffff;
}
.button {
  width: 1.5rem;
  height: 0.32rem;
  position: absolute;
  bottom: 1.2rem;
  left: 50%;
  margin-left: -0.75rem;
  line-height: 0.32rem;
  background: #101a73;
  border: 1px solid #479fc5;
  border-radius: 0.16rem;
  color: #ffffff;
  font-size: 0.14rem;
}
.img {
  width: 33.33%;
  padding: 0.1rem;
  box-sizing: border-box;
  border: 5px solid #101a73;
  height: 1.36rem;
  background: #555555;
  float: left;
  color: #ffffff;
  font-size: 0.3rem;
}
</style>