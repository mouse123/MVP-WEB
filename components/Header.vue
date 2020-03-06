<template>
  <div class="nav">
    <template>
      <nuxt-link to="/" width="200px">
        <img src="~assets/logo.png" alt="logo" style="max-height: 47px;" />
      </nuxt-link>
    </template>
    <ul class="navbar-ui">
      <li class="nav-li" v-for="menu in menus">
        <nuxt-link :style="selectBack(menu)" :to="`${menu.router}`">{{menu.name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menus: [
        {
          router: "/",
          name: "Home"
        },
        {
          router: "/demo",
          name: "Demo"
        },
        {
          router: "/pricing",
          name: "Pricing"
        },
        {
          router: "/docs",
          name: "Docs"
        },
        {
          router: "/getstarted",
          name: "Get Started"
        }
      ]
    };
  },
  async asyncData({ $axios, params, error }) {
    const ip = await $axios.$get("http://icanhazip.com");
    return { ip };
  },
  computed:{
    
  },
  methods: {
    selectBack(menu){
      return this.$route.path == menu.router ? { background: "gray" } : {}
    }
  },
  mounted(){
    
  },
  created() {}
};
</script>

<style scoped>
.nav {
  text-align: left;
  margin: 5px 0;
}
.navbar-ui {
  display: inline-block;
  float: right;
  margin: 20px;
}
.nav-li {
  display: inline-block;
  list-style: none;
  margin: 0 20px;
  cursor: pointer;
}
a {
  color: #fff;
  text-decoration: none;
}
a:hover {
  
}
</style>
