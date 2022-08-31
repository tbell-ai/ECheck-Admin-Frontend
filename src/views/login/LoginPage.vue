<template>
  <main id="main">
    <div id="grid1">
      <ul class="login">
        <li class="login-title-wrap">
          <h2 class="login-title">ADMIN LOGIN</h2>
          <p>관리자 전용 페이지입니다.</p>
        </li>
        <li class="login-contents">
          <div class="box">
            <input
              id="login-id"
              type="text"
              v-model="user_id"
              v-model.trim="user_id"
              @change="userIdValid"
            />
            <label for="login-id"><span>ID</span></label>
          </div>
          <div class="box">
            <input
              id="login-pw"
              type="password"
              v-model="user_password"
              v-model.trim="user_password"
              @change="userPwValid"
            />
            <label for="login-pw"><span>PW</span></label>
          </div>
          <button
            id="login-btn"
            class="btn-c1 btn-form pointer"
            @click="submitForm()"
          >
            로그인
          </button>
          <p class="caution" v-if="loginFail">
            <img
              src="../../assets/images/icon/icon-caution1.svg"
              alt=""
            />관리자만 접속이 가능합니다.
          </p>
        </li>
        <li>
          <img src="../../assets/images/logo/logo-black.svg" alt="" id="logo" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  data: function () {
    return {
      user_id: '',
      user_password: '',
      loginFail: 0,
    };
  },
  computed: {
    userIdValid() {
      const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}$/;
      return re.test(String(this.userId).toLowerCase());
    },
    userPwValid() {
      const re =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/;
      return re.test(String(this.userPw));
    },
  },
  methods: {
    async submitForm() {
      try {
        const loginData = {
          user_id: this.user_id,
          user_password: this.user_password,
        };

        const result = await this.$store.dispatch('LOGIN', loginData);

        if (result === 200) {
          this.$router.push('/');
        } else {
          this.loginFail = 1;
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 403) {
          this.loginFail = 1;
        }
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.user_id = '';
      this.user_password = '';
    },
  },
};
</script>

<style scoped>
.login {
  box-sizing: border-box;
  border: 1px solid var(--black);
  padding: 40px 70px;
  text-align: center;
}
.login-title-wrap {
  border-bottom: 1px solid var(--black);
  padding-bottom: 25px;
}
.login-title-wrap .login-title {
  font-size: 28px;
  margin-bottom: 5px;
  font-weight: 700;
}
.login-title-wrap p {
  font-size: 22px;
}
.login-contents {
  padding: 50px 0;
}
.login-contents input {
  width: 460px;
  height: 50px;
  padding-top: 16px;
}
.login-contents .box:first-child {
  margin-bottom: 10px;
}
.login-contents .box {
  margin-bottom: 30px;
}
.login-contents .box {
  position: relative;
  width: 460px;
  height: 46px;
}
.login-contents .box span {
  display: block;
  transition: 0.3s;
}
.login-contents .box label {
  position: absolute;
  top: 12px;
  left: 14px;
  font-weight: 700;
  color: var(--grey4);
}
.login-contents .box input:focus + label span,
.login-contents .box input:valid + label span {
  transform: translateY(-8px);
  font-size: 13px;
}

/* 경고 */
.caution {
  margin-top: 10px;
  font-weight: 500;
  color: var(--negative);
}
.caution img {
  margin-right: 5px;
}
</style>
