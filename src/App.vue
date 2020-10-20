<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import $ from 'jquery';

import './assets/js/jquery.ripples';
$('body').ripples();

export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "./assets/scss/all";
</style>
