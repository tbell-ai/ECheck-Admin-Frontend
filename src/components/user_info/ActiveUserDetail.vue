<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>활성회원 상세정보</h3>
      </li>
      <div class="title-right">
        <p>회원정보 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <p>활성회원</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>활성회원 상세정보</b>
      </div>
    </ul>
    <section>
      <article>
        <div class="table-top">
          <b>{{ userData.user_id }}</b> 님
        </div>
        <table class="table2">
          <tr>
            <th>닉네임</th>
            <td>{{ userData.user_nickname }}</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>{{ userData.user_email }}</td>
          </tr>
          <tr>
            <th>상태</th>
            <td>{{ userData.user_state }}</td>
          </tr>
          <tr>
            <th>최초 가입일</th>
            <td>{{ userData.user_create_date }}</td>
          </tr>
          <tr>
            <th>마지막 정보 수정일</th>
            <td>{{ userData.user_last_modify_date }}</td>
          </tr>
          <tr>
            <th>이메일 인증 여부</th>
            <td>{{ userData.user_email_yn }}</td>
          </tr>
          <tr>
            <th>이용약관 동의 여부</th>
            <td>{{ userData.user_term_yn }}</td>
          </tr>
          <tr>
            <th>개인정보 수집 및 이용 동의 여부</th>
            <td>{{ userData.user_collection_yn }}</td>
          </tr>
          <tr>
            <th>개인정보 처리방침 동의 여부</th>
            <td>{{ userData.user_privacy_yn }}</td>
          </tr>
          <tr>
            <th>마지막 로그인 일시</th>
            <td>{{ userData.user_last_login_date }}</td>
          </tr>
          <tr>
            <th>마지막 로그인 IP</th>
            <td>{{ userData.user_last_login_ip }}</td>
          </tr>
          <tr>
            <th>마지막 로그인 정보</th>
            <td>{{ userData.user_last_login_device }}</td>
          </tr>
        </table>
      </article>
      <aticle class="btn-box1">
        <router-link class="btn-c2 btn-s1" to="/activelist">목록</router-link>
      </aticle>
    </section>
  </div>
</template>

<script>
import { fetchUser } from '../../api/user.js';

export default {
  created() {
    this.fetchData();
  },
  data() {
    return {
      userData: {},
    };
  },
  methods: {
    async fetchData() {
      const user_idx = this.$route.params.idx;
      const { data } = await fetchUser(user_idx);
      this.userData = data.result;
    },
    routeCompanyList() {
      this.$router.push('/activelist');
    },
  },
};
</script>

<style></style>
