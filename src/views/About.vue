<template>
  <div class="about">
    <city :list="cities" :pos="pos"></city>
    <alpha :list="cities" @change="onchange"></alpha>
  </div>
</template>
<script>
/* eslint-disable */
import { city } from "@/assets/city.js";
import Alpha from "@/components/Alpha";
import City from "@/components/City";
export default {
  data() {
    return {
      cities: Object,
      scroll: null,
      pos: null
    };
  },
  name: "about",
  methods: {
    onchange(e) {
      // window.console.log("key from alpha:", e);
      this.pos = e;
    }
  },
  mounted() {
    this.cities = city.data.cities;
    // window.console.log(this.cities);
  },
  activated() {
    this.scroll.scrollTo(0, 0);
  },
  components: {
    Alpha,
    City
  },
  watch: {}
};
</script>
<style scoped>

</style>