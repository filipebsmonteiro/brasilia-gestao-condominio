<template>
  <div class="d-flex flex-md-fill">
    <div :class="itemsClasses">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="'/'">
            <span class="heading">Página Inicial</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/'">
            <span class="heading">Serviços</span>
          </router-link>
        </li>
      </ul>

      <slot/>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="'/'">
            <span class="heading">Notícias</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/'">
            <span class="heading">Contato</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/'">
            <span class="heading">Área do CLiente</span>
          </router-link>
        </li>

      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'LinksSidebar',
    props: {
      itemsClasses: {
        type: String,
        default: ''
      },
    },
  }
</script>

<style lang="scss" scoped>
.position-absolute{
  margin-top: 0.15rem;
}
</style>
