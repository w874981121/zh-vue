<template>
  <div class="redenvelopes" :class="state?'myfirst':'myfirst2'">
    <img src="../../public/imgs/108.png" alt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      state: true
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.dh();
    });
  },
  methods: {
    dh() {
      setTimeout(() => {
        this.state = false;
      }, 5000);
    }
  }
};
</script>

<style scoped>
.redenvelopes {
  position: fixed;
  width: 1.52rem;
  right: 0;
  z-index: 9999;
}

.myfirst {
  animation-name: myfirst;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-fill-mode: forwards;
}

.myfirst2 {
  animation-name: myfirst2;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-fill-mode: forwards;
}

@keyframes myfirst {
  0% {
    opacity: 0;
    -webkit-transform: translateY(0px);
  }
  50% {
    opacity: 1;
    display: block;
    -webkit-transform: translateY(3px);
  }
  100% {
    opacity: 1;
    display: block;
    -webkit-transform: translateY(0px);
  }
}

@keyframes myfirst2 {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0px);
  }
  50% {
    opacity: 1;
    display: block;
    -webkit-transform: translateY(3px);
  }
  100% {
    opacity: 0;
    display: block;
    -webkit-transform: translateY(0px);
  }
}
</style>