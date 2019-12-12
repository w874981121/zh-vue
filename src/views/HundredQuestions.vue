<template>
  <div id="HundredQuestions">
    <img class="pbg" src="../../public/imgs/page1-1.png" alt />
    <img class="fbg" src="../../public/imgs/page1-6.png" alt />
    <div class="logo">
      <img src="../../public/imgs/logo2.png" alt />
    </div>
    <div class="bg_text">
      2019 年，有 1120 万个新问题在知乎诞生。
      <br />
      <br />我们从这些问题中，结合阅读量、回答数和讨论价值等维度，精选出 100 个年度问题。问题各有不同，但相同的是问题背后无数跳动的好奇心。
    </div>
    <div class="contenttab">
      <van-tabs type="card">
        <van-tab title="年度热门问题">
          <i class="icon_1">
            <img src="../../public/imgs/huo.png" alt />
          </i>
          <ul class="ul_box1">
            <li v-for="(item,i) in populartemplates" :key="i">
              <a :href="item.jump_url">
                <span>{{item.text}}</span>
              </a>
            </li>
          </ul>
        </van-tab>
        <van-tab title="年度精选问题">
          <div class="list_box" v-for="(item,q) in selectedtemplates" :key="q">
            <div class="title">{{item.title}}</div>
            <i class="icon_2">
              <img :src="item.icon_url" alt />
            </i>
            <ul class="ul_box2">
              <li v-for="(tem,i) in item.list" :key="i">
                <a :href="tem.jump_url">
                  <span>{{tem.text}}</span>
                </a>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="年度脑洞问题">
          <i class="icon_3">
            <img src="../../public/imgs/page1-2.png" alt />
          </i>
          <ul class="ul_box1">
            <li v-for="(item,i) in brainholetemplates" :key="i">
              <a :href="item.jump_url">
                <span>{{item.text}}</span>
              </a>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
    <div class="buttonbox">
      <a href class="button1">前往知乎 2019</a>
      <a class="button2">连接更多好奇心</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HundredQuestions",
  data() {
    return {
      populartemplates: [],
      selectedtemplates: [],
      brainholetemplates: []
    };
  },
  created() {
    let hundredquestions = window.hundredquestions;
    this.populartemplates = hundredquestions.populartemplates;
    this.selectedtemplates = hundredquestions.selectedtemplates;
    this.brainholetemplates = hundredquestions.brainholetemplates;
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
#HundredQuestions {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  background: url("../../public/imgs/page1-5.png");
  background-size: 100%;
  z-index: 1;
}
#HundredQuestions div {
  z-index: 9;
}
.pbg {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.fbg {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.logo {
  width: 1.25rem;
  height: 0.46rem;
  margin: 0.46rem auto;
}
.bg_text {
  width: 2.79rem;
  height: 1.2rem;
  background: rgba(25, 36, 148, 0.4);
  background-size: 100%;
  border-radius: 0.06rem;
  margin: 0 auto;
  color: #dbd9c6;
  font-size: 0.12rem;
  text-align: left;
  padding: 0.2rem;
  line-height: 2;
}

.contenttab {
  width: 3.3rem;
  margin: 0 auto;
  background: url("../../public/imgs/page1-3.png") no-repeat;
  background-size: 100% calc(100% - 20px);
  background-position: 0px 20px;

  margin-top: 0.2rem;
}

.ul_box1 {
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
.ul_box1 li,
.ul_box2 li {
  width: 2.82rem;
  height: 0.53rem;
  background: url("../../public/imgs/page1-4.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  margin-top: 0.06rem;
  position: relative;
}
.ul_box1 li a,
.ul_box2 li a {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #10103e;
}
.ul_box1 li span,
.ul_box2 li span {
  width: 100%;
  line-height: 1.2;
  font-size: 0.12rem;
  display: block;
  position: absolute;
  top: 50%;
  text-align: left;
  transform: translateY(-50%);
  box-sizing: border-box;
  padding: 0 0.1rem;
}
.icon_1 {
  display: block;
  width: 0.45rem;
  height: 0.5rem;
  position: absolute;
  z-index: 9;
  margin-left: 0.4rem;
}

.icon_2 {
  display: block;
  width: 0.92rem;
  height: 0.65rem;
  position: absolute;
  z-index: 9;
  right: 0;
  top: 0;
}

.icon_3 {
  display: block;
  width: 0.92rem;
  height: 0.65rem;
  position: absolute;
  z-index: 9;
  right: 0;
  top: 0.1rem;
}

.buttonbox {
  width: 3.01rem;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.2rem 0.37rem 1.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.buttonbox a {
  display: block;
  width: 1.3rem;
  height: 0.34rem;
  line-height: 0.34rem;
  background: rgba(17, 26, 114, 1);
  border: 1px solid #489ec7;
  border-radius: 0.17rem;
  font-size: 12px;
  color: rgba(196, 216, 234, 1);
}

.list_box {
  position: relative;
}
.list_box .title {
  width: 1.32rem;
  height: 0.31rem;
  line-height: 0.31rem;
  background: url("../../public/imgs/page2-1.png") no-repeat;
  background-size: 100% 100%;
  color: #ffffff;
}
.list_box .ul_box2 {
  width: 100%;
  padding: 0.2rem 0;
  background: url("../../public/imgs/page2-3.png") no-repeat;
  background-size: 100% 100%;
}
</style>
<style>
#HundredQuestions .van-tabs__nav {
  border: none !important;
  background: none;
  margin: 0;
}
#HundredQuestions .van-tab {
  color: #02055f;
  background: #0c4492;
  border: none !important;
  border-radius: 0.04rem 0.04rem 0 0;
}
#HundredQuestions .van-tab--active {
  color: #ffffff;
  background: #1863c4;
}
</style>