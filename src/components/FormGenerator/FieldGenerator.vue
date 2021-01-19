<template>
  <b-form-group :label="field.label" :description="field.description || ``">
    <b-form-checkbox v-if="field.type === 'checkbox'"
                     :id="`input-${field.name}`"
                     :name="field.name"
                     v-model="model[field.name]"
                     switch>
      <span v-if="model[field.name]">{{ field.onText || `Habilitado` }}</span>
      <span v-else>{{ field.offText || `Desabilitado` }}</span>
    </b-form-checkbox>
    <b-form-select v-else-if="field.type === 'select'"
                   :id="`input-${field.name}`"
                   :name="field.name"
                   v-model="model[field.name]"
                   :options="field.options || [{text: 'No data Found', disabled: true}]"/>
    <b-form-input v-else
                  :id="`input-${field.name}`"
                  :name="field.name"
                  :type="field.type || 'text'"
                  v-model="model[field.name]"
                  :required="field.required"/>
  </b-form-group>
</template>

<script>
export default {
  name: "FieldGenerator",
  props: {
    field: {
      type: Object,
      default: () => {
      }
    },
    model: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped>

</style>