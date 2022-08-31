<template>
  <div class="main-area">
    <section>
      <ul class="title">
        <li class="title-left">
          <h3>버전 등록</h3>
        </li>
        <div class="title-right">
          <p>버전 관리</p>
          <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
          <b>버전 등록</b>
        </div>
      </ul>
      <article>
        <div class="table-top">
          <p>E-Check 버전</p>
        </div>
        <table class="table2-1">
          <tr>
            <th>버전</th>
            <td>
              <input
                type="text"
                placeholder="ex) X.X.X 형식으로 입력"
                v-model="versionInput"
                v-model.trim="versionInput"
                @change="versionInputValid()"
              />
            </td>
          </tr>
          <tr>
            <th>업데이트 내역</th>
            <td>
              <input
                type="text"
                v-model="versionUpdateInfo"
                v-model.trim="versionUpdateInfo"
                @change="versionUpdateInfoValid()"
              />
            </td>
          </tr>
        </table>
      </article>
      <article class="btn-box1">
        <button class="btn-c1 btn-s1">저장</button>
      </article>
      <article>
        <div class="table-top">
          <p>E-Check 버전 변경 내역</p>
        </div>
        <table class="table1">
          <thead>
            <tr>
              <th class="table-no">No</th>
              <th>버전</th>
              <th>변경내역</th>
              <th>변경 일시</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in versionUpdateListItem.slice().reverse()"
              :key="index"
            >
              <td class="table-no">{{ index + 1 }}</td>
              <td>{{ item.version }}</td>
              <td>{{ item.content }}</td>
              <td>{{ item.date }}</td>
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
      versionInput: '', //버전
      versionUpdateInfo: '', //업데이트 내역
      versionUpdateListItem: [
        {
          id: 1,
          version: '0.0.1',
          content:
            'E-Check Application 최초 등록, 기계식 전력량계 인식 및 전기요금 계산',
          date: '2021.03.08',
        },
        {
          id: 2,
          version: '2.0.1',
          content:
            'E-Check Application AI OCR 모델 고도화 버전 등록, 전자식 전력량계 인식 및 전력 사용 패턴 기능 추가',
          date: '2021.07.30',
        },
        {
          id: 3,
          version: '2.1.5',
          content: '오류 수정 및 UI/UX 개선',
          date: '2021.08.31',
        },
        {
          id: 4,
          version: '2.2.0',
          content: '신규 기능 개선 및 UI/UX 개선',
          date: '2021.09.02',
        },
        {
          id: 5,
          version: '2.2.1',
          content: '오류 수정',
          date: '2021.09.03',
        },
        {
          id: 6,
          version: '2.2.2',
          content: '오류 수정 및 UI/UX 개선',
          date: '2022.02.03',
        },
      ],
    };
  },
  methods: {
    versionInputValid: function () {
      const re = /^\d{1,3}\.\d{1,3}\.\d{1,3}$/;
      if (re.test(String(this.versionInput)) == 0 || this.versionInput > 100) {
        alert('X.X.X 형식으로 입력하세요.\nex)1.12.8');
        this.versionInput = '';
      } else {
        this.versionInput;
      }
      return this.versionInput;
    },
    versionUpdateInfoValid: function () {
      if (
        this.versionUpdateInfo.length > 50 ||
        this.versionUpdateInfo.length < 1
      ) {
        alert('버전 업데이트 내역은 1~50자로 입력해주세요.');
      }
      return this.industrialBaseFee;
    },
  },
};
</script>

<style></style>
