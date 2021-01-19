<template>
  <div class="content">
    <SiteBaseNav/>

      <router-view></router-view>
      <slot></slot>

    <div class="mt-5 mb-5 w-100" style="color: transparent;">.</div>
    <Footer />
  </div>
</template>

<script>
  // import { FadeTransition } from 'vue2-transitions'
  import SiteBaseNav from '@/templates/SiteNavbar/SiteBaseNav'
  import Footer from '@/templates/Footer'

  export default {
    name: 'SiteLayout',
    components: {
      Footer,
      SiteBaseNav,
    }
  }
</script>

<style lang="scss" scoped>
  /deep/ #main-nav {
    border-left: 1px;
    border-top: 1px;
    border-right: 1px;
    border-bottom: 1px;
    background-color: transparent;
    color: #2bffc6;
  }
</style>
