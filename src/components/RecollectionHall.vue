
<template>
  <div class="RecollectionHall">
    <div class="title">时光回忆厅</div>
    <div class="content">
      <h2>我的知乎2019</h2>
      <p>我们数着时间，时间也数着我们</p>
      <div class="button">查看我的知乎2019</div>
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