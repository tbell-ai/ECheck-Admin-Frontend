<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>FAQ 수정</h3>
      </li>
      <div class="title-right">
        <p>CS 관리</p>
        <img src="../../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <p>FAQ 관리</p>
        <img src="../../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <p>FAQ 목록</p>
        <img src="../../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>FAQ 상세</b>
      </div>
    </ul>
    <section>
      <article>
        <table class="table2-1">
          <tr>
            <th>분류</th>
            <td colspan="3">
              <select class="btn-s4" name="" id="">
                <option value="">계정문의</option>
                <option value="">기능문의</option>
                <option value="">오류처리</option>
                <option value="">기타문의</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>게시기간</th>
            <td colspan="3">
              <ul class="align1">
                <li class="radio-wrap">
                  <input type="checkbox" id="faq-date-fix" />
                  <label for="faq-date-fix"><span>상시</span></label>
                </li>
                <li class="radio-wrap">
                  <input type="checkbox" id="faq-date-set" />
                  <label for="faq-date-set"><span>직접 설정</span></label>
                </li>
                <li>
                  <input type="date" />
                  <span class="wave">~</span>
                  <input type="date" />
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>질문</th>
            <td colspan="3">전월 지침을 입력하는 이유를 알고 싶어요.</td>
          </tr>
          <tr>
            <th>답변</th>
            <td colspan="3">
              이번달 사용 전력량은 '현재 누적 유효 전력량'에서 '전월 지침(전월
              누적 유효전력량)'을 제외한 값입니다. <br />전기 요금은 이번달 사용
              전력량으로 계산되기 때문에 정확한 예상 전기 요금을 제공해드리기
              위해 전월 지침 입력은 반드시 필요합니다.
            </td>
          </tr>
        </table>
      </article>
      <aticle class="btn-box1">
        <router-link class="btn-c1 btn-s1" to="/faqlist">저장</router-link>
      </aticle>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
