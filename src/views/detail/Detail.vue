<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";

import { getDetail } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages: []
    };
  },
  created() {
    // 保存iid
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      //   console.log(res.data);
      this.topImages = res.data.result.itemInfo.topImages;
      console.log(this.topImages);
    });
  }
};
</script>

<style scoped>
</style>