
<template>
  <div class="YanXuanHall">
    <div class="title">时光盐选厅</div>
    <div class="content">
      <h2>年度盐选内容</h2>
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
    <div class="button">查看全部入围名单</div>
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
.content {
  width: 3.12rem;
  height: 4rem;
  margin: auto;
  background: #064eba;
  overflow: hidden;
}
.box {
  width: 100%;
  height: 2.7rem;
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
.img {
  width: 33.33%;
  padding: 0.1rem;
  box-sizing: border-box;
  border: 5px solid #ffffff;
  height: 1.2rem;
  background: #555555;
  float: left;
  color: #ffffff;
  font-size: 0.3rem; 
}
</style>