<template>
  <div class="AssemblyHall">
    <div class="title">时光议事厅</div>
    <div class="content">
      <h2>年度圆桌</h2>
      <p>邀请时间做客，一起聊聊改变</p>
      <div class="button">进入圆桌参与讨论</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AssemblyHall",
  props:["AssemblyHall"],
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
  margin-top: 2.5rem;
  color: #ffffff;
  font-size: 0.14rem;
}
</style>