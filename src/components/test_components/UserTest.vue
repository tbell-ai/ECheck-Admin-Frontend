<template>
  <div>
    <form @submit.prevent="submitForm" class="wrap-type-1">
      <article>
        <div class="table-top">
          <p>회원가입 기능 테스트</p>
        </div>
        <table class="table2-1">
          <tr>
            <th>회원 아이디</th>
            <td>
              <input type="text" v-model="user_id" />
            </td>
          </tr>
          <tr>
            <th>회원 비밀번호</th>
            <td>
              <input type="text" v-model="user_password" />
              <div class="warning-area" v-if="!isPasswordCheck">
                <span>비밀번호 형식에 맞춰 입력해주세요.</span>
              </div>
            </td>
          </tr>
          <tr>
            <th>회원 닉네임</th>
            <td>
              <input type="text" v-model="user_nickname" />
            </td>
          </tr>
          <tr>
            <th>회원 이메일</th>
            <td>
              <input type="text" v-model="user_email" />
              <div class="warning-area" v-if="!isEmailCheck">
                <span>올바르지 않은 이메일 주소 형식입니다.</span>
              </div>
            </td>
          </tr>
          <tr>
            <th>회원 이메일 인증 여부</th>
            <td>
              <input type="text" v-model="user_email_yn" />
            </td>
          </tr>
          <tr>
            <th>회원 이용약관 동의 여부</th>
            <td>
              <input type="text" v-model="user_term_yn" />
            </td>
          </tr>
          <tr>
            <th>회원 개인정보 수집 및 이용 동의 여부</th>
            <td>
              <input type="text" v-model="user_collection_yn" />
            </td>
          </tr>
          <tr>
            <th>회원 개인정보 처리방침 동의 여부</th>
            <td>
              <input type="text" v-model="user_privacy_yn" />
            </td>
          </tr>
        </table>
      </article>
      <article class="btn-box1">
        <button
          class="btn-c1 btn-s1"
          :disabled="!isPasswordCheck || !isEmailCheck"
          id="btn-signup"
          type="submit"
        >
          회원가입
        </button>
      </article>
    </form>
  </div>
</template>

<script>
import { registerUser } from '../../api/user.js';

export default {
  data: function () {
    return {
      user_id: '',
      user_password: '',
      user_nickname: '',
      user_email: '',
      user_email_yn: 0,
      user_term_yn: 1,
      user_collection_yn: 1,
      user_privacy_yn: 1,
    };
  },
  computed: {
    isEmailCheck() {
      const re =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
      return re.test(String(this.user_email).toLowerCase());
    },
    isPasswordCheck() {
      const re =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/;
      return re.test(String(this.user_password));
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        user_id: this.user_id,
        user_password: this.user_password,
        user_nickname: this.user_nickname,
        user_email: this.user_email,
        user_email_yn: this.user_email_yn,
        user_term_yn: this.user_term_yn,
        user_collection_yn: this.user_collection_yn,
        user_privacy_yn: this.user_privacy_yn,
      };

      const { data } = await registerUser(userData);

      console.log(data);
    },
  },
};
</script>

<style>
.warning-area {
  color: red;
}
</style>
