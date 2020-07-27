<template>
  <div class="profile-info">
    <div class="profile-info-item">我的余额</div>
    <div class="profile-info-item">我的优惠</div>
    <div class="profile-info-item">我的积分</div>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo"
};
</script>

<style scoped>
.profile-info {
  display: flex;
  font-size: 15px;
  background-color: pink;
  line-height: 80px;
  height: 80px;
  text-align: center;
}
.profile-info-item {
  flex: 1;
}
</style>