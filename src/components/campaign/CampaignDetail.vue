<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>캠페인물 상세</h3>
      </li>
      <div class="title-right">
        <p>캠페인물 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <p>캠페인물 목록</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>캠페인물 생성</b>
      </div>
    </ul>
    <section>
      <article>
        <table class="table2-1">
          <tr>
            <th>캠페인 제목</th>
            <td colspan="3">에너지절약가이드</td>
          </tr>
          <tr>
            <th>적용여부</th>
            <td colspan="3">적용</td>
          </tr>
          <tr>
            <th>캠페인 이미지</th>
            <td colspan="3" id="campaign-img">
              <img src="../../assets/images/logo/1.png" alt="" />
              <img src="../../assets/images/logo/2.png" alt="" />
              <img src="../../assets/images/logo/3.png" alt="" />
              <img src="../../assets/images/logo/4.png" alt="" />
              <img src="../../assets/images/logo/5.png" alt="" />
            </td>
          </tr>
        </table>
      </article>
      <aticle class="btn-box1">
        <router-link class="btn-c1 btn-s1" to="/campaignupdate"
          >수정</router-link
        >
        <router-link class="btn-c2 btn-s1" to="/campaignlist">목록</router-link>
      </aticle>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#campaign-img {
  display: flex;
  flex-wrap: wrap;
}
#campaign-img img {
  width: 320px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
