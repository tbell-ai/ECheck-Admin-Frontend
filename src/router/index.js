import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginPage.vue'),
    meta: { auth: false },
  },
  {
    path: '/test-user',
    name: 'test',
    component: () => import('../components/test_components/UserTest.vue'),
    meta: { auth: false },
  },
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/dashboard/Dashboard.vue'),
    meta: { auth: false },
    children: [
      {
        path: '/dashboard',
        component: () => import('../components/dashboard/Dashboard.vue'),
        meta: { auth: false },
      },
    ],
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () => import('../views/user_info/UserInfoPage.vue'),
    meta: { auth: false },
    children: [
      {
        path: '/activelist',
        component: () => import('../components/user_info/ActiveUserList.vue'),
        meta: { auth: false },
      },
      {
        path: '/activedetail/:idx',
        component: () => import('../components/user_info/ActiveUserDetail.vue'),
        meta: { auth: false },
      },
      {
        path: '/dormancylist',
        component: () => import('../components/user_info/DormancyUserList.vue'),
        meta: { auth: false },
      },
      {
        path: '/dormancydetail',
        component: () =>
          import('../components/user_info/DormancyUserDetail.vue'),
        meta: { auth: false },
      },
      {
        path: '/secessionlist',
        component: () =>
          import('../components/user_info/SecessionUserList.vue'),
        meta: { auth: false },
      },
      {
        path: '/secessiondetail',
        component: () =>
          import('../components/user_info/SecessionUserDetail.vue'),
        meta: { auth: false },
      },
    ],
  },
  {
    path: '/measurehistory',
    name: 'measurehistory',
    component: () => import('../views/measurehistory/MeasureHistoryPage.vue'),
    meta: { auth: false },
    children: [
      {
        path: '/measurelist',
        component: () =>
          import('../components/measure_history/MeasureHistoryList.vue'),
        meta: { auth: false },
      },
      {
        path: '/measuredetail',
        component: () =>
          import('../components/measure_history/MeasureHistoryDetail.vue'),
        meta: { auth: false },
      },
    ],
  },
  {
    path: '/formula',
    name: 'formula',
    component: () => import('../views/fee_formula/FeeFormulaPage.vue'),
    meta: { auth: false },
    children: [
      {
        path: '/basicfee',
        component: () => import('../components/fee_formula/BasicFee.vue'),
        meta: { auth: false },
      },
      {
        path: '/electricityfee',
        component: () => import('../components/fee_formula/ElectricityFee.vue'),
        meta: { auth: false },
      },
      {
        path: '/environmentfee',
        component: () => import('../components/fee_formula/EnvironmentFee.vue'),
        meta: { auth: false },
      },
      {
        path: '/decrementfee',
        component: () => import('../components/fee_formula/DecrementFee.vue'),
        meta: { auth: false },
      },
      {
        path: '/vatfee',
        component: () => import('../components/fee_formula/VatFee.vue'),
        meta: { auth: false },
      },
    ],
  },
  {
    path: '/',
    name: 'version',
    component: () => import('../views/version_history/VersionHistoryPage.vue'),
    meta: { auth: false },
    children: [
      {
        path: '/version',
        component: () =>
          import('../components/version_history/VersionHistory.vue'),
        meta: { auth: false },
      },
    ],
  },
  {
    path: '/',
    name: 'eventpush',
    component: () => import('../views/event_push/EventPushPage.vue'),
    meta: { auth: false },
    children: [
      {
        path: '/eventpushlist',
        component: () => import('../components/event_push/EventPushList.vue'),
        meta: { auth: false },
      },
      {
        path: '/eventpushcreate',
        component: () => import('../components/event_push/EventPushCreate.vue'),
        meta: { auth: false },
      },
      {
        path: '/eventpushdetail',
        component: () => import('../components/event_push/EventPushDetail.vue'),
        meta: { auth: false },
      },
    ],
  },
  {
    path: '/cs',
    name: 'cs',
    component: () => import('../views/cs/CsPage.vue'),
    meta: { auth: false },
    children: [
      {
        path: '/faqlist',
        component: () => import('../components/cs/faq/FaqList.vue'),
        meta: { auth: false },
      },
      {
        path: '/faqcreate',
        component: () => import('../components/cs/faq/FaqCreate.vue'),
        meta: { auth: false },
      },
      {
        path: '/faqdetail',
        component: () => import('../components/cs/faq/FaqDetail.vue'),
        meta: { auth: false },
      },
      {
        path: '/faqupdate',
        component: () => import('../components/cs/faq/FaqUpdate.vue'),
        meta: { auth: false },
      },
      {
        path: '/asklist',
        component: () => import('../components/cs/ask/AskList.vue'),
        meta: { auth: false },
      },
      {
        path: '/askdetail',
        component: () => import('../components/cs/ask/AskDetail.vue'),
        meta: { auth: false },
      },
      {
        path: '/askanswer',
        component: () => import('../components/cs/ask/AskAnswer.vue'),
        meta: { auth: false },
      },
    ],
  },
  {
    path: '/campaign',
    name: 'campaign',
    component: () => import('../views/campaign/CampaignPage.vue'),
    meta: { auth: false },
    children: [
      {
        path: '/campaignlist',
        component: () => import('../components/campaign/CampaignList.vue'),
        meta: { auth: false },
      },
      {
        path: '/campaigncreate',
        component: () => import('../components/campaign/CampaignCreate.vue'),
        meta: { auth: false },
      },
      {
        path: '/campaigndetail',
        component: () => import('../components/campaign/CampaignDetail.vue'),
        meta: { auth: false },
      },
      {
        path: '/campaignupdate',
        component: () => import('../components/campaign/CampaignUpdate.vue'),
        meta: { auth: false },
      },
    ],
  },
  {
    path: '/statistical',
    name: 'statistical',
    component: () => import('../views/statistical/StatisticalPage.vue'),
    meta: { auth: false },
    children: [
      {
        path: '/downloadstatistical',
        component: () =>
          import('../components/statistical/DownloadStatistical.vue'),
        meta: { auth: false },
      },
      {
        path: '/measurestatistical',
        component: () =>
          import('../components/statistical/MeasureStatistical.vue'),
        meta: { auth: false },
      },
      {
        path: '/userstatistical',
        component: () =>
          import('../components/statistical/UserStatistical.vue'),
        meta: { auth: false },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
