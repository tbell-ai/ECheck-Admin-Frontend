function saveUserToCookie(data) {
  document.cookie = `LOGIN_USER_EMAIL=${data.user_email}`;
  document.cookie = `LOGIN_USER_NICKNAME=${data.user_nickname}`;
  document.cookie = `LOGIN_USER_IDX=${data.user_idx}`;
}

function getUserEmailFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)LOGIN_USER_EMAIL\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getUserNicknameFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)LOGIN_USER_NICKNAME\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getUserIdFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)LOGIN_USER_ID\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getUserIdxFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)LOGIN_USER_IDX\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveUserToCookie,
  getUserEmailFromCookie,
  getUserNicknameFromCookie,
  getUserIdFromCookie,
  getUserIdxFromCookie,
  deleteCookie,
};
