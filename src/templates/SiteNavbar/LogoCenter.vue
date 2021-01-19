<template>
  <nav ref="nav" class="navbar navbar-expand-md">
    <img src="/img/brand/logo.png" class="img-logo d-md-none d-lg-none"/>
    <b-button class="bg-transparent d-md-none nav-link ml-auto mt--2 pl-2 pt-1 pr-2 pb-1"
              data-toggle="collapse" @click="$emit('toggle')">
      <i class="fas fa-bars fa-2x"/>
    </b-button>
    <LinksSidebar items-classes="container-fluid justify-content-between d-none d-md-flex">
      <template>
        <slot name="brand"><span class="h4 mb-0 d-lg-inline-block navbar-brand nav-link">LOGO</span></slot>
      </template>
    </LinksSidebar>
  </nav>
</template>

<script>
import LinksSidebar from '@/templates/SiteNavbar/LinksSidebar'

export default {
  name: 'LogoCenter',
  components: {LinksSidebar}
}
</script>

<style lang="scss" scoped>
::v-deep #navbar-main {
  nav {
    &.logo-sm {
      img {
        margin-top: -2rem !important;
      }
    }
  }
}
</style>
