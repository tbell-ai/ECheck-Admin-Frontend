<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>휴면회원</h3>
      </li>
      <div class="title-right">
        <p>회원정보 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>휴면회원</b>
      </div>
    </ul>
    <section>
      <article>
        <div class="filter">
          <select name="" id="">
            <option value="">전체</option>
            <option value="">회원 ID</option>
            <option value="">닉네임</option>
            <option value="">회원 이메일</option>
          </select>
          <input type="search" v-model="keyword" />
          <button id="search" class="btn-c1 btn-s1" @click="search(keyword)">
            검색
          </button>
        </div>
      </article>
    </section>
    <section>
      <article class="dashboard-ask">
        <div class="table-top">
          <p>총</p>
          <b>{{ DormancyUserListItem.length }}</b>
          <p>건</p>
        </div>
        <table class="table1">
          <thead>
            <tr>
              <th class="table-no">No</th>
              <th>회원 ID</th>
              <th>닉네임</th>
              <th>회원 이메일</th>
              <th>휴면회원 전환일시</th>
              <th>가입일</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in DormancyUserListItem.slice().reverse()"
              :key="index"
            >
              <td class="table-no">
                {{ DormancyUserListItem.length - index }}
              </td>
              <td>
                <router-link to="/dormancydetail">{{
                  item.userId
                }}</router-link>
              </td>
              <td>{{ item.userName }}</td>
              <td>{{ item.userEmail }}</td>
              <td class="table-date">{{ item.dormacyDate }}</td>
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
      keyword: '', //검색어
      DormancyUserListItem: [
        {
          id: 1,
          userId: 'tbell_admin',
          userName: '티벨어드민',
          userEmail: 'tbell_admin@tbell.co.kr',
          dormacyDate: '2022.05.11',
          date: '2021.05.06',
        },
      ],
    };
  },
  methods: {
    search(keyword) {
      if (keyword !== '') {
        //검색어를 입력한 경우
        this.$router.push({
          name: 'SearchPage',
          params: {
            keyword: this.keyword,
            isResultShow: true,
          },
        });
        this.keyword = '';
        console.log('"', keyword, '"' + ' 검색');
      } else {
        alert('검색어를 입력해주세요!'); //검색어를 입력하지 않은 경우
      }
    },
  },
};
</script>

<style></style>
