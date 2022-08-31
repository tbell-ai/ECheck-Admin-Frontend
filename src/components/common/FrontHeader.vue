<template>
  <header id="header">
    <div class="header-left">
      <h2 id="header-logo">
        <img src="../../assets/images/logo/logo-white.svg" alt="" />
      </h2>
    </div>
    <div class="header-right">
      <b>{{ $store.state.name }}</b>
      <span></span>
      <p class="logout" @click="logoutUser">로그아웃</p>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from '../../utils/cookies.js';
import { logoutUser } from '../../api/auth.js';

export default {
  methods: {
    async logoutUser() {
      const { data } = await logoutUser(this.$store.state.idx);

      if (data.result) {
        deleteCookie('LOGIN_USER_IDX');
        deleteCookie('LOGIN_USER_EMAIL');
        deleteCookie('LOGIN_USER_NICKNAME');

        this.$router.push('/login');
      } else {
        alert('로그아웃에 실패하였습니다.');
      }
    },
  },
};
</script>

<style>
.logout {
  cursor: pointer;
}
</style>
