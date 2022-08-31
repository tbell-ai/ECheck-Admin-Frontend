<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>PUSH 발송 목록</h3>
      </li>
      <div class="title-right">
        <p>Event 푸시 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>PUSH 발송 목록</b>
      </div>
    </ul>
    <section>
      <article class="filter-border">
        <div class="fliter2">
          <ul class="align1">
            <li class="filter2-title">기간</li>
            <li>
              <Datepicker
                v-model="date"
                range
                multiCalendars
                :enableTimePicker="false"
              />
            </li>
          </ul>
          <div class="btn-box1">
            <button class="btn-c1 btn-s1">검색</button>
          </div>
        </div>
      </article>
    </section>
    <section>
      <article>
        <div class="table-top">
          <p>총</p>
          <b>{{ PushListItem.length }}</b>
          <p>건</p>
        </div>
        <table class="table1">
          <thead>
            <tr>
              <th>No</th>
              <th>메시지 유형</th>
              <th>PUSH 타이틀</th>
              <th>발송 수</th>
              <th>실패 수</th>
              <th>수신확인</th>
              <th>발송일시</th>
              <th>발송상태</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in PushListItem.slice().reverse()"
              :key="index"
            >
              <th class="table-no">
                {{ index + 1 }}
              </th>
              <td>
                {{ item.type }}
              </td>
              <td>
                <router-link to="/eventpushdetail">{{
                  item.title
                }}</router-link>
              </td>
              <td>
                {{ item.count }}
              </td>
              <td>
                {{ item.failcount }}
              </td>
              <td>
                {{ item.acknowledgment }}
              </td>
              <td class="table-date">{{ item.date }}</td>
              <td>
                <button class="resend" v-if="item.status === '발송완료'">
                  재발송
                </button>
                <span v-if="item.status !== '발송완료'">
                  {{ item.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
      <aticle class="btn-box2">
        <router-link to="/eventpushcreate"
          ><button class="btn-c1 btn-s1">추가</button></router-link
        >
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
      PushListItem: [
        {
          id: 1,
          type: '안내',
          title: '공급약관 및 시행세칙 개정사항 안내드립니다.',
          count: '1',
          failcount: '0',
          acknowledgment: '1',
          date: '2021.12.29',
          status: '발송완료',
        },
        {
          id: 1,
          type: '이벤트',
          title: '세상에 이런 신기한 에너지 절약제품 보셨어요~?',
          count: '2',
          failcount: '0',
          acknowledgment: '1',
          date: '2022.03.07',
          status: '발송대기',
        },

        {
          id: 1,
          type: '안내',
          title:
            '2022년 4~6월분 연료비조정단가 산정내역 변동사항 안내드립니다.',
          count: '1',
          failcount: '0',
          acknowledgment: '1',
          date: '2022.03.29',
          status: '발송완료',
        },
        {
          id: 1,
          type: '공지',
          title: '서비스 점검시간 공지드립니다.',
          count: '2',
          failcount: '1',
          acknowledgment: '1',
          date: '2022.05.01',
          status: '발송완료',
        },
        {
          id: 1,
          type: '이벤트',
          title: '에너지 절약하시는 분께 선물을 드립니다~!',
          count: '1',
          failcount: '1',
          acknowledgment: '0',
          date: '2022.05.06',
          status: '발송실패',
        },
      ],
    };
  },
};
</script>

<style></style>
