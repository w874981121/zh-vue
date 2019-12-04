
<template>
  <div class="SelectionHall">
    <div class="title">时光甄选厅</div>
    <div class="content">
      <h2>年度小蓝星推荐</h2>
      <p>善于发现美好，生活才会美好</p>
      <van-tabs v-model="active" animated>
        <van-tab v-for="(tem,index) in temb" :key="index">
          <div slot="title" class="title_name">{{ tem.name }}</div>
          <div class="box_tab">
            <div class="box1">
              <div class="img"></div>
              <div class="name">
                No.2
                <br />流浪地球
              </div>
              <div class="text">知乎评分：8.4</div>
            </div>
            <div class="box2">
              <div class="img"></div>
              <div class="name">
                No.2
                <br />何以为家
              </div>
              <div class="text">知乎评分：8.1</div>
            </div>
            <div class="box1">
              <div class="img"></div>
              <div class="name">
                No.3
                <br />小丑
              </div>
              <div class="text">知乎评分：8.2</div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
      <div class="button">查看全部榜单</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectionHall",
  props: ["SelectionHall"],
  data() {
    return {
      temb: [
        { name: "高分电影榜" },
        { name: "数码好物榜" },
        { name: "时尚好物榜" }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.content {
  width: 3.12rem;
  height: auto;
  margin: auto;
  background: #064eba;
  overflow: hidden;
  padding-bottom: 0.2rem;
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
  margin-top: 0.2rem;
  color: #ffffff;
  font-size: 0.14rem;
}
.box_tab {
  width: 100%;
  overflow: hidden;
  margin-top: 0.2rem;
}

.box1 {
  width: 30%;
  height: auto;
  float: left;
}
.box2 {
  width: 40%;
  height: auto;
  float: left;
}
.img {
  width: 80%;
  margin: auto;
  height: 1.2rem;
  background: #cccccc;
  margin-top: 0.3rem;
}
.name {
  font-size: 0.18rem;
  color: #ffffff;
}
.box2 .img {
height: 1.5rem;
margin-top: 0;
}
.text {
}
</style>