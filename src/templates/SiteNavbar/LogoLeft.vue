<template>
  <nav ref="nav" class="navbar navbar-expand-md">
    <slot name="brand">
      <span class="h4 mb-0 d-lg-inline-block navbar-brand nav-link">LOGO</span>
    </slot>
    <b-button class="bg-transparent d-md-none nav-link ml-auto mt--2 pl-2 pt-1 pr-2 pb-1"
              data-toggle="collapse" @click="$emit('toggle')">
      <i class="fas fa-bars fa-2x"/>
    </b-button>
    <LinksSidebar items-classes="flex-fill justify-content-end d-none d-md-flex"/>
  </nav>
</template>
<script>
import LinksSidebar from '@/templates/SiteNavbar/LinksSidebar'

export default {
  name: 'LogoLeft',
  components: {LinksSidebar}
}
</script>
