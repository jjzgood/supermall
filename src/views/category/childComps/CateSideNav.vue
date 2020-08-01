<template>
  <div class="cate-side-nav">
    <ul class="nav-title">
      <li
        class="nav-item"
        v-for="(item,index) in navTitle"
        :key="item.index"
        @click="itemCick(index)"
        :class="{active:index == cureetIndex}"
      >{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CateSideNav",
  props: {
    navTitle: {
      type: Array,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      cureetIndex: 0
    };
  },
  methods: {
    itemCick(index) {
      //   console.log("itemClick:", index);
      this.cureetIndex = index;
      this.$emit("indexLoad", index);
    }
  }
};
</script>
<style scoped>
.nav-title {
  font-size: 15px;
  background-color: #fff;
  width: 100px;
  color: #666;
  text-align: center;
}

.nav-item {
  padding: 10px 8px;
}

.active {
  background-color: #666;
  color: #fff;
  font-size: 20px;
}
</style>