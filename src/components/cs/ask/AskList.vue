<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>1:1 문의 목록</h3>
      </li>
      <div class="title-right">
        <p>CS 관리</p>
        <img src="../../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <p>FAQ 관리</p>
        <img src="../../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>FAQ 목록</b>
      </div>
    </ul>
    <section>
      <article>
        <div class="filter">
          <select name="" id="">
            <option value="">전체</option>
            <option value="">계정문의</option>
            <option value="">실시간 전력량 측정 문의</option>
            <option value="">전기 요금 문의</option>
            <option value="">기능 문의</option>
            <option value="">기타문의</option>
            <input type="search" />
            <button id="search" class="btn-c1 btn-s1">검색</button>
          </select>
        </div>
      </article>
    </section>
    <section>
      <article class="dashboard-ask">
        <div class="table-top">
          <p>총</p>
          <b>{{ AskListItem.length }}</b>
          <p>건</p>
        </div>
        <table class="table1">
          <thead>
            <tr>
              <th class="table-no">No</th>
              <th>문의유형</th>
              <th>질문</th>
              <th>회원 ID</th>
              <th>게시일자</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in AskListItem" :key="index">
              <td class="table-no">
                {{ index + 1 }}
              </td>
              <td>
                {{ item.category }}
              </td>
              <td>
                <router-link to="/askdetail">{{ item.question }}</router-link>
              </td>
              <td>{{ item.userId }}</td>
              <td class="table-date">{{ item.date }}</td>
              <td>{{ item.status }}</td>
            </tr>
          </tbody>
        </table>
      </article>

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
    return {
      AskListItem: [
        {
          id: 1,
          category: '실시간 전력량 측정 문의',
          question:
            '전월 지침 입력 가이드를 다시 확인하고 싶은데 어디서 확인해야 하나요?',
          userId: 'hj.park',
          date: '2022.04.22',
          status: '답변완료',
        },
        {
          id: 2,
          category: '전기 요금 문의',
          question:
            '필수사용량 보장공제 혜택을 받으려면 별도의 신청이 필요한 건가요?',
          userId: 'hj.park',
          date: '2022.05.10',
          status: '미등록',
        },
      ],
    };
  },
};
</script>

<style></style>
