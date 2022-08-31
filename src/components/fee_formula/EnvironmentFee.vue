<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>기후환경요금 및 연료비 조정액</h3>
      </li>
      <div class="title-right">
        <p>계산공식 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>기후환경요금 및 연료비 조정액</b>
      </div>
    </ul>
    <section>
      <article>
        <ul class="align2">
          <li>
            <table class="table2-1">
              <tr>
                <th>기후환경요금</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="fee_input"
                    class="fee_input"
                    v-model="environmentFee"
                    v-model.trim="environmentFee"
                    @change="environmentFeeValid()"
                  />
                  <label for="fee_input" class="fee_input_label">원/kWh</label>
                </td>
              </tr>
            </table>
          </li>
          <li>
            <table class="table2-1">
              <tr>
                <th>연료비 조정액 <span>※부호 입력 불가</span></th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="fee_input"
                    class="fee_input"
                    v-model="fuelFee"
                    v-model.trim="fuelFee"
                    @change="fuelFeeValid()"
                  />
                  <label for="fee_input" class="fee_input_label">원/kWh</label>
                </td>
              </tr>
            </table>
          </li>
        </ul>
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
      environmentFee: '', // 기후환경요금
      fuelFee: '', //연료비 조정액
    };
  },
  methods: {
    environmentFeeValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.environmentFee)) == 0) {
        alert('숫자만 입력해주세요.');

        this.environmentFee = '';
      } else {
        this.environmentFee = String(this.environmentFee)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.environmentFee;
    },
    fuelFeeValid: function () {
      const re = /^[0-9]+$/;
      if (re.test(String(this.fuelFee)) == 0) {
        alert('숫자만 입력해주세요.');

        this.fuelFee = '';
      } else {
        this.fuelFee = String(this.fuelFee)
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return this.fuelFee;
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
