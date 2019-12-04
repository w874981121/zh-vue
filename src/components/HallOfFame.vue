
<template>
  <div class="HallOfFame">
    <div class="title">时光名人厅</div>
    <div class="content">
      <h2>年度演员</h2>
      <p>用成为别人，成就自己</p>
      <div class="box" ref="barrage_wrap"></div>
    </div>
    <div class="button">查看全部入围名单</div>
  </div>
</template>
<script>
export default {
  name: "HallOfFame",
  props: ["halloffame"],
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.send = this.$start(this.$refs.barrage_wrap);
    this.forData();
  },
  methods: {
    // 递归播放
    forData() {
      var array = this.halloffame; //原始数据
      var value = array[Math.round(Math.random() * (array.length - 1))]; //随机抽取一个值
      this.send({
        text: value.name,
        color: "red",
        speed: 1,
        classname: "style1"
      });
      setTimeout(() => {
        this.forData();
      }, 1000);
    }
  }
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
  background: #11196a
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
</style>