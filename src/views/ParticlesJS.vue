<template>
  <div id="particles-js"></div>
</template>

<script>
/* eslint-disable */
import particlesJs from "particles.js";
import particlesConfig from "../assets/star.json";
export default {
  name: "ParticlesJS",
  mounted() {
    // require("particles.js");
    // this.$nextTick(() => {
    this.initParticlesJS();
    // });
  },
  methods: {
    initParticlesJS() {
      particlesJS("particles-js", particlesConfig);
    }
  }
};
</script>
 
<style scoped>
#particles-js {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: rgb(7, 53, 66);
  /* background-color: #b61924; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>