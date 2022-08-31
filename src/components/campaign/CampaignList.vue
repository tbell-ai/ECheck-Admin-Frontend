<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>캠페인물 관리</h3>
      </li>
      <div class="title-right">
        <p>캠페인물 목록</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>캠페인물 관리</b>
      </div>
    </ul>
    <section>
      <article>
        <table class="table6">
          <tr class="campaign-apply">
            <th>1</th>
            <td class="table6-title">
              <router-link to="/campaigndetail"> 에너지절약가이드 </router-link>
            </td>

            <td class="table6-button">
              <ul class="align3">
                <!-- <li class="button-box">
                  <button class="updown-btn">
                    <img src="../../assets/images/icon/icon-up.svg" alt="" />
                  </button>
                  <button class="updown-btn">
                    <img src="../../assets/images/icon/icon-down.svg" alt="" />
                  </button>
                </li> -->
                <li class="button-box">
                  <button class="btn-c2 btn-s1">적용해제</button>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td class="table6-title">우리나라 에너지의 날</td>
            <td class="table6-button">
              <ul class="align3">
                <li class="button-box">
                  <button class="btn-c1 btn-s1">적용</button>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </article>
      <aticle class="btn-box1">
        <router-link to="campaigncreate"
          ><button class="btn-c1 btn-s1">추가</button></router-link
        >
      </aticle>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.campaign-apply th,
.campaign-apply td {
  background-color: var(--grey2);
}
</style>
