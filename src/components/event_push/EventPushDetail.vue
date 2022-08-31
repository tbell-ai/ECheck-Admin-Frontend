<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>PUSH 발송 상세</h3>
      </li>
      <div class="title-right">
        <p>PUSH 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <p>PUSH 발송 목록</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>PUSH 발송 상세</b>
      </div>
    </ul>
    <section>
      <article>
        <table class="table2">
          <tr>
            <th>메시지 유형</th>
            <td>안내</td>
          </tr>
          <tr>
            <th>PUSH 제목</th>
            <td>공급약관 및 시행세칙 개정사항 안내드립니다.</td>
          </tr>
          <tr>
            <th>PUSH 내용</th>
            <td>
              한국전력에서 안내된 개정으로 안전중심 전기사용 환경을 구축하여
              전기안전을 강화하고<br />
              IT기반 전력서비스 확대를 통해 고객편의를 제고하기 위한
              기본공급약관/시행세칙 개정 및 시행에 대한 안내이다.
              <br /><br />
              1. 전기사용장소 출입사유에 휴전 안내사유 추가 및
              전기사용(변경)신청서 관련 내용 명시<br />
              2. IT 청구 우선적용 근거 신설<br />
              3. 환경변화에 신속하게 대응하는 유연한 서식 관리/운영을 위한
              기본공급약관 별지서식의 시행세칙 이관
              <br />
              <br />위의 개정사항은 <b>2022.05.01</b>일자로 시행된다.
            </td>
          </tr>
          <tr>
            <th>발송방법</th>
            <td>예약발송</td>
          </tr>
          <tr>
            <th>발송수</th>
            <td>1</td>
          </tr>
          <tr>
            <th>실패수</th>
            <td>0</td>
          </tr>
          <tr>
            <th>수신확인</th>
            <td>1</td>
          </tr>
          <tr>
            <th>발송일시</th>
            <td>2021.12.29</td>
          </tr>
          <tr>
            <th>발송상태</th>
            <td>발송완료</td>
          </tr>
        </table>
      </article>
      <aticle class="btn-box1">
        <router-link class="btn-c2 btn-s1" to="eventpushlist">목록</router-link>
      </aticle>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return { pushData: {} };
  },
};
</script>

<style></style>
