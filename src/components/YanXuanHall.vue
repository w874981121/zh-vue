
<template>
  <div class="YanXuanHall">
    <div class="title">
      <img :src="yanxuanhall.title_url" alt="时光盐选厅" />
    </div>
    <div class="content_box">
      <img :src="yanxuanhall.bg_url" alt="时光盐选厅" />
      <div class="content">
        <p>{{yanxuanhall.content_text}}</p>
        <div class="box">
          <div class="img" v-for="(tem,i) in yanxuanhall.list" :key="i">
            <a :href="tem.jump_url">
              <img :src="tem.img_url" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="front_img">
      <img :src="yanxuanhall.front_img" alt />
    </div>
    <a class="button" :href="yanxuanhall.jump_url">{{yanxuanhall.button_text}}</a>
  </div>
</template>
<script>
export default {
  name: "YanXuanHall",
  props: ["yanxuanhall"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.YanXuanHall {
  margin-bottom: 0.3rem;
  padding-bottom: 1.8rem;
  position: relative;
  overflow: hidden;
}
.front_img {
  position: absolute;
  bottom: 0rem;
}
.content_box {
  width: 3.12rem;
  height: auto;
  margin: auto;
  position: relative;
}
.content {
  position: absolute;
  top: 0.36rem;
  width: 100%;
  margin: auto;
  overflow: hidden;
}
.box {
  width: 94%;
  margin: auto;
  margin-top: 0.1rem;
  display: flex;
  flex-direction: row ;
  justify-content:space-between;
  flex-wrap:wrap;
}

p {
  color: #ffffff;
}
.button {
  display: block;
  width: 1.5rem;
  height: 0.32rem;
  position: absolute;
  bottom: 1.2rem;
  left: 50%;
  margin-left: -0.75rem;
  line-height: 0.32rem;
  background: #101a73;
  border: 1px solid #479fc5;
  border-radius: 0.16rem;
  color: #ffffff;
  font-size: 0.14rem;
}
.img {
  width: 33%;
  box-sizing: border-box;
  padding: 0.06rem;
  padding-bottom: 0.16rem;
  color: #ffffff;
  font-size: 0.3rem;
}
.img a {
  overflow: hidden;
}
</style>