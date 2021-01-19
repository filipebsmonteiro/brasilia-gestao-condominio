<template>
  <div>
    <div class="row ml-3 mr-3">
      <div class="col-md-10">
        <slot name="table-data-filters">
          <b-form v-if="!disableFilter || (!disableFilter && items.length > 0)"
                  @submit="e=>{e.preventDefault();filtrar({page: 1})}" class="row" inline>
            <b-input-group class="rounded-20 border w-25 mb-2 bg-white-50">
              <b-dropdown :text="field_to_filter.text" size="sm" variant="link pr-0">
                <b-dropdown-item v-for="field in fields_filter_local" @click="field_to_filter = field">
                  {{ field.text }}
                </b-dropdown-item>
              </b-dropdown>
              <b-input class="border-0 shadow-none bg-transparent" v-model="text_to_filter"/>
              <b-button variant="link" type="submit" class="align-self-center" pill>
                <i class="fas fa-search"/>
              </b-button>
            </b-input-group>
          </b-form>
        </slot>
      </div>
      <b-dropdown
          v-if="items.length > 0"
          :text="$t('components.table_data.gerenciar_colunas')"
          id="manage-columns"
          class="col-md-2"
          variant="link"
          block
          no-caret>
        <b-dropdown-form>
          <b-form-checkbox v-model="allSelected" @change="toggleAll">
            {{
              allSelected ? $t('components.table_data.desmarcar_todas') :
                  $t('components.table_data.selecionar_todas')
            }}
          </b-form-checkbox>
          <b-form-checkbox-group v-model="selected" :options="fields_checkbox" stacked/>
        </b-dropdown-form>
      </b-dropdown>
    </div>
    <TableSimple
        :items="items"
        :loading="loading"
        :selectable="selectable"
        :paginator="paginator"
        :fields="fieldsToShow"
        :text-empty="textEmpty"
        :route-new="routeNew"
        :text-new="textNew"
        @select="evt => $emit('select', evt)"
        @list="filtrar">
      <template v-for="slotName in Object.keys($scopedSlots)" v-slot:[slotName]="slotScope">
        <slot :name="slotName" v-bind="slotScope"/>
      </template>
    </TableSimple>
  </div>
</template>

<script>
import TableSimple from "@/components/TableSimple";

export default {
  name: "TableData",
  components: {TableSimple},
  props: {
    fields: {
      type: Array,
      default: () => []
    },
    fieldsFilter: {
      type: Array,
      default: () => []
    },
    initial: {
      type: Array,
      default: () => []
    },
    disableFilter: {
      type: Boolean,
      default: false
    },

    /* Props TableSimple */
    textEmpty: {
      type: String
    },
    items: {
      type: Array
    },
    loading: {
      type: Boolean
    },
    selectable: {
      type: Boolean
    },
    paginator: {
      type: Object
    },
    routeNew: {
      type: String
    },
    textNew: {
      type: String
    }
    /* END Props TableSimple */
  },
  computed: {
    fieldsToShow() {
      if (this.selected.length === 0) {
        return this.fields.filter(field => {
          return this.initial_local.includes(field.key)
        })
      }
      return this.fields.filter(field => {
        return this.selected.includes(field.key)
      })
    }
  },
  data() {
    return {
      selected: [],
      fields_filter_local: [],
      field_to_filter: {text: null, value: null},
      text_to_filter: '',
      fields_checkbox: [],
      initial_local: [],
      allSelected: false,
    }
  },
  methods: {
    toggleAll(checked) {
      this.selected = checked ?
          this.fields_checkbox.map(f => {
            return f.value
          }).slice() :
          this.initial_local
    },
    filtrar(evt) {
      let evento = evt.per_page ? evt : {page: evt.page, per_page: this.paginator.per_page}
      if (this.text_to_filter !== '') {
        evento = {...evento, filters: [[this.field_to_filter.value, 'LIKE', `%${this.text_to_filter}%`]]}
      }

      this.$emit('list', evento)
    }
  },
  mounted() {
    this.initial_local = this.initial
    this.selected = this.initial_local
    this.fields_checkbox = this.fields
        .map(f => {
          return {
            text: f.label,
            value: f.key
          }
        })

    this.fields_filter_local = this.fields_checkbox.filter(f => f.value !== 'status' && f.value !== 'id')
    if (this.fieldsFilter.length > 0) {
      this.fields_filter_local = this.fieldsFilter
          .map(f => {
            return {
              text: f.label,
              value: f.key
            }
          })
    }
    this.field_to_filter = this.fields_filter_local[0]

    if (this.initial_local.length === 0) {
      this.allSelected = true
      this.initial_local = [this.fields[0].key]
      this.selected = this.fields.map(f => {
        return f.key
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .dropdown-menu {
  transform: initial !important;
}

.rounded-20 {
  border-radius: 20px !important;
}

.bg-white-50{
  background-color: rgba(255, 255, 255, 0.5);
}
</style>