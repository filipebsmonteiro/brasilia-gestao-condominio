<template>
  <GradientBarsRightFixTemplate :title="pageTitle">
    <SimpleForm :fields="fields" :model="model"/>
    <hr>
    <pre>{{ user }}</pre>
    <template slot="TemplateCardRight">
      <h1>Template Right Fix</h1>
      <hr>
      <p>Role a tela para entender o comportamento</p>
    </template>
  </GradientBarsRightFixTemplate>
</template>

<script>
import GradientBarsRightFixTemplate from "@/templates/GradientBarsCardIndexTemplate";
import UserRepository from "@/repositories/UserRepository";
import {mapGetters, mapActions} from 'vuex'
import SimpleForm from "@/components/FormGenerator/SimpleForm";

export default {
  name: "Form",
  components: {SimpleForm, GradientBarsRightFixTemplate},
  computed: {
    ...mapGetters({
      user: 'user/current',
      isLoading: 'user/isLoading'
    }),
    pageTitle() {
      if (this.$route.params.id) return `Editar User`
      return `Criar novo User`
    }
  },
  data() {
    return {
      fields: [
        {label: 'Nome', name: 'name',},
        {label: 'Email', name: 'email', type: 'email',},
        {label: 'Telefone', name: 'phone',},
        {label: 'Site', name: 'website',},
        {
          label: 'Select', name: 'select', type: 'select', options: [
            {value: null, text: 'Please select an option'},
            {value: 'a', text: 'This is First option'},
            {value: 'b', text: 'Selected Option'},
            {value: {C: '3PO'}, text: 'This is an option with object value'},
            {value: 'd', text: 'This one is disabled', disabled: true}
          ]
        },
        {
          label: 'Checkbox',
          name: 'checkbox',
          type: 'checkbox',
          onText: 'Active Text',
          offText: 'Disactive Text'
        },
        {
          fieldsetLabel: 'Endereço',
          fieldset: 'address',
          fieldsetSubLevelModel: true,
          fields: [
            {label: 'Rua', name: 'street',},
            {label: 'Casa', name: 'suite',},
            {label: 'Cidade', name: 'city',},
            {label: 'CEP', name: 'zipcode',},
          ]
        }
      ],
      model: {
        name: '',
        email: '',
        phone: '',
        website: '',
        is_rich: false,
      }
    }
  },
  methods: {
    ...mapActions([
      'user/listOne'
    ]),
    create() {
      UserRepository.post(this.user).then(() => {
        this.$snotify.success(`User criado com Sucesso`)
        this.$router.push({name: 'user.index'})
      }).catch(error => {
        if (error.response.status === 422) {
          UserRepository.toastValidationErrors(error, this.$snotify)
        }
      })
    },
    update() {
      UserRepository.put(this.user.id, this.user).then(() => {
        this.$snotify.success(`User atualizado com Sucesso`)
        this.$router.push({name: 'user.index'})
      }).catch(error => {
        if (error.response.status === 422) {
          UserRepository.toastValidationErrors(error, this.$snotify)
        }
      })
    }
  },
  async mounted() {
    this.$store.commit('user/setCurrent', {})
    if (this.$route.params.id) {
      await this['user/listOne'](this.$route.params.id)
      this.model = {...this.model, ...this.user}
    }
  }
}
</script>

<style scoped>
</style>