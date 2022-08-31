<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>1:1 문의 상세</h3>
      </li>
      <div class="title-right">
        <p>CS 관리</p>
        <img src="../../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <p>Q&A 목록</p>
        <img src="../../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <p>Q&A 상세</p>
        <img src="../../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>Q&A 문의 답변</b>
      </div>
    </ul>
    <section>
      <article>
        <table class="table2-1">
          <tr>
            <th>문의 유형</th>
            <td>실시간 전력량 측정 문의</td>
            <th>문의 일자</th>
            <td>2022.04.22</td>
          </tr>
          <tr>
            <th>회원 ID</th>
            <td>hj.park</td>
            <th>회원 이름</th>
            <td>박현진</td>
          </tr>
          <tr>
            <th>문의 상태</th>
            <td>답변완료</td>
            <th>답변 일자</th>
            <td>2022.04.25</td>
          </tr>
          <tr>
            <th>질문</th>
            <td colspan="3">
              전월 지침 입력 가이드를 다시 확인하고 싶은데 어디서 확인해야
              하나요?
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td colspan="3">
              앱 초기 사용 시에는 자동으로 노출되었던 전월 지침 입력 가이드가 더
              이상 노출되지 않아 어디서 확인해야 하는지에 대해 문의드립니다.
            </td>
          </tr>
          <tr>
            <th>답변</th>
            <td colspan="3">
              안녕하세요. 박현진님 <br />
              <br />
              우선 저희 E-Check를 이용해주셔서 감사합니다.
              <br />
              E-Check의 거주지 정보 입력 첫번째 단계화면에 있는 우측상단 물음표
              버튼 클릭을 통해 전월 지침 입력 가이드를 언제든 확인해보실 수
              있습니다. <br />
              <br />
              추가적인 궁금한 점이 있으시면 언제든 문의부탁드립니다. <br />
              감사합니다.
            </td>
          </tr>
        </table>
      </article>
      <article class="btn-box1">
        <router-link class="btn-c2 btn-s1" to="/asklist">목록 </router-link>

        <router-link to="/askanswer">
          <button
            class="btn-c1 btn-s1 pointer"
            v-if="answerStatus == 'unanswered'"
          >
            답변하기
          </button>
        </router-link>
      </article>
    </section>
    <section>
      <article class="pagination">
        <button id="page-first">
          <img src="../../../assets/images/icon/icon-first.svg" alt="" />
        </button>
        <button id="page-prev">
          <img src="../../../assets/images/icon/icon-prev.svg" alt="" />
        </button>
        <button><span>1</span></button>
        <button><span>2</span></button>
        <button><span>3</span></button>
        <button><span>4</span></button>
        <button><span>5</span></button>
        <button id="page-next">
          <img src="../../../assets/images/icon/icon-next.svg" alt="" />
        </button>
        <button id="page-last">
          <img src="../../../assets/images/icon/icon-last.svg" alt="" />
        </button>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return { answerStatus: 'unanswered' };
  },
};
</script>

<style></style>
