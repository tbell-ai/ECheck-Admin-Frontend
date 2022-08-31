<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>전력량 요금</h3>
      </li>
      <div class="title-right">
        <p>계산공식 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>전력량 요금</b>
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
            <th>전력량 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>~ 200kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="ElectricityHousingLowEtcSection1"
                v-model.trim="ElectricityHousingLowEtcSection1"
                @change="ElectricityHousingLowEtcSection1Valid()"
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
                v-model="ElectricityHousingLowEtcSection2"
                v-model.trim="ElectricityHousingLowEtcSection2"
                @change="ElectricityHousingLowEtcSection2Valid()"
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
                v-model="ElectricityHousingLowEtcSection3"
                v-model.trim="ElectricityHousingLowEtcSection3"
                @change="ElectricityHousingLowEtcSection3Valid()"
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
            <th>전력량 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>~ 300kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="ElectricityHousingLowSummerSection1"
                v-model.trim="ElectricityHousingLowSummerSection1"
                @change="ElectricityHousingLowSummerSection1Valid()"
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
                v-model="ElectricityHousingLowSummerSection2"
                v-model.trim="ElectricityHousingLowSummerSection2"
                @change="ElectricityHousingLowSummerSection2Valid()"
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
                v-model="ElectricityHousingLowSummerSection3"
                v-model.trim="ElectricityHousingLowSummerSection3"
                @change="ElectricityHousingLowSummerSection3Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
        </table>
      </article>
      <article v-if="purpose == 'HousingLow'">
        <div class="table-top">
          <p>
            * 슈퍼유저요금<span
              >(7.1~8.31/12.1~2월말에 해당하는 경우에만 적용)</span
            >
          </p>
        </div>
        <table class="table2-1">
          <tr>
            <th></th>
            <th>구간</th>
            <th>전력량 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>1,001kWh ~</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="ElectricityHousingLowSuper"
                v-model.trim="ElectricityHousingLowSuper"
                @change="ElectricityHousingLowSuperValid()"
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
            <th>전력량 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>~ 200kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="ElectricityHousingHighEtcSection1"
                v-model.trim="ElectricityHousingHighEtcSection1"
                @change="ElectricityHousingHighEtcSection1Valid()"
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
                v-model="ElectricityHousingHighEtcSection2"
                v-model.trim="ElectricityHousingHighEtcSection2"
                @change="ElectricityHousingHighEtcSection2Valid()"
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
                v-model="ElectricityHousingHighEtcSection3"
                v-model.trim="ElectricityHousingHighEtcSection3"
                @change="ElectricityHousingHighEtcSection3Valid()"
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
            <th>전력량 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>~ 300kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="ElectricityHousingHighSummerSection1"
                v-model.trim="ElectricityHousingHighSummerSection1"
                @change="ElectricityHousingHighSummerSection1Valid()"
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
                v-model="ElectricityHousingHighSummerSection2"
                v-model.trim="ElectricityHousingHighSummerSection2"
                @change="ElectricityHousingHighSummerSection2Valid()"
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
                v-model="ElectricityHousingHighSummerSection3"
                v-model.trim="ElectricityHousingHighSummerSection3"
                @change="ElectricityHousingHighSummerSection3Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
        </table>
      </article>
      <article v-if="purpose == 'HousingHigh'">
        <div class="table-top">
          <p>
            * 슈퍼유저요금<span
              >(7.1~8.31/12.1~2월말에 해당하는 경우에만 적용)</span
            >
          </p>
        </div>
        <table class="table2-1">
          <tr>
            <th></th>
            <th>구간</th>
            <th>전력량 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>1,001kWh ~</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="ElectricityHousingHighSuper"
                v-model.trim="ElectricityHousingHighSuper"
                @change="ElectricityHousingHighSuperValid()"
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
            <th>전력량 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>~ 200kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="ElectricityHousingSingleEtcSection1"
                v-model.trim="ElectricityHousingSingleEtcSection1"
                @change="ElectricityHousingSingleEtcSection1Valid()"
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
                v-model="ElectricityHousingSingleEtcSection2"
                v-model.trim="ElectricityHousingSingleEtcSection2"
                @change="ElectricityHousingSingleEtcSection2Valid()"
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
                v-model="ElectricityHousingSingleEtcSection3"
                v-model.trim="ElectricityHousingSingleEtcSection3"
                @change="ElectricityHousingSingleEtcSection3Valid()"
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
            <th>전력량 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>~ 300kWh</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="ElectricityHousingSingleSummerSection1"
                v-model.trim="ElectricityHousingSingleSummerSection1"
                @change="ElectricityHousingSingleSummerSection1Valid()"
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
                v-model="ElectricityHousingSingleSummerSection2"
                v-model.trim="ElectricityHousingSingleSummerSection2"
                @change="ElectricityHousingSingleSummerSection2Valid()"
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
                v-model="ElectricityHousingSingleSummerSection3"
                v-model.trim="ElectricityHousingSingleSummerSection3"
                @change="ElectricityHousingSingleSummerSection3Valid()"
              />
              <label for="fee_input" class="fee_input_label">원/kWh</label>
            </td>
          </tr>
        </table>
      </article>
      <article v-if="purpose == 'HousingSingle'">
        <div class="table-top">
          <p>
            * 슈퍼유저요금<span
              >(7.1~8.31/12.1~2월말에 해당하는 경우에만 적용)</span
            >
          </p>
        </div>
        <table class="table2-1">
          <tr>
            <th></th>
            <th>구간</th>
            <th>전력량 요금</th>
          </tr>
          <tr>
            <th>1</th>
            <td>1,001kWh ~</td>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="ElectricityHousingSingleSuper"
                v-model.trim="ElectricityHousingSingleSuper"
                @change="ElectricityHousingSingleSuperValid()"
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

      ElectricityHousingLowEtcSection1: '', //전력량요금_주택용(저압)_기타계절_구간1
      ElectricityHousingLowEtcSection2: '', //전력량요금_주택용(저압)_기타계절_구간2
      ElectricityHousingLowEtcSection3: '', //전력량요금_주택용(저압)_기타계절_구간3

      ElectricityHousingLowSummerSection1: '', //전력량요금_주택용(저압)_하계_구간1
      ElectricityHousingLowSummerSection2: '', //전력량요금_주택용(저압)_하계_구간2
      ElectricityHousingLowSummerSection3: '', //전력량요금_주택용(저압)_하계_구간3

      ElectricityHousingLowSuper: '', //전력량요금_주택용(저압)_슈퍼유저

      ElectricityHousingHighEtcSection1: '', //전력량요금_주택용(고압)_기타계절_구간1
      ElectricityHousingHighEtcSection2: '', //전력량요금_주택용(고압)_기타계절_구간2
      ElectricityHousingHighEtcSection3: '', //전력량요금_주택용(고압)_기타계절_구간3

      ElectricityHousingHighSummerSection1: '', //전력량요금_주택용(고압)_하계_구간1
      ElectricityHousingHighSummerSection2: '', //전력량요금_주택용(고압)_하계_구간2
      ElectricityHousingHighSummerSection3: '', //전력량요금_주택용(고압)_하계_구간3

      ElectricityHousingHighSuper: '', //전력량요금_주택용(고압)_슈퍼유저

      ElectricityHousingSingleEtcSection1: '', //전력량요금_1주택 수 가구_기타계절_구간1
      ElectricityHousingSingleEtcSection2: '', //전력량요금_1주택 수 가구_기타계절_구간2
      ElectricityHousingSingleEtcSection3: '', //전력량요금_1주택 수 가구_기타계절_구간3

      ElectricityHousingSingleSummerSection1: '', //전력량요금_1주택 수 가구_하계_구간1
      ElectricityHousingSingleSummerSection2: '', //전력량요금_1주택 수 가구_하계_구간2
      ElectricityHousingSingleSummerSection3: '', //전력량요금_1주택 수 가구_하계_구간3

      ElectricityHousingSingleSuper: '', //전력량요금_1주택 수 가구_슈퍼유저
    };
  },
  computed: {},
  watch: {},
  methods: {
    ElectricityHousingLowEtcSection1Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingLowEtcSection1)) == 0) {
        alert('숫자만 입력해주세요.');

        this.ElectricityHousingLowEtcSection1 = '';
      } else {
        this.ElectricityHousingLowEtcSection1 = String(
          this.ElectricityHousingLowEtcSection1,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingLowEtcSection1;
    },
    ElectricityHousingLowEtcSection2Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingLowEtcSection2)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingLowEtcSection2 = '';
      } else {
        this.ElectricityHousingLowEtcSection2 = String(
          this.ElectricityHousingLowEtcSection2,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingLowEtcSection2;
    },
    ElectricityHousingLowEtcSection3Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingLowEtcSection3)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingLowEtcSection3 = '';
      } else {
        this.ElectricityHousingLowEtcSection3 = String(
          this.ElectricityHousingLowEtcSection3,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingLowEtcSection3;
    },
    ///
    ElectricityHousingLowSummerSection1Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingLowSummerSection1)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingLowSummerSection1 = '';
      } else {
        this.ElectricityHousingLowSummerSection1 = String(
          this.ElectricityHousingLowSummerSection1,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingLowSummerSection1;
    },
    ElectricityHousingLowSummerSection2Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingLowSummerSection2)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingLowSummerSection2 = '';
      } else {
        this.ElectricityHousingLowSummerSection2 = String(
          this.ElectricityHousingLowSummerSection2,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingLowSummerSection2;
    },
    ElectricityHousingLowSummerSection3Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingLowSummerSection3)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingLowSummerSection3 = '';
      } else {
        this.ElectricityHousingLowSummerSection3 = String(
          this.ElectricityHousingLowSummerSection3,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingLowSummerSection3;
    },
    ElectricityHousingLowSuperValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingLowSuper)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingLowSuper = '';
      } else {
        this.ElectricityHousingLowSuper = String(
          this.ElectricityHousingLowSuper,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingLowSuper;
    },
    ElectricityHousingHighEtcSection1Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingHighEtcSection1)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingHighEtcSection1 = '';
      } else {
        this.ElectricityHousingHighEtcSection1 = String(
          this.ElectricityHousingHighEtcSection1,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingHighEtcSection1;
    },
    ElectricityHousingHighEtcSection2Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingHighEtcSection2)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingHighEtcSection2 = '';
      } else {
        this.ElectricityHousingHighEtcSection2 = String(
          this.ElectricityHousingHighEtcSection2,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingHighEtcSection2;
    },
    ElectricityHousingHighEtcSection3Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingHighEtcSection3)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingHighEtcSection3 = '';
      } else {
        this.ElectricityHousingHighEtcSection3 = String(
          this.ElectricityHousingHighEtcSection3,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingHighEtcSection3;
    },

    ElectricityHousingHighSummerSection1Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingHighSummerSection1)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingHighSummerSection1 = '';
      } else {
        this.ElectricityHousingHighSummerSection1 = String(
          this.ElectricityHousingHighSummerSection1,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingHighSummerSection1;
    },
    ElectricityHousingHighSummerSection2Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingHighSummerSection2)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingHighSummerSection2 = '';
      } else {
        this.ElectricityHousingHighSummerSection2 = String(
          this.ElectricityHousingHighSummerSection2,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingHighSummerSection2;
    },
    ElectricityHousingHighSummerSection3Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingHighSummerSection3)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingHighSummerSection3 = '';
      } else {
        this.ElectricityHousingHighSummerSection3 = String(
          this.ElectricityHousingHighSummerSection3,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingHighSummerSection3;
    },
    ElectricityHousingHighSuperValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingHighSuper)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingHighSuper = '';
      } else {
        this.ElectricityHousingHighSuper = String(
          this.ElectricityHousingHighSuper,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingHighSuper;
    },
    ElectricityHousingSingleEtcSection1Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingSingleEtcSection1)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingSingleEtcSection1 = '';
      } else {
        this.ElectricityHousingSingleEtcSection1 = String(
          this.ElectricityHousingSingleEtcSection1,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingSingleEtcSection1;
    },
    ElectricityHousingSingleEtcSection2Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingSingleEtcSection2)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingSingleEtcSection2 = '';
      } else {
        this.ElectricityHousingSingleEtcSection2 = String(
          this.ElectricityHousingSingleEtcSection2,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingSingleEtcSection2;
    },
    ElectricityHousingSingleEtcSection3Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingSingleEtcSection3)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingSingleEtcSection3 = '';
      } else {
        this.ElectricityHousingSingleEtcSection3 = String(
          this.ElectricityHousingSingleEtcSection3,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingSingleEtcSection3;
    },

    ElectricityHousingSingleSummerSection1Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingSingleSummerSection1)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingSingleSummerSection1 = '';
      } else {
        this.ElectricityHousingSingleSummerSection1 = String(
          this.ElectricityHousingSingleSummerSection1,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingSingleSummerSection1;
    },
    ElectricityHousingSingleSummerSection2Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingSingleSummerSection2)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingSingleSummerSection2 = '';
      } else {
        this.ElectricityHousingSingleSummerSection2 = String(
          this.ElectricityHousingSingleSummerSection2,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingSingleSummerSection2;
    },
    ElectricityHousingSingleSummerSection3Valid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingSingleSummerSection3)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingSingleSummerSection3 = '';
      } else {
        this.ElectricityHousingSingleSummerSection3 = String(
          this.ElectricityHousingSingleSummerSection3,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingSingleSummerSection3;
    },
    ElectricityHousingSingleSuperValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.ElectricityHousingSingleSuper)) == 0) {
        alert('숫자만 입력해주세요.');
        this.ElectricityHousingSingleSuper = '';
      } else {
        this.ElectricityHousingSingleSuper = String(
          this.ElectricityHousingSingleSuper,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.ElectricityHousingSingleSuper;
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
