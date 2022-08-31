<template>
  <div id="wrap">
    <FrontHeader></FrontHeader>
    <main id="main">
      <div class="menu">
        <FrontSnbMain></FrontSnbMain>
      </div>
      <router-view />
    </main>
  </div>
</template>

<script>
import FrontHeader from '../../components/common/FrontHeader.vue';
import FrontSnbMain from '../../components/common/FrontSnbMain.vue';

export default {
  components: {
    FrontHeader,
    FrontSnbMain,
  },
};
</script>

<style></style>
