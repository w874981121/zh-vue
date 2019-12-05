
<template>
  <div class="HallOfFame">
    <img src="../../public/imgs/103.png" alt />
    <div class="content_box">
      <div class="title">
        <img src="../../public/imgs/27.png" alt="时光名人厅" />
      </div>
      <div class="content">
        <p>用成为别人，成就自己</p>
        <div class="box" ref="barrage_wrap"></div>
        <div class="button">查看全部入围名单</div>
      </div>
    </div>
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
.HallOfFame {
  margin-bottom: 0.3rem;
  position: relative;
  overflow: hidden;
}
.content_box {
  width: 100%;
  position: absolute;
  top: 0;
}
.content_box .title{
    margin-top: 0.34rem;
}

.content {
  width: 3.12rem;
  margin: auto;
  padding-top: 0.36rem;
  overflow: hidden;
}

.box {
  width: 100%;
  height: 2.7rem;
}

p {
  color: #ffffff;
}
.button {
  width: 1.33rem;
  height: 0.32rem;
  line-height: 0.32rem;
  background: #101a73;
  border: 1px solid #479fc5;
  border-radius: 0.16rem;
  margin: auto;
  margin-top: 0.8rem;
  color: #ffffff;
  font-size: 0.14rem;
}
</style>