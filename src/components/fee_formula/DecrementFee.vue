<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>감액요금제</h3>
      </li>
      <div class="title-right">
        <p>계산공식 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>감액요금제</b>
      </div>
    </ul>
    <section>
      <article>
        <table class="table2">
          <tr>
            <th>구분</th>
            <td>
              <ul class="align1">
                <li class="radio-wrap">
                  <input
                    type="radio"
                    id="electricity-fee-season1"
                    name="electricity-fee-season"
                    v-model="category"
                    value="usageGuaranteeDiscount"
                  />
                  <label for="electricity-fee-season1"
                    >필수사용량 보장공제</label
                  >
                </li>
                <li class="radio-wrap">
                  <input
                    type="radio"
                    id="electricity-fee-season2"
                    name="electricity-fee-season"
                    v-model="category"
                    value="welfareDiscount"
                  />
                  <label for="electricity-fee-season2">복지할인</label>
                </li>
                <li class="radio-wrap">
                  <input
                    type="radio"
                    id="electricity-fee-season3"
                    name="electricity-fee-season"
                    v-model="category"
                    value="largeFamilyDiscount"
                  />
                  <label for="electricity-fee-season3"
                    >대가족/생명유지장치 할인
                  </label>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </article>
      <article v-if="category == 'usageGuaranteeDiscount'">
        <div class="table-top">
          <p>필수사용량 보장공제</p>
          <span>※ 한도 금액으로 입력</span>
        </div>
        <table class="table2-1">
          <tr>
            <th>주택용 저압</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="decrementGuaranteeHousingLow"
                v-model.trim="decrementGuaranteeHousingLow"
                @change="decrementGuaranteeHousingLowValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
          <tr>
            <th>주택용 고압</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="decrementGuaranteeHousingHigh"
                v-model.trim="decrementGuaranteeHousingHigh"
                @change="decrementGuaranteeHousingHighValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
        </table>
      </article>
      <article v-if="category == 'welfareDiscount'">
        <div class="table-top">
          <p>복지할인</p>
        </div>
        <div class="table-top-sub">
          <span class="sub-title"> 장애인,상이유공자</span>
          <span>※ 한도 금액으로 입력</span>
        </div>
        <table class="table2-1">
          <tr>
            <th>기타계절</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="welfare_1_Etc"
                v-model.trim="welfare_1_Etc"
                @change="welfare_1_EtcValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
          <tr>
            <th>하계</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="welfare_1_Summer"
                v-model.trim="welfare_1_Summer"
                @change="welfare_1_SummerValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
        </table>
        <div class="table-top-sub">
          <span class="sub-title"> 독립유공자</span>
          <span>※ 한도 금액으로 입력</span>
        </div>
        <table class="table2-1">
          <tr>
            <th>기타계절</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="welfare_2_Etc"
                v-model.trim="welfare_2_Etc"
                @change="welfare_2_EtcValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
          <tr>
            <th>하계</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="welfare_2_Summer"
                v-model.trim="welfare_2_Summer"
                @change="welfare_2_SummerValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
        </table>
        <div class="table-top-sub">
          <span class="sub-title"> 기초수급자(생계, 의료) </span>
          <span>※ 한도 금액으로 입력</span>
        </div>
        <table class="table2-1">
          <tr>
            <th>기타계절</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="welfare_3_Etc"
                v-model.trim="welfare_3_Etc"
                @change="welfare_3_EtcValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
          <tr>
            <th>하계</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="welfare_3_Summer"
                v-model.trim="welfare_3_Summer"
                @change="welfare_3_SummerValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
        </table>
        <div class="table-top-sub">
          <span class="sub-title"> 기초수급자(주거, 교육) </span>
          <span>※ 한도 금액으로 입력</span>
        </div>
        <table class="table2-1">
          <tr>
            <th>기타계절</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="welfare_4_Etc"
                v-model.trim="welfare_4_Etc"
                @change="welfare_4_EtcValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
          <tr>
            <th>하계</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="welfare_4_Summer"
                v-model.trim="welfare_4_Summer"
                @change="welfare_4_SummerValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
        </table>
        <div class="table-top-sub">
          <span class="sub-title"> 차상위계층 </span>
          <span>※ 한도 금액으로 입력</span>
        </div>
        <table class="table2-1">
          <tr>
            <th>기타계절</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="welfare_5_Etc"
                v-model.trim="welfare_5_Etc"
                @change="welfare_5_EtcValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
          <tr>
            <th>하계</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="welfare_5_Summer"
                v-model.trim="welfare_5_Summer"
                @change="welfare_5_SummerValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
        </table>
      </article>
      <article v-if="category == 'largeFamilyDiscount'">
        <div class="table-top">
          <p>대가족/생명유지장치 할인</p>
        </div>
        <div class="table-top-sub">
          <span class="sub-title"> 대가족</span>
        </div>
        <table class="table2-1">
          <tr>
            <th>할인율</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="largeFamily_1_Ratio"
                v-model.trim="largeFamily_1_Ratio"
                @change="largeFamily_1_RatioValid()"
              />
              <label for="fee_input" class="fee_input_label">%</label>
            </td>
          </tr>
          <tr>
            <th>한도 금액</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="largeFamily_1_Limit"
                v-model.trim="largeFamily_1_Limit"
                @change="largeFamily_1_LimitValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
        </table>
        <div class="table-top-sub">
          <span class="sub-title"> 3자녀 이상</span>
        </div>
        <table class="table2-1">
          <tr>
            <th>할인율</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="largeFamily_2_Ratio"
                v-model.trim="largeFamily_2_Ratio"
                @change="largeFamily_2_RatioValid()"
              />
              <label for="fee_input" class="fee_input_label">%</label>
            </td>
          </tr>
          <tr>
            <th>한도 금액</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="largeFamily_2_Limit"
                v-model.trim="largeFamily_2_Limit"
                @change="largeFamily_2_LimitValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
        </table>
        <div class="table-top-sub">
          <span class="sub-title"> 출산가구 </span>
        </div>
        <table class="table2-1">
          <tr>
            <th>할인율</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="largeFamily_3_Ratio"
                v-model.trim="largeFamily_3_Ratio"
                @change="largeFamily_3_RatioValid()"
              />
              <label for="fee_input" class="fee_input_label">%</label>
            </td>
          </tr>
          <tr>
            <th>한도 금액</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="largeFamily_3_Limit"
                v-model.trim="largeFamily_3_Limit"
                @change="largeFamily_3_LimitValid()"
              />
              <label for="fee_input" class="fee_input_label">원</label>
            </td>
          </tr>
        </table>
        <div class="table-top-sub">
          <span class="sub-title"> 생명유지장치 </span>
        </div>
        <table class="table2-1">
          <tr>
            <th>할인율</th>
            <td>
              <input
                type="text"
                name="fee_input"
                class="fee_input"
                v-model="largeFamily_4_Ratio"
                v-model.trim="largeFamily_4_Ratio"
                @change="largeFamily_4_RatioValid()"
              />
              <label for="fee_input" class="fee_input_label">%</label>
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
      category: 'usageGuaranteeDiscount', //할인 종류 선택

      decrementGuaranteeHousingLow: '', //필수사용량 보장공제_주택용(저압)
      decrementGuaranteeHousingHigh: '', //필수사용량 보장공제_주택용(고압)

      welfare_1_Etc: '', //복지할인_장애인,상이유공자_기타계절
      welfare_1_Summer: '', //복지할인_장애인,상이유공자_하계
      welfare_2_Etc: '', //복지할인_독립유공자_기타계절
      welfare_2_Summer: '', //복지할인_독립유공자_하계
      welfare_3_Etc: '', //복지할인_기초수급자(생계,의료)_기타계절
      welfare_3_Summer: '', //복지할인_기초수급자(생계,의료)_하계
      welfare_4_Etc: '', //복지할인_기초수급자(주거,교육)_기타계절
      welfare_4_Summer: '', //복지할인_기초수급자(주거,교육)_하계
      welfare_5_Etc: '', //복지할인_차상위계층_기타계절
      welfare_5_Summer: '', //복지할인_차상위계층_하계

      largeFamily_1_Ratio: '', //대가족할인_대가족_할인율
      largeFamily_1_Limit: '', //대가족할인_대가족_한도금액
      largeFamily_2_Ratio: '', //대가족할인_대가족_할인율
      largeFamily_2_Limit: '', //대가족할인_대가족_한도금액
      largeFamily_3_Ratio: '', //대가족할인_대가족_할인율
      largeFamily_3_Limit: '', //대가족할인_대가족_한도금액
      largeFamily_4_Ratio: '', //대가족할인_대가족_할인율
    };
  },
  methods: {
    decrementGuaranteeHousingLowValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.decrementGuaranteeHousingLow)) == 0) {
        alert('숫자만 입력해주세요.');

        this.decrementGuaranteeHousingLow = '';
      } else {
        this.decrementGuaranteeHousingLow = String(
          this.decrementGuaranteeHousingLow,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.decrementGuaranteeHousingLow;
    },
    decrementGuaranteeHousingHighValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.decrementGuaranteeHousingHigh)) == 0) {
        alert('숫자만 입력해주세요.');

        this.decrementGuaranteeHousingHigh = '';
      } else {
        this.decrementGuaranteeHousingHigh = String(
          this.decrementGuaranteeHousingHigh,
        )
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.decrementGuaranteeHousingHigh;
    },
    welfare_1_EtcValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.welfare_1_Etc)) == 0) {
        alert('숫자만 입력해주세요.');

        this.welfare_1_Etc = '';
      } else {
        this.welfare_1_Etc = String(this.welfare_1_Etc)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.welfare_1_Etc;
    },
    welfare_1_SummerValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.welfare_1_Summer)) == 0) {
        alert('숫자만 입력해주세요.');

        this.welfare_1_Summer = '';
      } else {
        this.welfare_1_Summer = String(this.welfare_1_Summer)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.welfare_1_Summer;
    },
    welfare_2_EtcValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.welfare_2_Etc)) == 0) {
        alert('숫자만 입력해주세요.');

        this.welfare_2_Etc = '';
      } else {
        this.welfare_2_Etc = String(this.welfare_2_Etc)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.welfare_2_Etc;
    },
    welfare_2_SummerValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.welfare_2_Summer)) == 0) {
        alert('숫자만 입력해주세요.');

        this.welfare_2_Summer = '';
      } else {
        this.welfare_2_Summer = String(this.welfare_2_Summer)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.welfare_2_Summer;
    },
    welfare_3_EtcValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.welfare_3_Etc)) == 0) {
        alert('숫자만 입력해주세요.');

        this.welfare_3_Etc = '';
      } else {
        this.welfare_3_Etc = String(this.welfare_3_Etc)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.welfare_3_Etc;
    },
    welfare_3_SummerValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.welfare_3_Summer)) == 0) {
        alert('숫자만 입력해주세요.');

        this.welfare_3_Summer = '';
      } else {
        this.welfare_3_Summer = String(this.welfare_3_Summer)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.welfare_3_Summer;
    },
    welfare_4_EtcValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.welfare_4_Etc)) == 0) {
        alert('숫자만 입력해주세요.');

        this.welfare_4_Etc = '';
      } else {
        this.welfare_4_Etc = String(this.welfare_4_Etc)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.welfare_4_Etc;
    },
    welfare_4_SummerValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.welfare_4_Summer)) == 0) {
        alert('숫자만 입력해주세요.');

        this.welfare_4_Summer = '';
      } else {
        this.welfare_4_Summer = String(this.welfare_4_Summer)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.welfare_4_Summer;
    },
    welfare_5_EtcValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.welfare_5_Etc)) == 0) {
        alert('숫자만 입력해주세요.');

        this.welfare_5_Etc = '';
      } else {
        this.welfare_5_Etc = String(this.welfare_5_Etc)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.welfare_5_Etc;
    },
    welfare_5_SummerValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.welfare_5_Summer)) == 0) {
        alert('숫자만 입력해주세요.');

        this.welfare_5_Summer = '';
      } else {
        this.welfare_5_Summer = String(this.welfare_5_Summer)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.welfare_5_Summer;
    },
    largeFamily_1_RatioValid: function () {
      const re = /^\d{1,3}\.\d{0,2}$/;
      if (
        re.test(String(this.largeFamily_1_Ratio)) == 0 ||
        this.largeFamily_1_Ratio > 100
      ) {
        alert('백분율로 입력하세요.');
        this.largeFamily_1_Ratio = '';
      } else {
        this.largeFamily_1_Ratio;
      }
      return this.largeFamily_1_Ratio;
    },
    largeFamily_1_LimitValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.largeFamily_1_Limit)) == 0) {
        alert('숫자만 입력해주세요.');

        this.largeFamily_1_Limit = '';
      } else {
        this.largeFamily_1_Limit = String(this.largeFamily_1_Limit)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.largeFamily_1_Limit;
    },
    largeFamily_2_RatioValid: function () {
      const re = /^\d{1,3}\.\d{0,2}$/;
      if (
        re.test(String(this.largeFamily_2_Ratio)) == 0 ||
        this.largeFamily_2_Ratio > 100
      ) {
        alert('백분율로 입력하세요.');
        this.largeFamily_2_Ratio = '';
      } else {
        this.largeFamily_2_Ratio;
      }
      return this.largeFamily_2_Ratio;
    },
    largeFamily_2_LimitValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.largeFamily_2_Limit)) == 0) {
        alert('숫자만 입력해주세요.');

        this.largeFamily_2_Limit = '';
      } else {
        this.largeFamily_2_Limit = String(this.largeFamily_2_Limit)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.largeFamily_2_Limit;
    },
    largeFamily_3_RatioValid: function () {
      const re = /^\d{1,3}\.\d{0,2}$/;
      if (
        re.test(String(this.largeFamily_3_Ratio)) == 0 ||
        this.largeFamily_3_Ratio > 100
      ) {
        alert('백분율로 입력하세요.');
        this.largeFamily_3_Ratio = '';
      } else {
        this.largeFamily_3_Ratio;
      }
      return this.largeFamily_3_Ratio;
    },
    largeFamily_3_LimitValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.largeFamily_3_Limit)) == 0) {
        alert('숫자만 입력해주세요.');

        this.largeFamily_3_Limit = '';
      } else {
        this.largeFamily_3_Limit = String(this.largeFamily_3_Limit)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.largeFamily_3_Limit;
    },
    largeFamily_4_RatioValid: function () {
      const re = /^\d{1,3}\.\d{0,2}$/;
      if (
        re.test(String(this.largeFamily_4_Ratio)) == 0 ||
        this.largeFamily_4_Ratio > 100
      ) {
        alert('백분율로 입력하세요.');
        this.largeFamily_4_Ratio = '';
      } else {
        this.largeFamily_4_Ratio;
      }
      return this.largeFamily_4_Ratio;
    },
  },
};
</script>

<style scoped>
.fee_input {
  padding: 5px 40px 5px 14px;
  box-sizing: border-box;
  text-align: right;
}
</style>
