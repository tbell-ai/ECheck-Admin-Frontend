import { createStore } from 'vuex';
import {
  saveUserToCookie,
  getUserEmailFromCookie,
  getUserNicknameFromCookie,
  getUserIdFromCookie,
  getUserIdxFromCookie,
} from '../utils/cookies.js';
import { loginUser } from '../api/auth.js';

export default createStore({
  state: {
    name: getUserNicknameFromCookie() || '',
    email: getUserEmailFromCookie() || '',
    id: getUserIdFromCookie() || '',
    idx: getUserIdxFromCookie() || '',
    subPage: false,
  },
  getters: {
    isLogin(state) {
      return state.name !== '';
    },
  },
  mutations: {
    setUserNickname(state, name) {
      state.name = name;
    },
    setUserEmail(state, email) {
      state.email = email;
    },
    setUserId(state, id) {
      state.id = id;
    },
    setUserIdx(state, idx) {
      state.idx = idx;
    },
    clearUser(state) {
      state.name = '';
      state.email = '';
      state.id = '';
      state.idx = '';
    },
  },
  actions: {
    async LOGIN({ commit }, loginData) {
      const { data } = await loginUser(loginData);

      // console.log(data);

      if (data.code === '0000') {
        // admin인지 체크
        if (data.result.user_role !== 'admin') {
          return 401;
        } else {
          // Vuex로 상태관리, token 값 저장
          commit('setUserNickname', data.result.user_nickname);
          commit('setUserEmail', data.result.user_email);
          commit('setUserId', data.result.user_id);
          commit('setUserIdx', data.result.user_idx);
          saveUserToCookie(data.result);

          return 200;
        }
      } else {
        return 400;
      }
    },
  },
});
