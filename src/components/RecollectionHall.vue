
<template>
  <div class="RecollectionHall">
    <div class="title">
      <img :src="recollectionhall.title_url" alt="时光回忆厅" />
    </div>
    <div class="content_bg">
      <img :src="recollectionhall.bg_url" alt />
      <div class="content">
        <p>{{recollectionhall.content_text}}</p>
        <div class="button" v-if="!recollectionhall.active_state">{{recollectionhall.button_text}}</div>
        <a class="button2" v-else :href="recollectionhall.jump_url">{{recollectionhall.active_text}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecollectionHall",
  props: ["recollectionhall"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.RecollectionHall {
  margin-bottom: 0.3rem;
  overflow: hidden;
}
.content_bg {
  width: 3.12rem;
  height: auto;
  margin: auto;
  overflow: hidden;
  position: relative;
}

.content {
  position: absolute;
  width: 100%;
  top: 0.4rem;
  left: 50%;
  height: 4rem;
  margin-left: -1.56rem;
  overflow: hidden;
}

h2 {
  margin-top: 0.2rem;
  color: #ffffff;
}
p {
  color: #ffffff;
}
.button {
  display: block;
  width: 2.4rem;
  height: 0.32rem;
  line-height: 0.32rem;
  border: 1px solid #5f7eb3;
  border-radius: 0.16rem;
  margin: auto;
  margin-top: 2.8rem;
  color: #ffffff;
  font-size: 0.14rem;
  background: url("../../public/imgs/37.png") no-repeat;
  background-size: 0.1275rem 0.195rem;
  background-position: 0.14rem 0.0615rem;
}
.button2 {
  display: block;
  width: 1.6rem;
  height: 0.32rem;
  line-height: 0.32rem;
  background: #101a73;
  border: 1px solid #479fc5;
  border-radius: 0.16rem;
  margin: auto;
  margin-top: 2.8rem;
  color: #ffffff;
  font-size: 0.14rem;
  background-size: 0.1275rem 0.195rem;
  background-position: 0.14rem 0.0615rem;
}
</style>