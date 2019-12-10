<!--
 * @Author: 一条咸鱼
 * @Date: 2019-12-03 00:23:49
 * @LastEditTime: 2019-12-03 01:20:57
 * @LastEditors: 一条咸鱼
 * @Description: 
 * @FilePath: /zhihu-active/src/components/ScreeningHall.vue
 -->
<template>
  <div class="ScreeningHall">
    <img :src="screeninghall.bg_url" alt />
    <div class="content_box">
      <div class="title">
        <img :src="screeninghall.title_url" alt="时光放映厅" />
      </div>
      <div class="content">
        <p>{{screeninghall.content_text}}</p>
        <div class="video">
          <video :src="screeninghall.video_url"></video>
        </div>
        <a class="button" :href="screeninghall.jump_url">{{screeninghall.button_text}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ScreeningHall",
  props: ["screeninghall"],
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      // this.videoplayer();
    });
  },
  methods: {
    init() {
      
    },
    // videoplayer() {
    //   console.log("test video");
    //   window.zhihuHybrid.dispatch("base/openVideo", {
    //     id: "1160348399378870272",
    //     cover: "https://pic4.zhimg.com/v2-6c79f6db3d7b9f4ede0b4975ba484ee2.jpg",
    //     rect: {
    //       bottom: 410,
    //       height: 240,
    //       left: 12,
    //       right: 363,
    //       top: 326,
    //       width: 320
    //     }
    //   });
    // }
  }
};
</script>
<style scoped>
.ScreeningHall {
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 0.2rem;
  margin-bottom: 0.22rem;
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
  width: 3.14rem;
  margin: auto;
  margin-top: 0.6rem;
  overflow: hidden;
}

p {
  color: #ffffff;
  margin: 0.08rem 0;
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
  margin-top: 0.2rem;
  color: #ffffff;
  font-size: 0.14rem;
}

.video {
  width: 100%;
  height: 1.8rem;
  overflow: hidden;
  margin-top: 0.19rem;
  background: #cccccc;
}
video {
  display: block;
  width: 100%;
  height: 1.8rem;
}
</style>