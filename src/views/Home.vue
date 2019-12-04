<template>
  <div id="home">
    <!-- 头 -->
    <div class="banner_bg"></div>
    <van-tabs v-model="active" animated>
      <van-tab v-for="(tem,index) in templateData.tap" :key="index">
        <div slot="title" class="title_name">
          {{tem.title}}
          <br />
          {{ tem.name }}
        </div>
      </van-tab>
    </van-tabs>
    <van-index-bar
      :index-list="indexList"
      :sticky-offset-top="2"
      :sticky="false"
      :activeindex="active -1 + 2"
    >
      <van-index-anchor index="1"></van-index-anchor>
      <RecollectionHall />
      <div class="red_envelopes">
        <h1>红包活动</h1>
        <a href>立即领取&nbsp;&nbsp;&nbsp;&nbsp;></a>
      </div>

      <van-index-anchor index="2"></van-index-anchor>
      <HallOfFame v-if="templateDataState" :halloffame="templateData.tap" />
      <div class="ad">广告展示</div>

      <van-index-anchor index="3"></van-index-anchor>
      <AssemblyHall />

      <van-index-anchor index="4"></van-index-anchor>
      <PartyHall />

      <van-index-anchor index="5"></van-index-anchor>
      <SelectionHall />

      <van-index-anchor index="6"></van-index-anchor>
      <CuriosityPromenade v-if="templateDataState" :curiositypromenade="templateData.tap" />

      <van-index-anchor index="7"></van-index-anchor>
      <ScreeningHall />

      <van-index-anchor index="8"></van-index-anchor>
      <YanXuanHall />
    </van-index-bar>

    <p>商业合作伙伴</p>

    <div class="cooperation">
      <ul class="ul">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div>知乎LOGO</div>
  </div>
</template>

<script>
import RecollectionHall from "../components/RecollectionHall"; //回忆
import HallOfFame from "../components/HallOfFame"; //名人
import AssemblyHall from "../components/AssemblyHall"; //议事
import PartyHall from "../components/PartyHall"; //派对
import SelectionHall from "../components/SelectionHall"; //甄选
import CuriosityPromenade from "../components/CuriosityPromenade"; //好奇心长廊
import ScreeningHall from "../components/ScreeningHall"; //放映厅
import YanXuanHall from "../components/YanXuanHall"; //盐选

export default {
  name: "home",
  data() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8],
      templateData: {},
      active: 1
    };
  },
  created() {
    this.getJson();
  },
  computed: {
    templateDataState() {
      return this.templateData && this.templateData.tap;
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs.bar);
    });
  },
  methods: {
    getJson() {
      fetch("./templateJson/index.json")
        .then(res => {
          return res.json();
        })
        .then(data => {
          if (data) {
            this.templateData = data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    RecollectionHall,
    HallOfFame,
    AssemblyHall,
    PartyHall,
    SelectionHall,
    CuriosityPromenade,
    ScreeningHall,
    YanXuanHall
  }
};
</script>

<style>
.van-tabs__wrap {
  height: 0.58rem !important;
}
.van-tabs__line {
  width: 0.71rem !important;
  height: 0.5rem !important;
  background-color: rgba(136, 144, 196, 0.5) !important;
  border-radius: 0px !important;
  top: 0;
}
.van-tabs__nav--line {
  height: 0.58rem;
  background: #171f8e !important;
  background-image: linear-gradient(#090b34, #15218d) !important;
  padding-bottom: 0px !important;
}

.van-hairline--top-bottom::after {
  border: 0px !important;
  width: 3.75rem;
  display: block;
  height: 0.02rem;
  background-image: linear-gradient(to right, #d69beb, #8fbcdd);
  bottom: 0 !important;
  left: 0 !important;
  top: auto !important;
  right: auto !important;
  transform: none !important;
}

.colored_thread {
  width: 100%;
  height: 0.024rem;
  background: #d69beb;
}

.title_name {
  line-height: 0.14rem;
  margin-top: 0.22rem;
  font-size: 0.1rem;
  color: #ffffff;
}
.banner_bg {
  width: 100%;
  height: 2rem;
  background: #000056;
}

.red_envelopes {
  width: 3.12rem;
  height: 1.3rem;
  margin: auto;
  margin-top: 0.3rem;
  background: #0b2f85;
  overflow: hidden;
  border-radius: 0.1rem;
}
.red_envelopes h1 {
  margin-top: 0.3rem;
  color: #ffffff;
  font-size: 0.2rem;
}
.red_envelopes a {
  display: block;
  color: #8a0022;
  background: #e39b73;
  width: 1.15rem;
  height: 0.25rem;
  line-height: 0.25rem;
  border-radius: 0.13rem;
  margin: auto;
  margin-top: 0.23rem;
}
.ad {
  width: 3.12rem;
  height: 1.3rem;
  line-height: 1.3rem;
  margin: auto;
  margin-top: 1rem;
  background: #0b2f85;
  overflow: hidden;
  border-radius: 0.1rem;
  color: #ffffff;
}
.cooperation{
  width: 3.36rem;
  overflow:hidden;
  margin: auto;
}

.ul {
  width: 3.36rem;
  height: auto;
  display: block;
  overflow: hidden;
  margin: auto;
  margin-left: 0.12rem;
}
li {
  display: block;
  margin-right: 0.24rem;
  width: 0.6rem;
  height: 0.2rem;
  background: #8fbcdd;
  float: left;
  margin-bottom: 0.1rem;
}
</style>