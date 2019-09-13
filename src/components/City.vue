<template>
  <div class="city" ref="wrap">
    <div class="cont">
      <div class="input-box">
        <input type="text">
      </div>
      <div class="wrap">当前城市</div>
      <div class="wrap">热门城市</div>
      <div class="wrap">城市列表</div>
      <div class="city-box" v-for="(city,key) of list" :key="key" :ref="key">
        <div class="city-key">{{key}}</div>
        <div class="city-item border-bottom" v-for="item in city" :key="item.id">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import BScroll from "better-scroll";
export default {
  name: "City",
  props: {
    list: {},
    pos: ""
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrap, {
      click: true,
      mouseWheel: true
    });
  },
  watch: {
    pos() {
      if (this.pos) {
        let dom = this.$refs[this.pos][0];
        // window.console.log(this.pos, dom, dom.offsetTop);
        this.scroll.scrollToElement(dom);
      }
    }
  }
};
</script>

<style scoped>
.city {
  position: absolute;
  top: 0.4rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.input-box {
  margin-top: 0.1rem;
  padding: 0.1rem;
  background: #079;
}
.input-box input {
  box-sizing: border-box;
  width: 100%;
  height: 0.62rem;
  line-height: 0.62rem;
  padding: 0.1rem;
  color: #666;
  border-radius: 0.06rem;
  text-align: center;
}
.city-key {
  background: #eee;
  height: 0.54rem;
  line-height: 0.54rem;
  padding-left: 0.2rem;
}
.city-item {
  padding-left: 0.2rem;
  height: 0.54rem;
  line-height: 0.54rem;
  color: #999;
}
</style>
