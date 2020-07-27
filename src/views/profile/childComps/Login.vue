<template>
  <div class="login">
    <img src="~assets/img/profile/avatar.svg" />
    <ul class="login-in">
      <li>登录/注册</li>
      <li class="phone">
        <img src="~assets/img/profile/phone.svg" />
        <span>暂无绑定手机号</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>
<style scoped>
.login {
  display: flex;
  background-color: var(--color-tint);
  line-height: 44px;
  text-align: center;
  height: 100px;
}
.login img {
  margin-left: 20px;
  height: 80px;
  width: 80px;
}
.login-in {
  color: #fff;
  list-style-type: none;
  font-size: 20px;
}

.login-in .phone img {
  width: 20px;
  height: 20px;
}
.login-in .phone span {
  font-size: 15px;
}
</style>