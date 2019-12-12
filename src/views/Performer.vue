<template>
  <div id="Performer">
    <img class="pbg" src="../../public/imgs/27-1.png" alt />
    <img class="fbg" src="../../public/imgs/27-14.png" alt />
    <div class="logo">
      <img src="../../public/imgs/logo.png" alt />
    </div>
    <div class="bg_text">
      是好演员成就了好角色？
      <br />
      <br />还是好角色成就了好演员？ 知乎首度策划评选「知乎 2019 小蓝星电影榜年度演员」。结合知乎评分和评价人数等数据从2019年XXX部电影中，筛选出XX位入围者，并邀请专业评审共同评选，最终选出6名「年度演员」。
    </div>
    <div class="box">
      <div class="box_c"></div>
    </div>

    <div class="box2" v-show="templateData.state">
      <van-swipe
        indicator-color="white"
        :loop="false"
        :show-indicators="false"
        style="margin-top:0.4rem;"
      >
        <van-swipe-item v-for="(itm,ind) in review" :key="ind">
          <div class="review" v-for="(item,index) in itm" :key="index">
            <div class="bg_img">
              <div class="img">
                <img :src="item.img_url" alt />
              </div>
            </div>
            <div class="name">{{item.name}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </van-swipe-item>
      </van-swipe>
      <p style="color:#4773B6;">左滑查看完整评审团</p>
    </div>

    <div class="box3">
      <img class="box-img" src="../../public/imgs/27-10.png" alt />
      <div class="box_title">
        <img v-if="templateData.state" src="../../public/imgs/27-15.png" alt />
        <img v-else src="../../public/imgs/23-3.png" alt />
      </div>
      <p class="p">
        好的演员值得被关注，点击你喜欢的获奖演员图片
        <br />查看他们在知乎的相关话题讨论
      </p>

      <ul class="list">
        <li v-for="(item,index) in performer" :key="index">
          <a :href="item.jump_url">
            <div class="text" v-if="typeof item.desc === 'string'">{{item.desc}}</div>
            <div v-else class="text2">
              <p v-for="(tem,i) in item.desc" :key="i">{{tem}}</p>
            </div>
            <div class="head">
              <div class="img">
                <div class="radius">
                  <img :src="item.img_url" alt />
                </div>
              </div>
              <div class="name">{{item.name}}</div>
            </div>
          </a>
        </li>
      </ul>
      <div class="desc_text">按姓氏拼音排序，排名不分先后</div>
    </div>
    <div class="buttonbox">
      <a :href="templateData.zhihu_url" class="button1">前往知乎 2019</a>
      <a class="button2" @click="shareClick">分享年度演员</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Performer",
  data() {
    return {
      templateData: null,
      performer: null,
      review: null
    };
  },
  created() {
    let templateData = window.performer;
    this.templateData = templateData;
    if (templateData.state) {
      this.performer = templateData.winawardtemplates;
    } else {
      this.performer = templateData.selectedtemplates;
    }
    this.review = templateData.reviewtemplates;
  },
  mounted() {},
  methods: {
    shareClick() {
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
    }
  }
};
</script>
<style scoped>
#Performer {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  background: url("../../public/imgs/27-3.png") no-repeat;
  background-size: 100% 100%;
  z-index: 1;
}
#Performer div {
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
  height: 1.32rem;
  background: url("../../public/imgs/27-2.png") no-repeat;
  background-size: 100%;
  margin: 0 auto;
  color: #dbd9c6;
  font-size: 0.12rem;
  text-align: left;
  padding: 0.2rem;
  line-height: 1.6;
}

.box {
  width: 3.17rem;
  height: 2.72rem;
  background: url("../../public/imgs/27-5.png") no-repeat;
  background-size: 100%;
  margin: 0 auto;
  margin-top: 0.2rem;
  overflow: hidden;
}
.box_c {
  width: 2.92rem;
  height: 1.64rem;
  background: #c2c2c2;
  margin: 0.5rem auto;
}

.box2 {
  width: 3.17rem;
  height: 4.46rem;
  background: url("../../public/imgs/27-13.png") no-repeat;
  background-size: 100%;
  margin: 0 auto;
  margin-top: 0.2rem;
  overflow: hidden;
}

.box3 {
  width: 3.17rem;
  min-height: 7.35rem;
  background: url("../../public/imgs/27-9.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  margin-top: 0.2rem;
  position: relative;
}
.box3 .box-img {
  width: 5.8rem;
  position: absolute;
  left: -1.3rem;
  z-index: -1;
}
.box_title {
  width: 100%;
  height: 0.4rem;
  background: url("../../public/imgs/27-16.png") no-repeat;
  background-size: 100%;
}
.box_title img {
  width: 1.5rem;
  height: 0.22rem;
  margin: 0 auto;
  padding-top: 0.09rem;
}
.box3 .p {
  color: #d7d5c2;
  line-height: 2;
  font-size: 0.12rem;
  padding-top: 0.3rem;
}

.list {
  display: block;
  overflow: hidden;
}
.list li {
  width: 100%;
  height: 1rem;
  overflow: hidden;
  position: relative;
}
.list li .text,
.list li .text2 {
  width: 2.62rem;
  height: 0.52rem;
  background: url("../../public/imgs/23-1.png") no-repeat;
  background-size: 100%;
  color: #d3edfb;
  line-height: 4;
  margin-left: 0.55rem;
  position: absolute;
  bottom: 0.2rem;
}

.list li .text2 p {
  margin: 0.03rem auto;
  line-height: 1.2;
  font-size: 0.12rem;
}

.list li .head {
  position: absolute;
}
.list li .head .img {
  width: 1rem;
  height: 1rem;
  background: url("../../public/imgs/23-2.png") no-repeat;
  background-size: 100%;
  overflow: hidden;
  border-radius: 50%;
}

.list li .head .img .radius {
  margin-top: 0.07rem;
  margin-left: 0.12rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  overflow: hidden;
}
.list li .head .name {
  width: 0.9rem;
  height: 0.42rem;
  background: url("../../public/imgs/27-11.png") no-repeat;
  background-size: 100%;
  color: #ffffff;
  line-height: 2.4;
  position: absolute;
  bottom: 0;
  left: 0.06rem;
}
.desc_text {
  font-size: 0.1rem;
  margin: 0 auto;
  padding-top: 0.3rem;
  padding-bottom: 0.1rem;
  color: #5b71af;
}
.buttonbox {
  width: 3.01rem;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.2rem 0.37rem 1rem;
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

.review {
  position: relative;
  width: 0.9rem;
  height: 1.5rem;
  margin-top: 0.2rem;
}
.review .bg_img {
  width: 0.8rem;
  height: 0.8rem;
  background: url("../../public/imgs/27-7.png") no-repeat;
  background-size: 100%;
  overflow: hidden;
  margin: 0.1rem;
}
.review .bg_img .img {
  width: 0.74rem;
  height: 0.74rem;
  border-radius: 0.06rem;
  overflow: hidden;
  margin-top: 0.03rem;
  margin-left: 0.03rem;
}
.review .name {
  width: 0.62rem;
  height: 0.21rem;
  font-size: 0.13rem;
  background: url("../../public/imgs/27-6.png") no-repeat;
  background-size: 100% 100%;
  color: #ffffff;
  line-height: 1.8;
  position: absolute;
  top: 0.8rem;
  left: 50%;
  margin-left: -0.31rem;
}
.review .desc {
  position: absolute;
  width: 100%;
  bottom: 0;
  color: #7cb0fe;
  font-size: 0.12rem;
}
</style>

<style>
#Performer .van-swipe {
  width: 3rem !important;
}
#Performer .van-swipe-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>