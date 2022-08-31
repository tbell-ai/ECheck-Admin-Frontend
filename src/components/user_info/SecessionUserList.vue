<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>탈퇴회원</h3>
      </li>
      <div class="title-right">
        <p>회원정보 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>탈퇴회원</b>
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
          <b> {{ SecessionUserListItem.length }}</b>
          <p>건</p>
        </div>
        <table class="table1">
          <thead>
            <tr>
              <th class="table-no">No</th>
              <th>회원 ID</th>
              <th>닉네임</th>
              <th>회원 이메일</th>
              <th>탈퇴회원 전환일시</th>
              <th>가입일</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in SecessionUserListItem.slice().reverse()"
              :key="index"
            >
              <td class="table-no">
                {{ SecessionUserListItem.length - index }}
              </td>
              <td>
                <router-link to="/secessiondetail">{{
                  item.userId
                }}</router-link>
              </td>
              <td>{{ item.userName }}</td>
              <td>{{ item.userEmail }}</td>
              <td class="table-date">{{ item.secessionDate }}</td>
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
      SecessionUserListItem: [
        {
          id: 1,
          userId: 'tbell_test',
          userName: '티벨테스트용',
          userEmail: 'tbell_test@tbell.co.kr',
          secessionDate: '2022.02.17',
          date: '2022.01.24',
        },
      ],
    };
  },
};
</script>

<style></style>
