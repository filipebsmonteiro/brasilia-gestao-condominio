<template>
  <div class="row align-items-center justify-content-center m-1">
    <b-btn id="pagination-previous" class="col-md-3" variant="link"
           @click="changePage(local_page-1)" :disabled="local_page === 1">
      {{ $t('components.paginator.anterior') }}
    </b-btn>
    <div class="col-md-3 d-flex">
      <span class="m-auto pr-2">{{ $t('components.paginator.pagina') }}</span>
      <b-input id="pagination-page-input" :max="totalPages" type="number" v-model="local_page"
               @change="changePage(local_page)"/>
      <span class="m-auto pl-2" style="white-space: nowrap;">
        {{ $t('components.paginator.de') + ' ' }}<span id="pagination-total-pages">{{ totalPages }}</span>
      </span>
    </div>
    <b-btn id="pagination-next" class="col-md-3" variant="link"
           @click="changePage(local_page+1)" :disabled="local_page === totalPages">
      {{ $t('components.paginator.proxima') }}
    </b-btn>
    <div class="col-md-3 d-inline-flex">
      <b-select id="pagination-per-page" :options="perPageOptions" v-model="per_page" @change="changePerPage(per_page)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paginator",
  props: {
    perPage: {
      type: Number,
      default: 10
    },
    page: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      local_page: 1,
      local_old_page: 1,
      per_page: 10
    }
  },
  computed: {
    perPageOptions() {
      return [
        {
          text: '10 ' + this.$t('components.paginator.por_pagina'),
          value: 10
        },
        {
          text: '20 ' + this.$t('components.paginator.por_pagina'),
          value: 20
        },
        {
          text: '30 ' + this.$t('components.paginator.por_pagina'),
          value: 30
        },
        {
          text: '40 ' + this.$t('components.paginator.por_pagina'),
          value: 40
        },
        {
          text: '50 ' + this.$t('components.paginator.por_pagina'),
          value: 50
        }
      ]
    },
    totalPages() {
      if (!this.total) return 0
      if (this.total % this.per_page === 0) {
        return this.total / this.per_page
      }
      return Math.floor(this.total / this.per_page) + 1
    }
  },
  methods: {
    changePage(page) {
      page = parseInt(page)
      if (page <= 0 || page > this.totalPages) {
        this.local_page = this.local_old_page
        return
      }
      this.local_page = page
      this.local_old_page = page
      this.$emit('change', {
        page,
        per_page: this.per_page
      })
    },
    changePerPage(per_page) {
      this.per_page = per_page
      this.local_page = 1
      this.$emit('change', {
        page: this.local_page,
        per_page: per_page
      })
    }
  },
  mounted() {
    this.per_page = this.perPage
    this.local_page = this.page
    this.local_old_page = this.page
  },
}
</script>

<style scoped>

</style>
