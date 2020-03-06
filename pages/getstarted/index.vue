<template>
  <div><logo />Get Started</div>
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
    const ip = await $axios.$get("http://icanhazip.com");
    return { ip };
  },
  methods: {
    
  },
  created() {
    
  }
};
</script>

<style>

</style>
