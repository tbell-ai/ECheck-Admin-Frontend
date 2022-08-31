<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>측정내역</h3>
      </li>
      <div class="title-right">
        <p>측정내역 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>측정내역</b>
      </div>
    </ul>
    <article>
      <div class="filter">
        <b class="filter-sub"> 전력량계 종류 </b>
        <select name="" id="">
          <option value="">전체</option>
          <option value="">기계식</option>
          <option value="">전자식(E-type)</option>
        </select>
        <b class="filter-sub"> 인식여부 </b>
        <select name="" id="">
          <option value="">전체</option>
          <option value="">성공</option>
          <option value="">실패</option>
        </select>
        <button id="search" class="btn-c1 btn-s1">검색</button>
      </div>
    </article>
    <section>
      <article>
        <div class="table-top">
          <p>총</p>
          <b> {{ MeasureHistoryListItem.length }} </b>
          <p>건</p>
        </div>
        <table class="table1">
          <thead>
            <tr>
              <th class="table-no">No</th>
              <th>회원 ID</th>
              <th>전력량계 종류</th>
              <th>측정결과</th>
              <th>인식여부</th>
              <th>측정일시</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in MeasureHistoryListItem.slice().reverse()"
              :key="index"
            >
              <td class="table-no">
                {{ index + 1 }}
              </td>
              <td>
                <router-link to="/measuredetail">{{ item.userId }}</router-link>
              </td>
              <td>{{ item.sort }}</td>
              <td>{{ item.measureResult }}</td>
              <td class="table-date">{{ item.recognitionYN }}</td>
              <td class="table-date">{{ item.date }}</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article class="pagination">
        <button id="page-first">
          <img src="../../assets/images/icon/icon-first.svg" alt="" />
        </button>
        <button id="page-prev">
          <img src="../../assets/images/icon/icon-prev.svg" alt="" />
        </button>
        <button><span>1</span></button>
        <button><span>2</span></button>
        <button><span>3</span></button>
        <button><span>4</span></button>
        <button><span>5</span></button>
        <button id="page-next">
          <img src="../../assets/images/icon/icon-next.svg" alt="" />
        </button>
        <button id="page-last">
          <img src="../../assets/images/icon/icon-last.svg" alt="" />
        </button>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      MeasureHistoryListItem: [
        {
          id: 1,
          userId: 'tbell',
          sort: '기계식',
          measureResult: 7092,
          recognitionYN: 'Y',
          date: '2021.05.07 17:20',
        },
        {
          id: 2,
          userId: 'tbell',
          sort: '기계식',
          measureResult: 3412,
          recognitionYN: 'N',
          date: '2021.05.07 17:21',
        },
        {
          id: 3,
          userId: 'tbell',
          sort: '전자식(E-type)',
          measureResult: 54721,
          recognitionYN: 'Y',
          date: '2021.05.07 17:42',
        },
        {
          id: 4,
          userId: 'tbell',
          sort: '전자식(E-type)',
          measureResult: 35410,
          recognitionYN: 'Y',
          date: '2021.05.07 17:45',
        },
        {
          id: 5,
          userId: 'tbell',
          sort: '전자식(E-type)',
          measureResult: 78453,
          recognitionYN: 'Y',
          date: '2021.05.08 11:17',
        },
        {
          id: 6,
          userId: 'tbell',
          sort: '전자식(E-type)',
          measureResult: 12347,
          recognitionYN: 'Y',
          date: '2021.05.08 11:18',
        },
        {
          id: 7,
          userId: 'manager',
          sort: '기계식',
          measureResult: 8121,
          recognitionYN: 'Y',
          date: '2021.05.10 15:07',
        },
        {
          id: 8,
          userId: 'tbell',
          sort: '기계식',
          measureResult: 5635,
          recognitionYN: 'Y',
          date: '2021.05.10 15:14',
        },
        {
          id: 9,
          userId: 'manager',
          sort: '기계식',
          measureResult: 8453,
          recognitionYN: 'N',
          date: '2021.05.10 15:15',
        },
        {
          id: 10,
          userId: 'manager',
          sort: '전자식(E-type)',
          measureResult: 41352,
          recognitionYN: 'Y',
          date: '2021.05.10 15:39',
        },
      ],
    };
  },
};
</script>

<style></style>
