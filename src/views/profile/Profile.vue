<template>
  <div class="profile">
    <nav-bar class="cart-nav">
      <div slot="center">我的档案</div>
    </nav-bar>
    <login />
    <profile-info />
  </div>
</template>
Login
<script>
import NavBar from "components/common/navbar/NavBar";

import Login from "./childComps/Login";
import ProfileInfo from "./childComps/ProfileInfo";

export default {
  name: "Profile",
  components: {
    NavBar,
    Login,
    ProfileInfo
  }
};
</script>

<style scoped>
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  border-bottom: 0.5px solid #fff;
}
</style>