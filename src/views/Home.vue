<template>
  <div id="home">
    <Redenvelopes />

    <div class="sharetop" @click="shareClick">
      <img src="../../public/imgs/fenxiang.png" alt />
    </div>

    <!-- 头部固定 -->
    <div class="banner_bg">
      <img src="../../public/imgs/1.jpg" alt />
    </div>
    <!-- 导航不可更改位置 -->
    <div id="navtab" :class="{fixed_nav:navBarFixed}" ref="navtab">
      <van-tabs
        v-model="active"
        animated
        title-inactive-color="#5568da"
        title-active-color="#ffffff"
        @click="tabNavOnClick"
      >
        <van-tab v-for="(tem,index) in navData" :key="index" :name="tem.index">
          <div slot="title" class="title_name" v-if="tem.tab_state">
            {{tem.title}}
            <br />
            {{ tem.name }}
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 锚点组件区域 内部位置根据数组位置排列 -->
    <van-index-bar
      :index-list="indexList"
      :sticky-offset-top="10"
      :activeindex="indexSelect"
      :sticky="false"
      @handover="handoverFn"
    >
      <div v-for="(data,i) in templateData.templates" :key="i">
        <van-index-anchor v-if="data.anchor_point_state" :index="data.index"></van-index-anchor>
        <!-- 时光回忆厅 -->
        <RecollectionHall
          v-if="templateShowState('RecollectionHall',data.id,data.show)"
          :recollectionhall="data"
        />
        <!-- 红包 -->
        <div class="red_envelopes" v-if="templateShowState('RedEnvelopes',data.id,data.show)">
          <img :src="data.img_url" alt />
          <a :href="data.jump_url">{{data.button_text}}</a>
        </div>
        <!--  -->
        <HallOfFame v-if="templateShowState('HallOfFame',data.id,data.show)" :halloffame="data" />
        <!-- 广告 -->
        <div class="ad" v-if="templateShowState('AD',data.id,data.show)">
          <a :href="data.jump_url">
            <img :src="data.ad_img_url" alt />
          </a>
        </div>
        <!--  -->
        <AssemblyHall
          v-if="templateShowState('AssemblyHall',data.id,data.show)"
          :assemblyhall="data"
        />
        <!--  -->
        <PartyHall v-if="templateShowState('PartyHall',data.id,data.show)" :partyhall="data" />
        <!--  -->
        <SelectionHall
          v-if="templateShowState('SelectionHall',data.id,data.show)"
          :selectionhall="data"
        />
        <!--  -->
        <CuriosityPromenade
          v-if="templateShowState('CuriosityPromenade',data.id,data.show)"
          :curiositypromenade="data"
        />
        <!--  -->
        <ScreeningHall
          v-if="templateShowState('ScreeningHall',data.id,data.show)"
          :screeninghall="data"
        />
        <!--  -->
        <YanXuanHall v-if="templateShowState('YanXuanHall',data.id,data.show)" :yanxuanhall="data" />
      </div>
    </van-index-bar>

    <h3 style="color:#c4d8ea">商业合作伙伴</h3>

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

    <div class="logo">
      <img src="../../public/imgs/41.png" alt />
    </div>
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
import Redenvelopes from "../components/Redenvelopes"; //盐选


// 页面配置文件

export default {
  name: "home",
  data() {
    return {
      clickState: true,
      top: null,
      indexSelect: null,
      templateData: null,
      active: null,
      navBarFixed: false
    };
  },
  created() {
    this.templateData = window.homes;
  },
  computed: {
    templateDataState() {
      return this.templateData && this.templateData.templates;
    },
    navData() {
      return this.templateData.templates.filter(item => {
        return item.tab_state;
      });
    },
    indexList() {
      return this.navData.map(obj => {
        return obj.index;
      });
    }
  },
  watch: {},
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.top = this.getElementToPageTop(this.$refs.navtab);
      }, 0);
      window.addEventListener("scroll", this.watchScroll);
      window.addEventListener("touchmove", this.watchScroll);
    });
  },
  methods: {
    shareClick() {
      // var shareInfo = {
      //   title: "这是个测试", // 分享到朋友圈与微信好友时的标题
      //   desc: "这是个测试", // 分享到微信好友的链接详情
      //   imgUrl: "https://zhstatic.zhihu.com/fly/duanzi/assets/images/share.jpg", // 分享到朋友圈与微信好友时的图片
      //   link: location.href, // 分享的链接，可能会有增加追踪参数的需求
      //   success: () => {}
      // };
      // window.zWechat.init().then(function() {
      //   wx.onMenuShareTimeline(shareInfo); // 设置分享到朋友圈信息
      //   wx.onMenuShareAppMessage(shareInfo);
      // });

      window.zhihuHybrid.dispatch("share/setShareInfo", {
        zhihuMessage: {
          content: "知乎",
          desc: "知乎"
        },
        QQ: {
          url: "https://www.zhihu.com",
          title: "知乎",
          content: "知乎",
          imageURL: "xxx.png"
        },
        zone: {
          url: "https://www.zhihu.com",
          title: "知乎",
          content: "知乎",
          imageURL: "asdas.png"
        },
        weibo: {
          url: "https://www.zhihu.com",
          title: "知乎",
          content: "知乎",
          imageURL: "asdasd.png"
        },
        copyLink: {
          content: "https://www.zhihu.com"
        }
      });
      window.zhihuHybrid.dispatch("share/showShareActionSheet");
    },
    templateShowState(name, dyn, state) {
      return name === dyn && state;
    },
    tabNavOnClick(name) {
      // 埋点
      window.zap.trackEvent({
        id: 7364,
        action: "click"
      });
      this.clickState = false;
      this.indexSelect = name;
      setTimeout(() => {
        this.clickState = true;
      }, 1000);
    },
    handoverFn(index) {
      if (this.clickState) {
        this.active = index;
      }
    },
    getElementToPageTop(el) {
      if (el.parentElement) {
        return this.getElementToPageTop(el.parentElement) + el.offsetTop;
      }
      return el.offsetTop;
    },
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
      if (scrollTop > this.top) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
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
    YanXuanHall,
    Redenvelopes
  }
};
</script>

<style>
#navtab {
  z-index: 9999;
  width: 100%;
}
#navtab .van-tabs__wrap {
  height: 0.66rem !important;
}
#navtab .van-tabs--line {
  margin-top: -0.1rem !important;
}
#navtab .van-tabs__line {
  width: 0.81rem !important;
  height: 0.56rem !important;
  background-color: rgba(136, 144, 196, 0.5) !important;
  background: url("../../public/imgs/3.png") no-repeat !important;
  background-size: 100% 100% !important;
  border-radius: 0px !important;
  top: 0;
}
#navtab .van-tabs__nav--line {
  height: 0.66rem !important;
  background: #171f8e !important;
  padding-bottom: 0px !important;
  background: url("../../public/imgs/4.jpg") no-repeat !important;
  background-position: 0 0.08rem !important;
  background-size: 100% 0.58rem !important;
}
.van-tab--active {
  font-size: 0.16rem !important;
}
.van-hairline--top-bottom::after {
  border: 0px !important;
  width: 3.75rem;
  display: block;
  height: 0;
  bottom: 0 !important;
  left: 0 !important;
  top: auto !important;
  right: auto !important;
  transform: none !important;
}

.van-index-anchor {
  line-height: 0 !important;
  font-size: 0 !important;
  padding: 0 !important;
  height: 1px;
}

.sharetop {
  width: 20px;
  height: 23px;
  position: absolute;
  top: 5px;
  right: 20px;
  z-index: 99;
}

.fixed_nav {
  position: fixed;
  top: 0;
  left: 0;
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
}
.banner_bg {
  width: 100%;
  height: auto;
}

.red_envelopes {
  width: 3.12rem;
  height: 1.3rem;
  margin: 0.3rem auto;
  background: #0b2f85;
  overflow: hidden;
  border-radius: 0.1rem;
  position: relative;
}
.red_envelopes a {
  position: absolute;
  display: block;
  color: #ffffff;
  background: #71295e;
  width: 1.15rem;
  height: 0.25rem;
  line-height: 0.25rem;
  border-radius: 0.13rem;
  top: 0.9rem;
  left: 50%;
  margin-left: -0.575rem;
}
.ad {
  width: 3.12rem;
  height: 1.3rem;
  line-height: 1.3rem;
  margin: 0.3rem auto;
  background: #0b2f85;
  overflow: hidden;
  border-radius: 0.1rem;
  color: #ffffff;
}

.ad img {
  border-radius: 0.08rem;
}
.cooperation {
  width: 3.36rem;
  overflow: hidden;
  margin: auto;
}

.cooperation .ul {
  width: 3.36rem;
  height: auto;
  display: block;
  overflow: hidden;
  margin: auto;
  margin-left: 0.12rem;
}
.cooperation .ul li {
  display: block;
  margin-right: 0.24rem;
  width: 0.6rem;
  height: 0.2rem;
  background: #8fbcdd;
  float: left;
  margin-bottom: 0.1rem;
}
.logo {
  width: 0.61rem;
  margin: 0.5rem auto;
}
</style>