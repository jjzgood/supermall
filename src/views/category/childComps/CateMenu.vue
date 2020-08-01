<template>
  <div class="cate-menu">
    <button class="btn">{{goods.info.title}}</button>
    <div class="goods">
      <div v-for="item in goods.list" :key="item.index" class="goods-item">
        <img :src="item.image" :alt="item.title" />
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CateMenu",
  props: {
    goods: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.cate-menu {
  color: black;
  position: fixed;
  top: 50px;
  left: 110px;
  right: 4px;
  background-color: rgba(253, 247, 247, 0.972);
}

.btn {
  margin-top: 10px;
  width: 100%;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 20px;
  background-color: #fff;
}
.goods {
  font-size: 10px;
  display: flex;
  flex-wrap: wrap;
  /* background-color: blue; */
  text-align: center;
  color: #666;
}

.goods-item {
  margin: 5px 0 0 5px;
  border-radius: 10px;
  border: 0.1px solid #fff;
}

.goods img {
  width: 80px;
  height: 80px;
}
</style>