<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>FAQ 생성</h3>
      </li>
      <div class="title-right">
        <p>CS 관리</p>
        <img src="../../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <p>FAQ 관리</p>
        <img src="../../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <p>FAQ 목록</p>
        <img src="../../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>FAQ 생성</b>
      </div>
    </ul>
    <section>
      <article>
        <table class="table5">
          <tr>
            <th>발송유형</th>
            <td>
              <div class="filter">
                <select name="" id="" v-model="faqFilter">
                  <option value="account">계정문의</option>
                  <option value="function">기능문의</option>
                  <option value="error">오류처리</option>
                  <option value="etc">기타문의</option>
                </select>
              </div>
            </td>
          </tr>

          <tr>
            <th>게시기간</th>
            <td colspan="3">
              <ul class="align1">
                <li class="radio-wrap">
                  <input
                    type="radio"
                    name="faq-date-set1"
                    id="faq-date-set1"
                    v-model="faqPeriod"
                    value="Always"
                  />
                  <label for="faq-date-set1">항시</label>
                </li>
                <li class="radio-wrap">
                  <input
                    type="radio"
                    name="faq-date-set2"
                    id="faq-date-set2"
                    v-model="faqPeriod"
                    value="Custom"
                  />
                  <label for="faq-date-set2">직접 설정</label>
                </li>
                <li class="date-wrap" v-if="faqPeriod == 'Custom'">
                  <Datepicker v-model="date" range multiCalendars></Datepicker>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>질문</th>
            <td>
              <textarea
                type="text"
                v-model="faqQuestion"
                v-model.trim="faqQuestion"
                @change="faqQuestionValid()"
              ></textarea>
            </td>
          </tr>
          <tr>
            <th>답변</th>
            <td>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                v-model="faqAnswer"
                v-model.trim="faqAnswer"
                @change="faqAnswerValid()"
              ></textarea>
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
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  components: { Datepicker },

  data: function () {
    return {
      date: null,
      faqFilter: 'account',
      faqPeriod: 'Always',
      faqQuestion: '',
      faqAnswer: '',
    };
  },
  methods: {
    faqQuestionValid: function () {
      if (this.faqQuestion.length > 100 || this.faqQuestion.length < 1) {
        alert('질문은 1~100자로 입력해주세요.');
      }
      return this.faqQuestion;
    },
    faqAnswerValid: function () {
      if (this.faqAnswer.length > 300 || this.faqAnswer.length < 1) {
        alert('답변은 1~300자로 입력해주세요.');
      }
      return this.faqAnswer;
    },
  },
};
</script>

<style scoped>
.date-wrap {
  display: flex;
}
</style>
