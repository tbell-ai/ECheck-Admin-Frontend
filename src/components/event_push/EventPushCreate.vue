<template>
  <div class="main-area">
    <section>
      <ul class="title">
        <li class="title-left">
          <h3>PUSH 생성</h3>
        </li>
        <div class="title-right">
          <p>Event 푸시 관리</p>
          <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
          <b>PUSH 생성</b>
        </div>
      </ul>
      <article>
        <table class="table5">
          <tr>
            <th>발송유형</th>
            <td>
              <div class="filter">
                <select name="" id="" v-model="pushFilter">
                  <option value="event">이벤트</option>
                  <option value="guide">안내</option>
                  <option value="notice">공지</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <th>발송 일자</th>
            <td>
              <ul class="align1">
                <li class="radio-wrap">
                  <input
                    type="radio"
                    name="shipment-time"
                    id="shipment-time1"
                    v-model="pushDate"
                    value="Now"
                  />
                  <label for="shipment-time1">즉시 발송</label>
                </li>
                <li class="radio-wrap">
                  <input
                    type="radio"
                    name="shipment-time"
                    id="shipment-time2"
                    v-model="pushDate"
                    value="Reservation"
                  />
                  <label for="shipment-time2">예약 발송</label>
                </li>
                <Datepicker
                  v-model="date"
                  v-if="pushDate == 'Reservation'"
                ></Datepicker>
              </ul>
            </td>
          </tr>
          <tr>
            <th>PUSH 제목</th>
            <td>
              <input
                type="text"
                v-model="pushTitle"
                v-model.trim="pushTitle"
                @change="pushTitleValid()"
              />
            </td>
          </tr>
          <tr>
            <th>PUSH 내용</th>
            <td>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                v-model="pushContent"
                v-model.trim="pushContent"
                @change="pushContentValid()"
              ></textarea>
            </td>
          </tr>
        </table>
      </article>
    </section>
    <section>
      <article class="btn-box1">
        <button class="btn-c1 btn-s1">저장</button>
      </article>
    </section>
  </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  components: { Datepicker },
  data() {
    return {
      date: null,
      pushFilter: 'event',
      pushTitle: '',
      pushContent: '',
      pushDate: 'Now',
    };
  },
  methods: {
    pushTitleValid: function () {
      if (this.pushTitle.length > 50 || this.pushTitle.length < 1) {
        alert('PUSH 제목은 1~50자로 입력해주세요.');
      }
      return this.pushTitle;
    },
    pushContentValid: function () {
      if (this.pushContent.length > 250 || this.pushContent.length < 1) {
        alert('PUSH 내용은 1~250자로 입력해주세요.');
      }
      return this.pushContent;
    },
  },
};
</script>

<style scoped></style>
