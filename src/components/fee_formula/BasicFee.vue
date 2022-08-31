<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>기본 요금</h3>
      </li>
      <div class="title-right">
        <p>계산공식 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>기본 요금</b>
      </div>
    </ul>
    <section>
      <article>
        <table class="table2">
          <tr>
            <th>용도</th>
            <td>
              <ul class="align1">
                <li class="radio-wrap">
                  <input
                    type="radio"
                    id="electricity-fee-season1"
                    name="electricity-fee-season"
                    v-model="purpose"
                    value="HousingLow"
                  />
                  <label for="electricity-fee-season1"
                    >주택용 <span>(저압)</span></label
                  >
                </li>
                <li class="radio-wrap">
                  <input
                    type="radio"
                    id="electricity-fee-season2"
                    name="electricity-fee-season"
                    v-model="purpose"
                    value="HousingHigh"
                  />
                  <label for="electricity-fee-season2"
                    >주택용<span>(고압)</span></label
                  >
                </li>
                <li class="radio-wrap">
                  <input
                    type="radio"
                    id="electricity-fee-season3"
                    name="electricity-fee-season"
                    v-model="purpose"
                    value="HousingSingle"
                  />
                  <label for="electricity-fee-season3">1주택 수 가구</label>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </article>

      <article v-if="purpose == 'HousingLow'">
        <div class="table-top">
          <p>기타 계절 (1.1 ~ 6.30, 9.1 ~ 12.31)</p>
        </div>
        <table class="table2-1">
          <tr>
            <th></th>
            <th>구간</th>
            <th>기본 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>~200kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingLowEtcSection1"
                v-model.trim="basicHousingLowEtcSection1"
                @change="basicHousingLowEtcSection1Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>201kWh ~ 400kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingLowEtcSection2"
                v-model.trim="basicHousingLowEtcSection2"
                @change="basicHousingLowEtcSection2Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>401kWh ~ 1,000kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingLowEtcSection3"
                v-model.trim="basicHousingLowEtcSection3"
                @change="basicHousingLowEtcSection3Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
        </table>
      </article>
      <article v-if="purpose == 'HousingLow'">
        <div class="table-top">
          <p>하계 (7.1 ~ 8.31)</p>
        </div>
        <table class="table2-1">
          <tr>
            <th></th>
            <th>구간</th>
            <th>기본 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>~ 300kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingLowSummerSection1"
                v-model.trim="basicHousingLowSummerSection1"
                @change="basicHousingLowSummerSection1Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>301kWh ~ 450kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingLowSummerSection2"
                v-model.trim="basicHousingLowSummerSection2"
                @change="basicHousingLowSummerSection2Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>451kWh ~ 1,000kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingLowSummerSection3"
                v-model.trim="basicHousingLowSummerSection3"
                @change="basicHousingLowSummerSection3Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
        </table>
      </article>
      <article v-if="purpose == 'HousingHigh'">
        <div class="table-top">
          <p>기타 계절 (1.1 ~ 6.30, 9.1 ~ 12.31)</p>
        </div>
        <table class="table2-1">
          <tr>
            <th></th>
            <th>구간</th>
            <th>기본 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>~200kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingHighEtcSection1"
                v-model.trim="basicHousingHighEtcSection1"
                @change="basicHousingHighEtcSection1Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>201kWh ~ 400kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingHighEtcSection2"
                v-model.trim="basicHousingHighEtcSection2"
                @change="basicHousingHighEtcSection2Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>401kWh ~ 1,000kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingHighEtcSection3"
                v-model.trim="basicHousingHighEtcSection3"
                @change="basicHousingHighEtcSection3Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
        </table>
      </article>
      <article v-if="purpose == 'HousingHigh'">
        <div class="table-top">
          <p>하계 (7.1 ~ 8.31)</p>
        </div>
        <table class="table2-1">
          <tr>
            <th></th>
            <th>구간</th>
            <th>기본 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>~ 300kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingHighSummerSection1"
                v-model.trim="basicHousingHighSummerSection1"
                @change="basicHousingHighSummerSection1Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>301kWh ~ 450kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingHighSummerSection2"
                v-model.trim="basicHousingHighSummerSection2"
                @change="basicHousingHighSummerSection2Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>451kWh ~ 1,000kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingHighSummerSection3"
                v-model.trim="basicHousingHighSummerSection3"
                @change="basicHousingHighSummerSection3Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
        </table>
      </article>
      <article v-if="purpose == 'HousingSingle'">
        <div class="table-top">
          <p>기타 계절 (1.1 ~ 6.30, 9.1 ~ 12.31)</p>
        </div>
        <table class="table2-1">
          <tr>
            <th></th>
            <th>구간</th>
            <th>기본 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>~ 200kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingSingleEtcSection1"
                v-model.trim="basicHousingSingleEtcSection1"
                @change="basicHousingSingleEtcSection1Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>201kWh ~ 400kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingSingleEtcSection2"
                v-model.trim="basicHousingSingleEtcSection2"
                @change="basicHousingSingleEtcSection2Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>401kWh ~ 1,000kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingSingleEtcSection3"
                v-model.trim="basicHousingSingleEtcSection3"
                @change="basicHousingSingleEtcSection3Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
        </table>
      </article>
      <article v-if="purpose == 'HousingSingle'">
        <div class="table-top">
          <p>하계 (7.1 ~ 8.31)</p>
        </div>
        <table class="table2-1">
          <tr>
            <th></th>
            <th>구간</th>
            <th>기본 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>~ 300kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingSingleSummerSection1"
                v-model.trim="basicHousingSingleSummerSection1"
                @change="basicHousingSingleSummerSection1Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>301kWh ~ 450kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingSingleSummerSection2"
                v-model.trim="basicHousingSingleSummerSection2"
                @change="basicHousingSingleSummerSection2Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>451kWh ~ 1,000kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="basicHousingSingleSummerSection3"
                v-model.trim="basicHousingSingleSummerSection3"
                @change="basicHousingSingleSummerSection3Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
        </table>
      </article>
      <article class="btn-box1">
        <button class="btn-c1 btn-s1">저장</button>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      purpose: 'HousingLow', //용도 라디오 버튼

      basicHousingLowEtcSection1: '', //기본요금_주택용(저압)_기타계절_구간1
      basicHousingLowEtcSection2: '', //기본요금_주택용(저압)_기타계절_구간2
      basicHousingLowEtcSection3: '', //기본요금_주택용(저압)_기타계절_구간3

      basicHousingLowSummerSection1: '', //기본요금_주택용(저압)_하계_구간1
      basicHousingLowSummerSection2: '', //기본요금_주택용(저압)_하계_구간2
      basicHousingLowSummerSection3: '', //기본요금_주택용(저압)_하계_구간3

      basicHousingHighEtcSection1: '', //기본요금_주택용(고압)_기타계절_구간1
      basicHousingHighEtcSection2: '', //기본요금_주택용(고압)_기타계절_구간2
      basicHousingHighEtcSection3: '', //기본요금_주택용(고압)_기타계절_구간3

      basicHousingHighSummerSection1: '', //기본요금_주택용(고압)_하계_구간1
      basicHousingHighSummerSection2: '', //기본요금_주택용(고압)_하계_구간2
      basicHousingHighSummerSection3: '', //기본요금_주택용(고압)_하계_구간3

      basicHousingSingleEtcSection1: '', //기본요금_1주택 수 가구_기타계절_구간1
      basicHousingSingleEtcSection2: '', //기본요금_1주택 수 가구_기타계절_구간2
      basicHousingSingleEtcSection3: '', //기본요금_1주택 수 가구_기타계절_구간3

      basicHousingSingleSummerSection1: '', //기본요금_1주택 수 가구_하계_구간1
      basicHousingSingleSummerSection2: '', //기본요금_1주택 수 가구_하계_구간2
      basicHousingSingleSummerSection3: '', //기본요금_1주택 수 가구_하계_구간3
    };
  },
  computed: {},
  watch: {},
  methods: {
    basicHousingLowEtcSection1Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingLowEtcSection1)) == 0) {
        alert('숫자만 입력해주세요.');

        this.basicHousingLowEtcSection1 = '';
      } else {
        this.basicHousingLowEtcSection1 = String(
          this.basicHousingLowEtcSection1,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingLowEtcSection1;
    },
    basicHousingLowEtcSection2Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingLowEtcSection2)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingLowEtcSection2 = '';
      } else {
        this.basicHousingLowEtcSection2 = String(
          this.basicHousingLowEtcSection2,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingLowEtcSection2;
    },
    basicHousingLowEtcSection3Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingLowEtcSection3)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingLowEtcSection3 = '';
      } else {
        this.basicHousingLowEtcSection3 = String(
          this.basicHousingLowEtcSection3,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingLowEtcSection3;
    },
    basicHousingLowSummerSection1Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingLowSummerSection1)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingLowSummerSection1 = '';
      } else {
        this.basicHousingLowSummerSection1 = String(
          this.basicHousingLowSummerSection1,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingLowSummerSection1;
    },
    basicHousingLowSummerSection2Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingLowSummerSection2)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingLowSummerSection2 = '';
      } else {
        this.basicHousingLowSummerSection2 = String(
          this.basicHousingLowSummerSection2,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingLowSummerSection2;
    },
    basicHousingLowSummerSection3Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingLowSummerSection3)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingLowSummerSection3 = '';
      } else {
        this.basicHousingLowSummerSection3 = String(
          this.basicHousingLowSummerSection3,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingLowSummerSection3;
    },
    basicHousingHighEtcSection1Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingHighEtcSection1)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingHighEtcSection1 = '';
      } else {
        this.basicHousingHighEtcSection1 = String(
          this.basicHousingHighEtcSection1,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingHighEtcSection1;
    },
    basicHousingHighEtcSection2Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingHighEtcSection2)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingHighEtcSection2 = '';
      } else {
        this.basicHousingHighEtcSection2 = String(
          this.basicHousingHighEtcSection2,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingHighEtcSection2;
    },
    basicHousingHighEtcSection3Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingHighEtcSection3)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingHighEtcSection3 = '';
      } else {
        this.basicHousingHighEtcSection3 = String(
          this.basicHousingHighEtcSection3,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingHighEtcSection3;
    },

    basicHousingHighSummerSection1Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingHighSummerSection1)) == 0) {
        alert('숫자만 입력해주세요.');
      } else {
        this.basicHousingHighSummerSection1 = String(
          this.basicHousingHighSummerSection1,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingHighSummerSection1;
    },
    basicHousingHighSummerSection2Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingHighSummerSection2)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingHighSummerSection2 = '';
      } else {
        this.basicHousingHighSummerSection2 = String(
          this.basicHousingHighSummerSection2,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingHighSummerSection2;
    },
    basicHousingHighSummerSection3Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingHighSummerSection3)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingHighSummerSection3 = '';
      } else {
        this.basicHousingHighSummerSection3 = String(
          this.basicHousingHighSummerSection3,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingHighSummerSection3;
    },
    basicHousingSingleEtcSection1Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingSingleEtcSection1)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingSingleEtcSection1 = '';
      } else {
        this.basicHousingSingleEtcSection1 = String(
          this.basicHousingSingleEtcSection1,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingSingleEtcSection1;
    },
    basicHousingSingleEtcSection2Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingSingleEtcSection2)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingSingleEtcSection2 = '';
      } else {
        this.basicHousingSingleEtcSection2 = String(
          this.basicHousingSingleEtcSection2,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingSingleEtcSection2;
    },
    basicHousingSingleEtcSection3Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingSingleEtcSection3)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingSingleEtcSection3 = '';
      } else {
        this.basicHousingSingleEtcSection3 = String(
          this.basicHousingSingleEtcSection3,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingSingleEtcSection3;
    },

    basicHousingSingleSummerSection1Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingSingleSummerSection1)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingSingleSummerSection1 = '';
      } else {
        this.basicHousingSingleSummerSection1 = String(
          this.basicHousingSingleSummerSection1,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingSingleSummerSection1;
    },
    basicHousingSingleSummerSection2Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingSingleSummerSection2)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingSingleSummerSection2 = '';
      } else {
        this.basicHousingSingleSummerSection2 = String(
          this.basicHousingSingleSummerSection2,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingSingleSummerSection2;
    },
    basicHousingSingleSummerSection3Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.basicHousingSingleSummerSection3)) == 0) {
        alert('숫자만 입력해주세요.');
        this.basicHousingSingleSummerSection3 = '';
      } else {
        this.basicHousingSingleSummerSection3 = String(
          this.basicHousingSingleSummerSection3,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.basicHousingSingleSummerSection3;
    },
  },
};
</script>

<style scoped>
.fee_input {
  padding: 5px 80px 5px 14px;
  box-sizing: border-box;
  text-align: right;
}
</style>
