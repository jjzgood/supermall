<template>
  <div class="category">
    <nav-bar class="cart-nav">
      <cate-side-nav />
      <div slot="center">分类</div>
    </nav-bar>
    <cate-side-nav :nav-title="navTitle" />
    <scroll class="contentt" :pull-up-load="true" @pullingUp="loadMore" ref="scroll"></scroll>
  </div>
</template>

<script>
import CateSideNav from "./childComps/CateSideNav";
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import { getCategory } from "network/category";

export default {
  name: "Category",
  data() {
    return {
      navTitle: []
    };
  },
  components: {
    Scroll,
    CateSideNav,
    NavBar
  },
  created() {
    getCategory().then(res => {
      const data = res.data.data.category.list;
      this.navTitle = data;
      console.log(data);
    });
  },
  methods: {
    loadMore() {
      console.log("上拉加载更多顶顶顶顶顶顶顶顶");
      console.log(this.$refs);
    }
  }
};
</script>

<style scoped>
.category {
  background-color: var(--color-tint);
  color: #fff;
  border-bottom: 0.5px solid #fff;
}
.contentt {
  height: 300px;
  background-color: pink;
  overflow: hidden;
}
</style>