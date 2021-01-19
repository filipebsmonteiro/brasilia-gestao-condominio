<template>
  <footer class="footer footer-site px-4">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{ moment().format('YYYY') }} <a href="https://www.bratech.info" class="font-weight-bold ml-1" target="_blank">Bratech</a>
        </div>
      </div>
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">Some Link</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">About Us</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">Blog</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">Finish Link</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
  import moment from 'moment';
  export default {
    name: 'Footer',
    computed: {
      moment() {
        return moment
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
