<template>
  <div>
    <p class="p-copyright">{{copyright}}</p>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data() {
    return {
      copyright: "© Mouse Lin 2019"
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
.p-copyright {
  margin: 24px 0 0;
  text-align: center;
  font-size: 1.2rem;
}
</style>
