<template>
  <div :class="{'container': config.container}">
    <div id="navbar-main">
      <Component :is="config.logo" :class="` logo-${config.logoSize}`" @toggle="sidebarShow = !sidebarShow">
        <template v-slot:brand>
          <router-link to="/home">
            <img ref="logo" src="/img/brand/logo.png"/>
          </router-link>
        </template>
      </Component>
      <slot name="button">

      </slot>
      <b-sidebar id="sidebar-main" bg-variant="white" text-variant="danger" :visible="sidebarShow" shadow>
        <div class="px-3 py-2">
          <LinksSidebar/>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import LogoLeft from '@/templates/SiteNavbar/LogoLeft'
import LogoCenter from '@/templates/SiteNavbar/LogoCenter'
import LogoRight from '@/templates/SiteNavbar/LogoRight'
import LinksSidebar from '@/templates/SiteNavbar/LinksSidebar'

export default {
  name: 'SiteBaseNav',
  components: {
    LinksSidebar,
    LogoLeft,
    LogoCenter,
    LogoRight
  },
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          logo: `${process.env.VUE_APP_LAYOUT_MENU_POSITION}`,
          logoSize: `${process.env.VUE_APP_LAYOUT_MENU_LOGO}`,
          container: !parseInt(process.env.VUE_APP_LAYOUT_MENU_FULL)
        }
      }
    }
  },
  data() {
    return {
      sidebarShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep #navbar-main {
  nav {

    img {
      height: 4rem;
      margin-top: -1rem;
      margin-bottom: -1rem !important;
    }

    &.logo-md {
      @media (min-width: 768px) {
        margin-top: 1rem !important;
        margin-bottom: 1.5rem !important;
        img {
          height: 6rem;
          margin-top: -2rem !important;
          margin-bottom: -2.5rem !important;
          @media (max-width: 767.98px) {
            height: 4rem;
            margin-top: -1rem;
            margin-bottom: -1rem !important;
          }
        }
      }
    }

    &.logo-lg {
      @media (min-width: 768px) {
        margin-top: 1.5rem !important;
        margin-bottom: 2rem !important;
        img {
          height: 7rem;
          margin-top: -2.5rem !important;
          margin-bottom: -3rem !important;
        }
      }
    }
  }
}
</style>
