<template>
  <div>
    <b-card
        v-if="loading || items.length > 0"
        :class="{
          'ml-3 mr-3 mb-3': !marginless, 'm-0': marginless,
          'border-0': borderless
        }"
        body-class="p-0">
      <b-overlay :show="loading">
        <b-table
            id="main-table"
            :ref="ref"
            head-variant="light"
            :items="items"
            :fields="localFields"
            :hover="hover"
            :borderless="borderless"
            :bordered="bordered"
            :striped="striped"
            :small="small"
            :stacked="stacked"
            :thead-class="theadClass"
            :tbody-class="tbodyClass"
            :table-class="tableClass"
            :details-td-class="detailsTdClass"
            responsive
        >
          <template v-if="selectable" v-slot:head(selected)>
            <b-check v-model="selectAll" @change="onRowSelected(items)">
              <slot name="select-text"/>
            </b-check>
          </template>
          <template v-if="selectable" v-slot:cell(selected)="{ item }">
            <b-check v-model="item.rowSelected" @change="onRowSelected(item)"/>
          </template>
          <template v-for="slotName in Object.keys($scopedSlots)" v-slot:[slotName]="slotScope">
            <slot :name="slotName" v-bind="slotScope"/>
          </template>
        </b-table>
      </b-overlay>
      <!--Loading v-else/-->
      <Paginator
          v-if="paginator.total > paginator.per_page"
          :page="paginator.page"
          :per-page="paginator.per_page"
          :total="paginator.total"
          @change="evt => $emit('list', evt)"
      />
    </b-card>
    <EmptyData v-else :title="textEmpty">
      <router-link id="btn-create" v-if="routeNew && textNew" :to="{name: routeNew}" class="btn btn-primary">
        {{ textNew }}
      </router-link>
    </EmptyData>
  </div>
</template>

<script>
import EmptyData from "@/components/EmptyData";
import Loading from "@/components/Loading";
import Paginator from "@/components/Paginator";

export default {
  name: "TableSimple",
  components: {
    Paginator,
    EmptyData,
    Loading
  },
  props: {
    hover: {
      type: Boolean,
      default: false
    },
    borderless: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    stacked: {
      type: Boolean,
      default: false
    },
    theadClass: {
      type: String,
      default: ''
    },
    tbodyClass: {
      type: String,
      default: ''
    },
    tableClass: {
      type: String,
      default: ''
    },
    detailsTdClass: {
      type: String,
      default: ''
    },
    marginless: {
      type: Boolean,
      default: false
    },



    textEmpty: {
      type: String,
      default: ''
    },
    items: {
      type: Array
    },
    loading: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: false
    },
    fields: {
      type: Array,
      default: () => []
    },
    paginator: {
      type: Object,
      default: () => {
        return {
          per_page: null,
          page: null,
          total: null
        }
      }
    },
    routeNew: {
      type: String,
      default: null
    },
    textNew: {
      type: String,
      default: null
    },
  },
  computed: {
    localFields() {
      if (this.selectable) {
        return ['selected', ...this.fields]
      }
      return this.fields
    }
  },
  watch: {
    items(newVal, oldVal) {
      if (newVal.length === 0) {//} || this.items !== this.selected){
        this.selectAll = false
      }
    }
  },
  data() {
    return {
      ref: null,
      selectAll: false,
      selected: []
    }
  },
  mounted() {
    this.ref = this._uid
  },
  methods: {
    async onRowSelected(checked) {
      if (Array.isArray(checked)) {
        if (this.selectAll) {
          this.selected = []
        } else {
          this.selected = this.items
        }
      } else {
        console.log(this.selected)
        if (checked.rowSelected) {
          this.selected = this.selected.filter(i => i.id !== checked.id)
        } else {
          this.selected = [...this.selected, checked]
        }
      }

      this.$emit('select', this.selected)
    },
  }
}
</script>

<style lang="scss" scoped>
/deep/ .badge-danger {
  background-color: #ffe1de;
  color: #e74a3b;
}

/deep/ .badge-success {
  background-color: #d8fbee;
  color: #1cc88a;
}
</style>
