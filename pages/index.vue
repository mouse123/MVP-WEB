<template>
  <div>
    <carousel />
    <h2>ip:{{ip}}</h2>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Carousel from "~/components/Carousel";

export default {
  components: {
    Logo,
    Carousel
  },
  data() {
    return {
      
    };
  },
  //asyncData方法会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用。
  async asyncData({ $axios, params, error }) {
    try {
      console.log("zhixing~~~~")
      const ip = await $axios.$get("http://icanhazip.com");
      return { ip };
    } catch (error) {
      
    }
  },
  methods: {
    
  },
  created() {
    
  }
};
</script>

<style>

</style>
