<template>
  <div class="menu-wrap">
    <ul class="main-menu" v-bind:class="active" v-on:click.prevent>
      <div class="main-meun_wrap">
        <li :class="{ 'now-menu': currentPage == 'dashboard' }">
          <router-link to="/dashboard">대시보드</router-link>
          <span></span>
        </li>
        <li :class="{ 'now-menu': currentPage == 'activelist' }">
          <router-link to="/activelist">회원정보 관리</router-link>
          <span></span>
        </li>
        <li :class="{ 'now-menu': currentPage == 'measurelist' }">
          <router-link to="/measurelist">측정내역 관리</router-link>
          <span></span>
        </li>
        <li :class="{ 'now-menu': currentPage == 'basicfee' }">
          <router-link to="/basicfee">계산공식 관리</router-link>
          <span></span>
        </li>
        <li :class="{ 'now-menu': currentPage == 'version' }">
          <router-link to="/version">버전 관리</router-link>
          <span></span>
        </li>
        <li :class="{ 'now-menu': currentPage == 'eventpushlist' }">
          <router-link to="/eventpushlist">PUSH 관리</router-link>
          <span></span>
        </li>
        <li :class="{ 'now-menu': currentPage == 'faqlist' }">
          <router-link to="/faqlist">CS 관리</router-link>
          <span></span>
        </li>
        <li :class="{ 'now-menu': currentPage == 'campaignlist' }">
          <router-link to="/campaignlist">캠페인물 관리</router-link>
          <span></span>
        </li>
        <li :class="{ 'now-menu': currentPage == 'downloadstatistical' }">
          <router-link to="/downloadstatistical">통계 관리</router-link>
          <span></span>
        </li>
      </div>
    </ul>
    <ul class="sub-menu" v-show="this.currentPage == 'activelist'">
      <li>
        <router-link to="/activelist">활성회원</router-link>
        <span></span>
      </li>
      <li>
        <router-link to="/dormancylist">휴면회원</router-link>
        <span></span>
      </li>
      <li>
        <router-link to="/secessionlist">탈퇴회원</router-link>
        <span></span>
      </li>
    </ul>
    <ul class="sub-menu" v-show="this.currentPage == 'measurelist'">
      <li class="now-menu">
        <router-link to="/measurelist">측정내역</router-link>
        <span></span>
      </li>
    </ul>
    <ul class="sub-menu" v-show="this.currentPage == 'basicfee'">
      <li>
        <router-link to="/basicfee">기본요금</router-link>
        <span></span>
      </li>
      <li class="sub-menu">
        <router-link to="/electricityfee">전력량 요금</router-link>
        <span></span>
      </li>
      <li>
        <router-link to="/environmentfee"
          >기후환경요금 및 <br />
          연료비 조정액</router-link
        >
        <span></span>
      </li>
      <li>
        <router-link to="/decrementfee">감액 요금제</router-link>
        <span></span>
      </li>
      <li>
        <router-link to="/vatfee"
          >부가가치세 및 <br />
          전력산업기반기금</router-link
        >
        <span></span>
      </li>
    </ul>
    <ul class="sub-menu" v-show="this.currentPage == 'version'">
      <li class="now-menu">
        <router-link to="/version">버전 등록</router-link>
        <span></span>
      </li>
    </ul>
    <ul class="sub-menu" v-show="this.currentPage == 'eventpushlist'">
      <li>
        <router-link to="/eventpushlist">PUSH 발송 목록</router-link>
        <span></span>
      </li>
      <li>
        <router-link to="/eventpushcreate">PUSH 생성</router-link>
        <span></span>
      </li>
    </ul>
    <ul
      class="sub-menu"
      v-show="
        this.currentPage == 'faqlist' ||
        this.currentPage == 'faqcreate' ||
        this.currentPage == 'asklist'
      "
    >
      <li
        class="sub-menu-title"
        :class="{
          'now-menu sub-menu-title':
            currentPage == 'faqlist' || currentPage == 'faqcreate',
        }"
      >
        <p>FAQ 관리</p>
        <span></span>
      </li>
      <li>
        <router-link to="/faqlist" @click="faqCheckOn()">FAQ 목록</router-link>
        <span></span>
      </li>
      <li>
        <router-link to="faqcreate" @click="faqCheckOn()">FAQ 생성</router-link>
        <span></span>
      </li>
      <li
        class="sub-menu-title"
        :class="{
          'now-menu sub-menu-title': currentPage == 'asklist',
        }"
      >
        <p>1:1 문의 관리</p>
        <span></span>
      </li>
      <li>
        <router-link to="/asklist" @click="askCheckOn()"
          >1:1 문의 목록</router-link
        >
        <span></span>
      </li>
    </ul>
    <ul class="sub-menu" v-show="this.currentPage == 'campaignlist'">
      <li>
        <router-link to="/campaignlist">캠페인물 목록</router-link>
        <span></span>
      </li>
      <li class="sub-menu">
        <router-link to="/campaigncreate">캠페인물 생성</router-link>
        <span></span>
      </li>
    </ul>
    <ul class="sub-menu" v-show="this.currentPage == 'downloadstatistical'">
      <li>
        <router-link to="/downloadstatistical">설치현황 통계</router-link>
        <span></span>
      </li>
      <li>
        <router-link to="/measurestatistical">인식현황 통계</router-link>
        <span></span>
      </li>
      <li class="sub-menu">
        <router-link to="/userstatistical">회원현황 통계</router-link>
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // active: 'item',
      currentPage: '',
    };
  },
  created() {
    var path = window.location.href.split('/');

    if (path[3] == 'dashboard') {
      this.currentPage = 'dashboard';
    } else if (path[3] == 'activelist') {
      this.currentPage = 'activelist';
    } else if (path[3] == 'measurelist') {
      this.currentPage = 'measurelist';
    } else if (path[3] == 'basicfee') {
      this.currentPage = 'basicfee';
    } else if (path[3] == 'version') {
      this.currentPage = 'version';
    } else if (path[3] == 'eventpushlist') {
      this.currentPage = 'eventpushlist';
    } else if (path[3] == 'faqlist') {
      this.currentPage = 'faqlist';
    } else if (path[3] == 'faqcreate') {
      this.currentPage = 'faqcreate';
    } else if (path[3] == 'asklist') {
      this.currentPage = 'asklist';
    } else if (path[3] == 'campaignlist') {
      this.currentPage = 'campaignlist';
    } else if (path[3] == 'downloadstatistical') {
      this.currentPage = 'downloadstatistical';
    }
  },
  methods: {
    askCheckOn() {
      this.currentPage = 'asklist';
    },
    faqCheckOn() {
      this.currentPage = 'faqlist';
    },
  },
};
</script>

<style scoped>
.router-link-exact-active {
  color: var(--white);
  font-weight: 500;
  background: var(--grey5);
}

.router-link-exact-active + span {
  border-color: var(--black);
}

.menu-wrap {
  display: flex;
  height: 100%;
}
.activelist:hover #merong {
  display: block;
}
</style>
