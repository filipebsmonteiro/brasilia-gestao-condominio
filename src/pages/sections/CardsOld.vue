<template>
  <section class="section p-5">
    <div class="m-lg-5 mb-4">
      <h1>Links Rápidos</h1>
    </div>
    <div class="row m-lg-5">
      <div class="col-lg-4 mb-2">
        <b-card class="shadow">
          <b-card-img-lazy src="/img/sections/card_1_old.png" class="mb-5"/>
          <h3>Acesse seu Condomínio</h3>
          <p>Acesse seu condomínio através do link abaixo.</p>
          <div class="d-flex justify-content-center">
            <router-link to="/">Área do Cliente</router-link>
          </div>
        </b-card>
      </div>
      <div class="col-lg-4 mb-2">
        <b-card class="shadow">
          <b-card-img-lazy src="/img/sections/card_2_old.png" class="mb-4"/>
          <h3>Cadastro de Fornecedores</h3>
          <p>Preencha o cadastro, no link abaixo, e seja nosso fornecedor.</p>
          <div class="d-flex justify-content-center">
            <router-link to="/">Cadastro</router-link>
          </div>
        </b-card>
      </div>
      <div class="col-lg-4 mb-2">
        <b-card class="shadow">
          <b-card-img-lazy src="/img/sections/card_3_old.png" class="mb-5"/>
          <h3>Trabalhe conosco</h3>
          <p>Nos envie seu curriculum e contatos através do link abaixo.</p>
          <div class="d-flex justify-content-center">
            <router-link to="/">Curriculum</router-link>
          </div>
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "CardsOld"
}
</script>

<style lang="scss" scoped>
.section {
  background: url("/img/sections/condominio.jpg") fixed center;
  background-size: cover;

  h1 {
    color: whitesmoke;
    text-shadow: 5px 5px 9px black;
  }
}
</style>
