<template>
  <div class="main-area">
    <section class="app-current">
      <ul class="title">
        <li class="title-left">
          <h3>E-Check(앱) 현황</h3>
          <p class="title-info">{{ nowDate }}{{ nowTime }} 기준</p>
          <!-- 21/09/08 13:45 기준 -->
        </li>
        <div class="title-right">
          <b>대시보드</b>
        </div>
      </ul>
      <article>
        <div class="subtitle">
          <h4>설치 현황</h4>
          <router-link class="title-more" to="/downloadstatistical"
            >자세히<img
              src="../../assets/images/icon/icon-title-more.svg"
              alt=""
          /></router-link>
        </div>
        <ul class="install-current">
          <li>
            <p>전체</p>
            <span></span>
            <b>37</b>
          </li>
          <li>
            <p>월별</p>
            <span></span>
            <b>11</b>
          </li>
          <li>
            <p>일별</p>
            <span></span>
            <b>3</b>
          </li>
        </ul>
      </article>
      <article>
        <div class="subtitle">
          <h4>인식 현황</h4>
          <router-link class="title-more" to="/measurestatistical"
            >자세히<img
              src="../../assets/images/icon/icon-title-more.svg"
              alt=""
          /></router-link>
        </div>
        <table class="table3">
          <tr>
            <th>인식대상</th>
            <th>전체 인식횟수</th>
            <th>성공률<span>(%)</span></th>
            <th>실패율<span>(%)</span></th>
          </tr>
          <tr>
            <th>전력량계</th>
            <td>5,163</td>
            <td>81</td>
            <td>19</td>
          </tr>
          <!-- <tr>
            <th>청구서</th>
            <td>62,963</td>
            <td>90</td>
            <td>10</td>
          </tr> -->
        </table>
      </article>
      <article>
        <div class="subtitle">
          <h4>회원 현황</h4>
          <router-link class="title-more" to="/userstatistical"
            >자세히<img
              src="../../assets/images/icon/icon-title-more.svg"
              alt=""
          /></router-link>
        </div>
        <table class="table3">
          <tr>
            <th>전체 가입자 수</th>
            <th>일일 가입자 수</th>
          </tr>
          <tr>
            <td>5</td>
            <td>2</td>
          </tr>
        </table>
      </article>
    </section>
    <section>
      <article class="dashboard-list">
        <div class="dashboard-list-element">
          <div class="subtitle">
            <h4>1:1 문의 내역</h4>
            <router-link to="/asklist" class="title-more"
              >더보기<img
                src="../../assets/images/icon/icon-title-add.svg"
                alt=""
            /></router-link>
          </div>
          <table class="table4">
            <tr>
              <td>
                <a href="#"
                  >전월 지침 입력 가이드를 다시 확인하고 싶은데 어디서 확인해야
                  하나요?</a
                >
              </td>
              <td class="table4-date">2022.04.22</td>
            </tr>
            <tr>
              <td>
                <a href="#"
                  >필수사용량 보장공제 혜택을 받으려면 별도의 신청이 필요한
                  건가요?</a
                >
              </td>
              <td class="table4-date">2022.05.10</td>
            </tr>
          </table>
        </div>
        <div class="dashboard-list-element">
          <div class="subtitle">
            <h4>버전 업데이트 내역</h4>
            <router-link to="/version" class="title-more"
              >더보기<img
                src="../../assets/images/icon/icon-title-add.svg"
                alt=""
            /></router-link>
          </div>
          <table class="table4">
            <tr>
              <td><a href="#">오류 수정 및 UI/UX 개선</a></td>
              <td class="table4-date">2022.02.03</td>
            </tr>
            <tr>
              <td><a href="#">오류 수정</a></td>
              <td class="table4-date">2021.09.03</td>
            </tr>
            <tr>
              <td><a href="#">신규 기능 개선 및 UI/UX 개선</a></td>
              <td class="table4-date">2021.09.02</td>
            </tr>
            <tr>
              <td><a href="#">오류 수정 및 UI/UX 개선</a></td>
              <td class="table4-date">2021.08.31</td>
            </tr>
            <tr>
              <td>
                <a href="#"
                  >E-Check Application AI OCR 모델 고도화 버전 등록, 전자식
                  전력량계 인식 및 전력 사용 패턴 기능 추가</a
                >
              </td>
              <td class="table4-date">2021.07.30</td>
            </tr>
          </table>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return { timer: null, nowWeek: '', nowDate: '', nowTime: '' };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.setNowTimes();
    }, 1000);
  },
  methods: {
    setNowTimes() {
      //
      let myDate = new Date();
      let yy = String(myDate.getFullYear());
      let mm = myDate.getMonth() + 1;

      let mm_1 = String(mm < 10 ? '0' + mm : mm);

      let dd = String(
        myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate(),
      );
      let hou = String(
        myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours(),
      );
      let min = String(
        myDate.getMinutes() < 10
          ? '0' + myDate.getMinutes()
          : myDate.getMinutes(),
      );

      this.nowDate = yy + '/' + mm_1 + '/' + dd + ' ';
      this.nowTime = hou + ':' + min;
    },
  },
};
</script>

<style scope>
.install-current {
  width: 100%;
  display: flex;
}
.install-current li {
  min-width: 350px;
  height: 130px;
  margin-right: 40px;
  box-sizing: border-box;
  border: 1px solid var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
}
.install-current li:last-child {
  margin-right: 0;
}
.install-current li:hover {
  color: var(--main3);
}
.install-current li p {
  font-size: 20px;
  font-weight: 700;
}
.install-current li span {
  display: block;
  flex-grow: 1;
  border-bottom: 1px solid var(--grey3);
  margin: 0 20px;
}
.install-current li b {
  font-size: 38px;
  font-weight: 700;
}
.dashboard-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
.dashboard-list-element {
  width: 47%;
}

.dashboard-list-element .table4 {
  width: 100%;
}
</style>
