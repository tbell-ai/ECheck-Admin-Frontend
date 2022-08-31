<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>FAQ 목록</h3>
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
            <option value="">기능문의</option>
            <option value="">오류처리</option>
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
          <b>{{ FaqListItem.length }}</b>
          <p>건</p>
        </div>
        <table class="table1">
          <thead>
            <tr>
              <th class="table-no">No</th>
              <th>분류</th>
              <th>질문</th>
              <th>게시기간</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in FaqListItem.slice().reverse()"
              :key="index"
            >
              <td class="table-no">
                {{ FaqListItem.length - index }}
              </td>
              <td>
                {{ item.category }}
              </td>
              <td>
                <router-link to="/faqdetail">{{ item.question }}</router-link>
              </td>
              <td class="table-date">{{ item.period }}</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article class="btn-box1">
        <router-link class="btn-c1 btn-s1" to="/faqcreate">생성</router-link>
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
      FaqListItem: [
        {
          id: 1,
          category: '기타문의',
          question: '전월 지침을 입력하는 이유를 알고싶어요.',
          period: '2021.03.08 ~',
        },
        {
          id: 2,
          category: '기타문의',
          question: '전기요금은 어떤 기준으로 책정되는 건가요?',
          period: '2021.03.08 ~',
        },
        {
          id: 3,
          category: '기능문의',
          question: '앱 초기 사용시 등록한 거주지 정보를 수정할 수 있나요?',
          period: '2021.03.08 ~',
        },
        {
          id: 4,
          category: '오류처리',
          question: '측정불가 화면이 계속 뜹니다.',
          period: '2021.03.08 ~',
        },
        {
          id: 5,
          category: '기능문의',
          question: '거주지 정보 입력 시, 할인 적용이 안됩니다.',
          period: '2021.03.08 ~',
        },
        {
          id: 6,
          category: '기능문의',
          question:
            '이번 달에 전력량을 여러 번 측정했는데 측정 내역에는 한 개의 내역만 나옵니다.',
          period: '2021.03.08 ~',
        },
      ],
    };
  },
};
</script>

<style></style>
