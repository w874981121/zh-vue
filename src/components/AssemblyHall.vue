<template>
  <div class="AssemblyHall">
    <div class="title">
      <img src="../../public/imgs/38.png" alt="时光议事厅" />
    </div>

    <div class="content_bg">
      <img src="../../public/imgs/106.png" alt="我的知乎2019" />
      <div class="content">
        <p>邀请时间做客，一起聊聊改变</p>
        <div class="button">进入圆桌参与讨论</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AssemblyHall",
  props: ["AssemblyHall"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.AssemblyHall {
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
  width: 1.73rem;
  height: 0.32rem;
  line-height: 0.32rem;
  background: #101a73;
  border: 1px solid #479fc5;
  border-radius: 0.16rem;
  margin: auto;
  margin-top: 2.8rem;
  color: #ffffff;
  font-size: 0.14rem;
}
</style>