<template>
  <div class="CuriosityPromenade">
    <div class="title">
      <img src="../../public/imgs/5.png" alt="好奇心长廊" />
    </div>
    <div class="content_bg">
      <img src="../../public/imgs/100.png" alt="年度100问" />
      <div class="content">
        <p>一个好问题，就已经是答案</p>
        <div class="box" ref="barrage_wrap"></div>
        <div class="button">查看年度100问</div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "CuriosityPromenade",
  props: ["curiositypromenade"],
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
      var array = this.curiositypromenade; //原始数据
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
.CuriosityPromenade{
    margin-bottom: 0.3rem;
    overflow: hidden;
}
.content_bg {
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
}
.content {
  position: absolute;
  top: 0.41rem;
  left: 50%;
  margin-left: -1.57rem;
  width: 3.14rem;
  overflow: hidden;
}
.box {
  width: 100%;
  height: 2.3rem;
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
  margin-top: 1.2rem;
  color: #ffffff;
  font-size: 0.14rem;
}
</style>