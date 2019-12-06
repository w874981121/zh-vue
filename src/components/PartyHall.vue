
<template>
  <div class="PartyHall">
    <div class="title">
      <img :src="partyhall.title_url" alt="时光派队厅" />
    </div>
    <div class="content" v-for="(tem,index) in partyhall.banner_array" :key="index">
      <h2>{{tem.banner_title}}</h2>
      <div class="banner">
        <img :src="tem.banner_url" alt />
        <a class="button" :href="tem.jump_url">{{tem.button_text}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PartyHall",
  props: ["partyhall"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.PartyHall {
  width: 100%;
  position: relative;
  background: url("../../public/imgs/107.png") no-repeat;
  background-size: 100% 6.18rem;
  background-position: left bottom;
  padding-bottom: 2.2rem;
  overflow: hidden;
}

.content {
  width: 3.12rem;
  height: auto;
  margin: auto;
  overflow: hidden;
  margin-bottom: 0.15rem;
}

h2 {
  width: 100%;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.16rem;
  display: block;
  color: #ffffff;
  /* background-image: linear-gradient(to right, #0f1664, #074eba, #0f1664); */
  background: url("../../public/imgs/17.png") no-repeat;
  background-size: 100% 100%;
  margin: auto;
}

.banner {
  width: 100%;
  min-height: 1rem;
  margin-top: 0.04rem;
  border-radius: 8px;
  background: #7a8dae;
  overflow: hidden;
  position: relative;
}
.banner img {
  border-radius: 8px;
}
.button {
  position: absolute;
  display: block;
  width: 1.43rem;
  height: 0.26rem;
  line-height: 0.26rem;
  background: #0767ce;
  border-radius: 0.16rem;
  color: #ffffff;
  font-size: 0.14rem;
  bottom: 0.2rem;
  left: 50%;
  margin-left: -0.715rem;
}
</style>