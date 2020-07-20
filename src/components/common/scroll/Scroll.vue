<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },

  mounted() {
    // 创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    // this.scroll.refresh();
    // console.log(this.scroll);
    // console.log(this.$refs.wrapper);
    // console.log(document.querySelector(".wrapper").offsetHeight);
    // console.log(document.querySelector(".content").offsetHeight);

    //监听滚动的位置
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });

    //监听上拉加载事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },

  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      console.log("--------");
      this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
/* .contentt {
  height: 10000px;
} */
</style>

