<template>
  <div class="home">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="40"
      shapeType="polygon"
      :particleSize="4"
      linesColor="#ffffff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="100"
      :moveSpeed="4"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    ></vue-particles>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "home",
  methods: {},
  mounted() {}
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
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  /* background-position: 50% 50%; */
}
</style>

