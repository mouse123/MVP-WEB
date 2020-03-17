<template>
  <div><logo /></div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      
    };
  },
  async asyncData({ $axios, params, error }) {
    let comps = [];
    for (let i = 1; i < 100; i++) {
      comps.push(await $axios.$get(`http://127.0.0.1:8089/company/${i}`))
    }
    console.log(comps)
    const ip = await $axios.$get("http://icanhazip.com");
    return { ip, comps };
  },
  methods: {
    
  },
  created() {
    console.log(this.comps)
  }
};
</script>

<style>

</style>
