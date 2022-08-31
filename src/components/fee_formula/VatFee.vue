<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>부가가치세 및 전력산업기반기금</h3>
      </li>
      <div class="title-right">
        <p>계산공식 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>부가가치세 및 전력산업기반기금</b>
      </div>
    </ul>
    <section>
      <article>
        <ul class="align2">
          <li>
            <table class="table2-1">
              <tr>
                <th>부가가치세<span>※ 백분율로 입력</span></th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="fee_input"
                    class="fee_input"
                    v-model="vatFee"
                    v-model.trim="vatFee"
                    @change="vatFeeValid()"
                  />
                  <label for="fee_input" class="fee_input_label">%</label>
                </td>
              </tr>
            </table>
          </li>
          <li>
            <table class="table2-1">
              <tr>
                <th>전력산업기반기금 <span>※ 백분율로 입력</span></th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="fee_input"
                    class="fee_input"
                    v-model="industrialBaseFee"
                    v-model.trim="industrialBaseFee"
                    @change="industrialBaseFeeValid()"
                  />
                  <label for="fee_input" class="fee_input_label">%</label>
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
      vatFee: '', //부가가치세
      industrialBaseFee: '', //전력산업기반기금
    };
  },
  methods: {
    vatFeeValid: function () {
      const re = /^\d{1,3}\.\d{0,2}$/;
      if (re.test(String(this.vatFee)) == 0 || this.vatFee > 100) {
        alert('백분율로 입력하세요.  ex) "45" 인 경우 "45.0"으로 입력');
        this.vatFee = '';
      } else {
        this.vatFee;
      }
      return this.vatFee;
    },
    industrialBaseFeeValid: function () {
      const re = /^\d{1,3}\.\d{0,2}$/;
      if (
        re.test(String(this.industrialBaseFee)) == 0 ||
        this.industrialBaseFee > 100
      ) {
        alert('백분율로 입력하세요.');
        this.industrialBaseFee = '';
      } else {
        this.industrialBaseFee;
      }
      return this.industrialBaseFee;
    },
  },
};
</script>

<style></style>
