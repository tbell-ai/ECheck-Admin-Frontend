<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>활성회원</h3>
      </li>
      <div class="title-right">
        <p>회원정보 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>활성회원</b>
      </div>
    </ul>
    <section>
      <article>
        <div class="filter">
          <select name="" id="" v-model="searchFilter">
            <option value="전체">전체</option>
          </select>
          <input type="search" v-model="searchKeyword" />
          <button id="search" class="btn-c1 btn-s1" @click="fetchData(1)">
            검색
          </button>
        </div>
      </article>
    </section>
    <section>
      <article class="dashboard-ask">
        <div class="table-top">
          <p>총</p>
          <b>{{ this.page.total }}</b>
          <p>건</p>
        </div>
        <table class="table1">
          <thead>
            <tr>
              <th class="table-no">No</th>
              <th>회원 ID</th>
              <th>이름</th>
              <th>이메일</th>
              <th>가입일</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in ActiveUserListItem.slice().reverse()"
              :key="index"
            >
              <td class="table-no">{{ index + 1 }}</td>
              <td>
                <a href="javascript:;" @click="routeUserView(item.user_idx)">{{
                  item.user_id
                }}</a>
              </td>
              <td>{{ item.user_nickname }}</td>
              <td>{{ item.user_email }}</td>
              <td class="table-date">{{ item.user_create_date }}</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article class="page">
        <button
          class="left"
          :disabled="!prevButtonCheck"
          @click="fetchData(page.pageNumber - 1)"
        >
          <img src="../../assets/images/icon/icon-prev.svg" alt="" />
        </button>
        <ul>
          <li v-for="paging in getListCount" :key="paging">
            <button
              :class="{
                active: paging === page.pageNumber,
              }"
              @click="fetchData(paging)"
            >
              {{ paging }}
            </button>
          </li>
        </ul>
        <button
          class="right"
          :disabled="!nextButtonCheck"
          @click="fetchData(page.pageNumber + 1)"
        >
          <img src="../../assets/images/icon/icon-next.svg" alt="" />
        </button>
      </article>
    </section>
  </div>
</template>

<script>
import { fetchUsers } from '../../api/user.js';

export default {
  created() {
    this.fetchData(1);
  },
  data: function () {
    return {
      searchFilter: '전체',
      searchKeyword: '', //검색어
      page: {},
      ActiveUserListItem: [],
    };
  },
  computed: {
    prevButtonCheck() {
      if (this.page.pageNumber > 1) {
        return true;
      } else {
        return false;
      }
    },
    nextButtonCheck() {
      if (this.page.pageNumber < this.page.totalPages) {
        return true;
      } else {
        return false;
      }
    },
    getListCount() {
      const count = [];

      for (let i = this.getPage; i <= this.getEndPage; i += 1) {
        count.push(i);
      }
      return count;
    },
    getPage() {
      const unit = this.getDigit(this.page.pageNumber);
      const start = this.page.pageNumber - unit;

      return start + 1;
    },
    getEndPage() {
      let lastPage = parseInt(this.page.pageNumber / 10) * 10 + 10;
      return lastPage <= this.page.totalPages ? lastPage : this.page.totalPages;
    },
  },
  methods: {
    async fetchData(page) {
      // API 호출을 위한 파람(Swagger 확인)
      const param = {
        take: 10,
        page: page,
        type: 'inactive',
      };

      // API 호출
      const { data } = await fetchUsers(param);

      if (data.code === '0000') {
        // 목록(Array)
        this.ActiveUserListItem = data.result.results;
        // 현재 페이지
        this.page.pageNumber = page;
        // 네비게이션 페이지 개수 (ex: 전체 개수가 13개면 페이지 개수는 2개)
        this.page.totalPages = Math.ceil(data.result.total / 10);
        // 현재 조회한 목록의 전체 개수
        this.page.total = data.result.total;
      } else {
        alert('페이지 비정상 접속');
      }
    },
    getDigit(num) {
      let result = 0;
      if (num > 0) {
        result = num % 10;
      } else {
        result = 0;
      }
      return result;
    },
    routeUserView(user_idx) {
      this.$router.push(`/activedetail/${user_idx}`);
    },
  },
};
</script>

<style></style>
