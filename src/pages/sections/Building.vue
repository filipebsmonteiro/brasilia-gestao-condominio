<template>
  <section class="section d-flex flex-column">
    <SiteBaseNav/>
    <div class="container mb-auto mt-auto">
      <div class="row">
        <div class="col-md-12">
          <h2 style="text-shadow: 5px 6px 9px black;">Ao seu lado na</h2>
          <h2 style="text-shadow: 5px 6px 9px black;">Gestão do seu</h2>
          <h1 style="text-shadow: 5px 6px 9px black;"> Condomínio</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SiteBaseNav from "@/templates/SiteNavbar/SiteBaseNav";
export default {
name: "Building",
  components: {SiteBaseNav}
}
</script>

<style lang="scss" scoped>
.section {
  background: url("/img/sections/building.jpg") top center;
  background-size: cover;
  min-height: 100vh !important;

  &::before {
    content: "";
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  ::v-deep #navbar-main {
    nav {
      border-bottom-color: #fff !important;

      .nav-link {
        color: #fff !important;
      }
    }
  }

  .container {
    text-transform: inherit;
    position: relative;
    font-weight: bold;

    .row {
      @media (max-width: 776px) {
        padding-top: 50px;
        padding-bottom: 50px;
      }

      h1 {
        color: white !important;
        line-height: 7rem;
        font-size: 100px;
        @media (max-width: 776px) {
          font-size: 65px !important;
        }
      }

      h2 {
        color: white !important;
        line-height: 7rem;
        font-size: 75px;
        @media (max-width: 776px) {
          font-size: 55px !important;
        }
      }
    }
  }
}
</style>
