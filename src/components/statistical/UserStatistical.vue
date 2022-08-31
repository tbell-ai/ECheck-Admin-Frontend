<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>회원현황 통계</h3>
      </li>
      <div class="title-right">
        <p>통계 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>회원현황 통계</b>
      </div>
    </ul>
    <section>
      <article class="filter-border">
        <div class="filter2">
          <ul class="align1">
            <li class="filter2-title">기간</li>
            <li class="align1">
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="recognition-statistics-date"
                  id="recognition-statistics-date1"
                />
                <label for="recognition-statistics-date1">전체</label>
              </div>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="recognition-statistics-date"
                  id="recognition-statistics-date2"
                />
                <label for="recognition-statistics-date2">1주일</label>
              </div>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="recognition-statistics-date"
                  id="recognition-statistics-date3"
                />
                <label for="recognition-statistics-date3">오늘</label>
              </div>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="recognition-statistics-date"
                  id="recognition-statistics-date4"
                />
                <label for="recognition-statistics-date4">어제</label>
              </div>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="recognition-statistics-date"
                  id="recognition-statistics-date5"
                />
                <label for="recognition-statistics-date5">직접 설정</label>
                <div class="date-wrap" v-show="custom">
                  <input type="date" />
                  <span class="wave">~</span>
                  <input type="date" />
                </div>
              </div>
            </li>
          </ul>
          <ul class="align1">
            <li class="filter2-title">기준</li>
            <li class="align1">
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="recognition-statistics-criteria"
                  id="recognition-statistics-criteria2"
                />
                <label for="recognition-statistics-criteria2">월별</label>
              </div>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="recognition-statistics-criteria"
                  id="recognition-statistics-criteria3"
                />
                <label for="recognition-statistics-criteria3">일별</label>
              </div>
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
        <table class="table2-2">
          <tr>
            <th>구분</th>
            <td>가입자 수</td>
            <td>활성회원 수</td>
            <td>휴면회원 수</td>
            <td>탈퇴회원 수</td>
          </tr>
          <tr>
            <th>2022-05-10</th>
            <td>2</td>
            <td>2</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th>2022-05-09</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th>2022-05-08</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th>2022-05-07</th>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th>2022-05-06</th>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th>2022-05-05</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th>2022-05-04</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th>2022-05-03</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th>2022-05-02</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <th>2022-05-01</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
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
    return { custom: 0 };
  },
};
</script>

<style></style>
