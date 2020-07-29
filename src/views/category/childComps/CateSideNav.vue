<template>
  <div class="cate-side-nav">
    <ul class="nav-title">
      <li class="nav-item" v-for="item in navTitle" :key="item.index">{{item.title}}</li>
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
  methods: {}
};
</script>
<style scoped>
.nav-title {
  font-size: 20px;
  background-color: blue;
  width: 100px;
}

.nav-item {
  padding: 10px 8px;
}
</style>