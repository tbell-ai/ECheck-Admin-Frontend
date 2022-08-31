/*
 * 회원 API
 * E-Check 플랫폼 회원을 관리하는 API
 *
 * 회원 생성(회원 가입): /user/create_user - POST
 * 아이디 중복 체크: /user/check_user?user_id={id} - GET
 * 회원 목록 조회: /user/user_all?take={take-number}&page={page-number}&type={user-type} - GET
 * 회원 정보 상세조회: /user/read_user?idx={idx} - GET
 * 회원 권한 변경: /user/update_role/{user_idx} - PATCH
 * 회원 상태 변경: /user/update_state - PATCH
 * 회원 정보 수정: /user/update_user/{user_idx} - PATCH
 * 회원 이메일 인증 여부 수정: /user/update_email_yn/{user_idx} - PATCH
 * 회원 탈퇴 처리: /user/delete_user/{user_idx} - PATCH
 * 탈퇴회원 완전 삭제 처리: /user/remove_user?user_idx={user_idx}
 * */

// 사용자 정보 조회, 수정, 삭제 API
import { instance } from './index.js';

// 회원가입 API (2022. 07. 25 현재 관리자 생성 기능은 관리자 화면에서 따로 사용 안하고 있음)
function registerUser(userData) {
  return instance.post('user/create_user', userData);
}

// 아이디 중복 체크 API
function checkUser(user_id) {
  return instance.get('user/check_user?user_id=' + user_id);
}

// 회원 목록 조회 API
function fetchUsers(param) {
  const url =
    'user/user_all?take=' +
    param.take +
    '&page=' +
    param.page +
    '&type=' +
    param.type;
  return instance.get(url);
}

// 회원 정보 상세조회 API
function fetchUser(user_idx) {
  return instance.get('user/read_user?idx=' + user_idx);
}

// 회원 권한 변경 API
function editUserRole(user_idx) {
  return instance.patch('user/update_role/' + user_idx);
}

// 회원 상태 변경 API
function editUserState(updateData) {
  return instance.patch('user/update_state', updateData);
}

// 회원 정보 수정 API
function editUser(user_idx, userData) {
  return instance.patch(`user/update_user/${user_idx}`, userData);
}

// 회원 이메일 인증여부 수정 API
function editEmailYn(user_idx) {
  return instance.patch(`user/update_email_yn/${user_idx}`);
}

// 회원 탈퇴처리 API
function deleteUser(user_idx) {
  return instance.delete(`user/delete_user/${user_idx}`);
}

// 회원 삭제처리 API
function removeUser(user_idx) {
  return instance.delete('user/remove_user?user_idx=' + user_idx);
}

export {
  registerUser,
  checkUser,
  fetchUsers,
  fetchUser,
  editUserRole,
  editUserState,
  editUser,
  editEmailYn,
  deleteUser,
  removeUser,
};
