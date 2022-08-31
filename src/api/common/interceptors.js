import store from '../../store/index.js';

export function setInterceptors(instance) {
  // 요청 인터셉터
  instance.interceptors.request.use(
    function (config) {
      // 요청 전에 인증 토큰을 셋팅한다.
      config.headers.Authorization = store.state.token;
      return config;
    },
    function (error) {
      // 요청 에러 처리
      return Promise.reject(error);
    },
  );

  // 응답 인터셉터
  instance.interceptors.response.use(
    function (response) {
      // 응답 상태코드가 200번대 범위 내에 있을 때, 행당 함수의 트리거가 실행된다.
      return response;
    },
    function (error) {
      // 응답 상태코드가 200번대 범위를 벗어나는 경우, 해당 함수의 트리거가 실행된다.
      return Promise.reject(error);
    },
  );

  return instance;
}
