
<template>
  <div class="HallOfFame">
    <img :src="halloffame.bg_url" alt />
    <div class="content_box">
      <div class="title">
        <img :src="halloffame.title_url" alt="时光名人厅" />
      </div>
      <div class="content">
        <p>{{halloffame.content_text}}</p>
        <div class="box" ref="barrage_wrap"></div>
        <a class="button" :href="halloffame.jump_url">{{halloffame.button_text}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HallOfFame",
  props: ["halloffame"],
  data() {
    return {
      i: 0,
      htmlShowState: true
    };
  },
  created() {
    document.addEventListener("webkitvisibilitychange", function() {
      var tag = document.hidden || document.webkitHidden;
      if (tag) {
        this.htmlShowState = false;
      } else {
        this.htmlShowState = true;
      }
    });
  },
  mounted() {
    this.send = this.$start(this.$refs.barrage_wrap);
    this.forData();
  },
  methods: {
    // 递归播放
    forData() {
      if (!this.htmlShowState) return;
      var array = this.halloffame.problems; //原始数据
      //   var value = array[Math.round(Math.random() * (array.length - 1))]; //随机抽取一个值
      var value = array[this.i];   //顺序循环
      if (this.i === array.length - 1) {
        this.i = 0;
      } else {
        this.i++;
      }
      this.send({
        imgUrl: value.img_url,
        name: value.name,
        text: value.text,
        speed: 1,
        colorname: value.gender === "man" ? "color1" : "color2",
        classname: "halloffamebarrage"
      });
      setTimeout(() => {
        this.forData();
      }, 2000);
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
.content_box .title {
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
  display: block;
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