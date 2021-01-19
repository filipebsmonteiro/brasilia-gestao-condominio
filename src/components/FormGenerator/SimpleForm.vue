<template>
  <b-form @submit="onSubmit">

    <slot v-for="(field, index) in fields" :name="`field(${field.name})`">
      <b-form-group v-if="field.fieldset"
                    label-cols-lg="2"
                    :label="field.fieldsetLabel"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    :class="{'mb-5': true, 'pt-5 mt-5 border-top': index !== 0}">
        <slot v-for="subfield in field.fields" :name="`field(${field.fieldset}.${subfield.name})`">
          <FieldGenerator v-if="field.fieldsetSubLevelModel" :model="model[field.fieldset]" :field="subfield"/>
          <FieldGenerator v-else :model="model" :field="subfield"/>
        </slot>
      </b-form-group>
      <FieldGenerator v-else :model="model" :field="field"/>
    </slot>

    <slot name="submitButton">
      <b-button variant="success" type="submit" block>
        <i class="fas fa-save"/> Salvar</b-button>
    </slot>
  </b-form>
</template>

<script>
import FieldGenerator from "@/components/FormGenerator/FieldGenerator";

export default {
  name: "SimpleForm",
  components: {FieldGenerator},
  props: {
    fields: {
      type: Array,
      default: () => []
    },
    model: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {},
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$emit('submit')
    }
  }
}
</script>

<style scoped>
</style>