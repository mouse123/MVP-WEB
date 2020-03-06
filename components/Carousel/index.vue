<template>
  <div>
    <el-carousel :interval="5000" type="card">
      <el-carousel-item v-for="url in urls" :key="url">
        <el-image :key="url" :src="url" ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { CarouselImage } from './carousel-img';
export default {
  components: {},
  data() {
    return {
      urls: CarouselImage
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
