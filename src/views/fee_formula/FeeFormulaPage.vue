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

<style>
.table2-1 td {
  position: relative;
}

.fee_input {
  padding-right: 40px;
}

.fee_input_label {
  position: absolute;
  top: 18px;
  right: 40px;
}
</style>
