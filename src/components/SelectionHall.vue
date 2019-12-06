
<template>
  <div class="SelectionHall">
    <img :src="selectionhall.bg_url" alt />
    <div class="content_box">
      <div class="title">
        <img :src="selectionhall.title_url" alt="时光甄选厅" />
      </div>
      <div class="content" id="tabsbox">
        <p>{{selectionhall.content_text}}</p>
        <van-tabs
          v-model="active"
          animated
          background="#0e2679"
          title-inactive-color="#5568da"
          title-active-color="#ffffff"
        >
          <van-tab v-for="(tem,index) in selectionhall.recommend_array" :key="index">
            <div slot="title" class="title_name">{{ tem.tabs_name }}</div>
            <div class="box_tab">
              <div :class="i==1?'box2':'box1'" v-for="(obj,i) in tem.arrays" :key="i">
                <div class="img">
                  <img :src="obj.img_url" alt />
                </div>
                <div class="name">
                  No.{{obj.ranking}}
                  <br />
                  {{obj.name}}
                </div>
                <div class="text">知乎评分：{{obj.score}}</div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
        <a class="button" :href="selectionhall.jump_url">{{selectionhall.button_text}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectionHall",
  props: ["selectionhall"],
  data() {
    return {
      active: 0, //tab选项
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
.SelectionHall {
  margin-bottom: 0.3rem;
  position: relative;
  overflow: hidden;
}
.content_box {
  position: absolute;
  top: 0;
  width: 100%;
}
.content_box .title {
  margin-top: 0.2rem;
}
.content {
  width: 3.12rem;
  height: auto;
  margin: auto;
  margin-top: 0.6rem;
  overflow: hidden;
}

p {
  color: #ffffff;
}
.button {
  display: block;
  width: 1.73rem;
  height: 0.32rem;
  line-height: 0.32rem;
  background: #101a73;
  border: 1px solid #479fc5;
  border-radius: 0.16rem;
  margin: auto;
  margin-top: 0.36rem;
  color: #ffffff;
  font-size: 0.14rem;
}

.box_tab {
  width: 2.9rem;
  margin: auto;
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
  width: 90%;
  margin: auto;
  height: 1.27rem;
  background: #cccccc;
  margin-top: 0.4rem;
}
.name {
  font-size: 0.14rem;
  color: #ffffff;
}
.box2 .img {
  height: 1.69rem;
  margin-top: 0;
}
.text {
  font-size: 0.12rem;
  color: #7089d8;
}
</style>

<style>
#tabsbox .van-tabs__wrap {
  height: 0.36rem !important;
}
#tabsbox .van-tabs__line {
  background: #ffffff !important;
  bottom: 6px !important;
  height: 1px !important;
}
#tabsbox .van-tabs__nav--line {
  width: 2.6rem !important;
  padding: 0 0.06rem !important;
  height: 0.36rem !important;
  padding-bottom: 0px !important;
  border-radius: 0.18rem;
  margin: auto;
}

#tabsbox .title_name {
  margin-top: 0;
  line-height: 0.32rem;
}
</style>