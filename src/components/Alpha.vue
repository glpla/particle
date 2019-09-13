<template>
  <div class="alpha">
    <div
      class="item"
      v-for="item in toArr"
      :key="item"
      :data-idx="item"
      :class="cur==item?'active':''"
      :ref="item"
      @click="onClick"
      @touchstart.prevent="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >{{item}}</div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Alpha",
  props: {
    list: {}
  },
  data() {
    return {
      cur: "A",
      touch: false,
      startPos: 0,
      h: 0,
      timer: null
    };
  },
  methods: {
    onClick(e) {
      this.cur = e.target.dataset.idx;
      // window.console.log("alpha cur", this.cur);
      this.$emit("change", this.cur);
    },
    onTouchStart() {
      this.touch = true;
    },
    onTouchMove(e) {
      if (this.touch) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const endPos = e.touches[0].clientY;
          const index = Math.floor((endPos - this.startPos) / this.h);
          // window.console.log(endPos, index);
          if (index >= 0 && index < this.toArr.length) {
            this.cur = this.toArr[index];
            this.$emit("change", this.toArr[index]);
          }
        }, 16);
      }
    },
    onTouchEnd() {
      this.touch = false;
    }
  },
  computed: {
    toArr() {
      // window.console.log(Object.keys(this.list));
      return Object.keys(this.list);
    }
  },
  created() {},
  mounted() {},
  updated() {
    this.startPos = this.$refs["A"][0].offsetTop;
    this.h = this.$refs["A"][0].offsetHeight;
  }
};
</script>

<style scoped>
.alpha {
  position: absolute;
  right: 0rem;
  bottom: 0;
  top: 0.4rem;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #f04; */
}
.alpha .item {
  padding: 0.1rem;
  border-radius: 0.1rem;
}
.active {
  background: #0cc;
  color: #fff;
}
</style>
