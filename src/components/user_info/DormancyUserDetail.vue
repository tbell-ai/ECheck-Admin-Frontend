<template>
  <div class="main-area">
    <ul class="title">
      <li class="title-left">
        <h3>휴면회원 상세정보</h3>
      </li>
      <div class="title-right">
        <p>회원정보 관리</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <p>휴면회원</p>
        <img src="../../assets/images/icon/icon-now-arrow.svg" alt="" />
        <b>휴면회원 상세정보</b>
      </div>
    </ul>
    <section>
      <article>
        <div class="table-top">
          <b>티벨어드민</b>
          <p>님</p>
        </div>
        <table class="table2">
          <tr>
            <th>닉네임</th>
            <td>티벨어드민</td>
          </tr>
          <tr>
            <th>ID</th>
            <td>tbell_admin</td>
          </tr>
          <tr>
            <th>PW</th>
            <td>tbell0518!</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>tbell_admin@tbell.co.kr</td>
          </tr>
          <tr>
            <th>상태</th>
            <td>휴면회원</td>
          </tr>
          <tr>
            <th>가입일</th>
            <td>2021.05.06</td>
          </tr>
          <tr>
            <th>휴면회원 전환일시</th>
            <td>2022.05.11</td>
          </tr>
        </table>
      </article>
      <aticle class="btn-box1">
        <router-link class="btn-c2 btn-s1" to="/dormancylist">목록</router-link>
      </aticle>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
