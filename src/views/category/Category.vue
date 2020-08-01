<template>
  <div class="category">
    <nav-bar class="cart-nav">
      <cate-side-nav />
      <div slot="center">分类</div>
    </nav-bar>
    <scroll class="content" :pull-up-load="true" @pullingUp="loadMore" ref="scroll">
      <cate-side-nav :nav-title="navTitle" @indexLoad="indexLoad" />
    </scroll>
    <!-- <scroll class="content" :pull-up-load="true" @pullingUp="loadMore" ref="scroll"> -->
    <cate-menu :goods="goods" />
    <!-- </scroll> -->
  </div>
</template>

<script>
import CateSideNav from "./childComps/CateSideNav";
import CateMenu from "./childComps/CateMenu";
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import { getCategory, getSubCategory } from "network/category";

export default {
  name: "Category",
  data() {
    return {
      maitKey: null,
      currentIndex: 0,
      navTitle: [],
      categoryData: {},
      goods: {}
    };
  },
  components: {
    Scroll,
    CateSideNav,
    NavBar,
    CateMenu
  },
  created() {
    getCategory().then(res => {
      const data = res.data.data.category.list;
      this.navTitle = data;
      console.log(data);
      this.indexLoad(0);
    });
  },
  // activated() {
  //   console.log("-------");
  //   this.$refs.scroll.refresh();
  // },
  methods: {
    loadMore() {
      console.log("上拉加载更多顶顶顶顶顶顶顶顶");
      console.log(this.$refs);
    },
    indexLoad(index) {
      this.currentIndex = index;
      console.log("index:", index);
      this.maitKey = this.navTitle[this.currentIndex].maitKey;
      getSubCategory(this.maitKey).then(res => {
        this.goods = res.data.data;
        console.log(this.goods);
      });
    }
  }
};
</script>

<style scoped>
.category {
  color: #fff;
  border-bottom: 0.5px solid #fff;
  height: 100vh;
  /* position: relative; */
}

.cart-nav {
  background-color: var(--color-tint);
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
  background-color: pink;
}
</style>