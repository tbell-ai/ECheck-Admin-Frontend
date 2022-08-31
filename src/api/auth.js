/*
 * Auth API
 * 회원가입: /signup - Post
 * 로그인: /login - Post
 */

// 로그인, 회원가입 관련 API
import { instance } from './index.js';

// 로그인 API
function loginUser(loginData) {
  return instance.post('auth/login', loginData);
}

function logoutUser(user_idx) {
  return instance.get(`auth/logout/${user_idx}`);
}

// 인증 리플래쉬 API ( Refresh Token 별도 셋팅 필요 )
function refreshUser() {
  return instance.post('auth/refresh');
}

export { loginUser, logoutUser, refreshUser };
